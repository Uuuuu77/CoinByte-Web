/**
 * Crypto API utilities for CoinByte market previews.
 *
 * The cache is intentionally short-lived (30 seconds) so the UI feels live while
 * avoiding duplicate CoinGecko requests during route transitions and re-renders.
 */
export const API_CONFIG = Object.freeze({
  baseUrl: 'https://api.coingecko.com/api/v3/simple/price',
  defaultIds: [
    'bitcoin',
    'ethereum',
    'solana',
    'tether',
    'usd-coin',
    'usds',
    'usd1-wlfi',
    'dai',
    'ethena-usde',
    'paypal-usd',
    'global-dollar',
    'falcon-usd',
    'ripple-usd',
    'binancecoin',
    'cardano',
    'ripple',
    'celo',
    'stellar',
    'celo-dollar',
  ],
  vsCurrency: 'usd',
  cacheTTL: 30000,
  timeoutMs: 10000,
  retryConfig: {
    maxAttempts: 3,
    baseDelay: 500,
    maxDelay: 3000,
  },
  headers: {
    Accept: 'application/json',
  },
})

export const CRYPTO_METADATA = Object.freeze({
  bitcoin: { name: 'Bitcoin', symbol: 'BTC', type: 'crypto', region: 'global' },
  ethereum: { name: 'Ethereum', symbol: 'ETH', type: 'crypto', region: 'global' },
  tether: { name: 'Tether', symbol: 'USDT', type: 'stablecoin', region: 'global' },
  'usd-coin': { name: 'USD Coin', symbol: 'USDC', type: 'stablecoin', region: 'global' },
  usds: { name: 'USDS', symbol: 'USDS', type: 'stablecoin', region: 'global' },
  'usd1-wlfi': { name: 'World Liberty Financial USD', symbol: 'USD1', type: 'stablecoin', region: 'global' },
  dai: { name: 'Dai', symbol: 'DAI', type: 'stablecoin', region: 'global' },
  'ethena-usde': { name: 'Ethena USDe', symbol: 'USDe', type: 'stablecoin', region: 'global' },
  'paypal-usd': { name: 'PayPal USD', symbol: 'PYUSD', type: 'stablecoin', region: 'global' },
  'global-dollar': { name: 'Global Dollar', symbol: 'USDG', type: 'stablecoin', region: 'global' },
  'falcon-usd': { name: 'Falcon USD', symbol: 'USDF', type: 'stablecoin', region: 'global' },
  'ripple-usd': { name: 'Ripple USD', symbol: 'RLUSD', type: 'stablecoin', region: 'global' },
  solana: { name: 'Solana', symbol: 'SOL', type: 'crypto', region: 'global' },
  celo: { name: 'Celo', symbol: 'CELO', type: 'crypto', region: 'africa' },
  'celo-dollar': { name: 'cUSD', symbol: 'cUSD', type: 'stablecoin', region: 'africa' },
  binancecoin: { name: 'BNB', symbol: 'BNB', type: 'crypto', region: 'global' },
  cardano: { name: 'Cardano', symbol: 'ADA', type: 'crypto', region: 'global' },
  ripple: { name: 'XRP', symbol: 'XRP', type: 'crypto', region: 'global' },
  stellar: { name: 'Stellar', symbol: 'XLM', type: 'crypto', region: 'africa' },
})

const createInitialCache = () => ({
  data: null,
  timestamp: 0,
  etag: null,
  cacheKey: '',
  regionStats: {
    africa: { lastUpdated: 0, count: 0 },
    global: { lastUpdated: 0, count: 0 },
  },
})

let apiCache = createInitialCache()

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function createAbortSignal(externalSignal, timeoutMs) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(new DOMException('Request timed out', 'TimeoutError')), timeoutMs)

  if (externalSignal) {
    if (externalSignal.aborted) controller.abort(externalSignal.reason)
    externalSignal.addEventListener('abort', () => controller.abort(externalSignal.reason), { once: true })
  }

  return {
    signal: controller.signal,
    cleanup: () => clearTimeout(timeoutId),
  }
}

function buildRequestUrl(config, params) {
  const requestParams = {
    ids: Array.isArray(params.ids) ? params.ids.join(',') : params.ids || config.defaultIds.join(','),
    vs_currencies: params.vsCurrency || config.vsCurrency,
    include_24hr_change: true,
    include_last_updated_at: true,
    precision: '4',
  }

  const url = new URL(config.baseUrl)
  Object.entries(requestParams).forEach(([key, value]) => url.searchParams.append(key, value))
  return { url, cacheKey: url.toString() }
}

function toApiError(error, context = {}) {
  if (error?.name === 'AbortError' || error?.name === 'TimeoutError') {
    return Object.assign(new Error(error.message || 'Crypto price request was cancelled.'), {
      code: 'REQUEST_ABORTED',
      cause: error,
      ...context,
    })
  }

  return Object.assign(error instanceof Error ? error : new Error(String(error)), context)
}

function updateRegionalStats(data) {
  const regionStats = { africa: 0, global: 0 }

  Object.keys(data).forEach((id) => {
    const region = CRYPTO_METADATA[id]?.region || 'global'
    regionStats[region] += 1
  })

  const updatedAt = Date.now()
  return {
    africa: { lastUpdated: updatedAt, count: regionStats.africa },
    global: { lastUpdated: updatedAt, count: regionStats.global },
  }
}

/**
 * Fetches market data with cache, timeout, abort-signal, and retry support.
 * Non-OK responses are retried with exponential backoff before surfacing a
 * typed error object that components can display without exposing internals.
 */
export async function fetchCryptoData(params = {}, config = API_CONFIG) {
  const { url, cacheKey } = buildRequestUrl(config, params)
  const isCacheValid =
    !params.forceRefresh && apiCache.data && apiCache.cacheKey === cacheKey && Date.now() - apiCache.timestamp < config.cacheTTL

  if (isCacheValid) return apiCache.data

  const headers = new Headers(config.headers)
  if (apiCache.etag && apiCache.cacheKey === cacheKey) headers.set('If-None-Match', apiCache.etag)

  const { maxAttempts, baseDelay, maxDelay } = config.retryConfig
  let lastError

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const { signal, cleanup } = createAbortSignal(params.signal, params.timeoutMs || config.timeoutMs)

    try {
      const response = await fetch(url, { headers, signal })

      if (response.status === 304 && apiCache.data) {
        apiCache = { ...apiCache, timestamp: Date.now() }
        return apiCache.data
      }

      if (!response.ok) {
        throw Object.assign(new Error(`API request failed: ${response.status}`), {
          code: 'HTTP_ERROR',
          status: response.status,
        })
      }

      const data = await response.json()
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        throw Object.assign(new Error('API returned an unexpected payload.'), { code: 'INVALID_PAYLOAD' })
      }

      apiCache = {
        data,
        timestamp: Date.now(),
        etag: response.headers.get('ETag'),
        cacheKey,
        regionStats: updateRegionalStats(data),
      }

      return data
    } catch (error) {
      const apiError = toApiError(error, { attempt })
      lastError = apiError
      if (apiError.code === 'REQUEST_ABORTED' || attempt === maxAttempts) throw apiError
      await wait(Math.min(baseDelay * 2 ** (attempt - 1), maxDelay))
    } finally {
      cleanup()
    }
  }

  throw lastError
}

export function formatCryptoData(data, vsCurrency = API_CONFIG.vsCurrency) {
  if (!data || typeof data !== 'object') return []

  return Object.entries(data)
    .map(([id, values]) => {
      const metadata = CRYPTO_METADATA[id] || {
        name: id.toUpperCase(),
        symbol: id.slice(0, 4).toUpperCase(),
        type: 'crypto',
        region: 'global',
      }

      return {
        id,
        region: metadata.region,
        name: metadata.name,
        symbol: metadata.symbol,
        type: metadata.type,
        price: values[vsCurrency] || 0,
        change: values[`${vsCurrency}_24h_change`] || 0,
        lastUpdated: values.last_updated_at || Date.now(),
      }
    })
    .sort((a, b) => {
      if (a.type === 'stablecoin' && b.type !== 'stablecoin') return -1
      if (b.type === 'stablecoin' && a.type !== 'stablecoin') return 1
      return a.region.localeCompare(b.region)
    })
}

export function formatPrice(price, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: ['NGN', 'KES', 'GHS'].includes(currency) ? 2 : 4,
  }).format(Number(price) || 0)
}

export function refreshCryptoData() {
  apiCache = createInitialCache()
}

export function reportApiError(error, context = 'api') {
  console.error(`[CoinByte Error] ${context}:`, error)
}

export const APIUtils = {
  getCacheStatus: () => ({
    age: apiCache.timestamp ? Date.now() - apiCache.timestamp : 0,
    regions: apiCache.regionStats,
  }),
  getSupportedCurrencies: () => ['USD', 'NGN', 'KES', 'GHS', 'ZAR'],
}

/**
 * @typedef {Object} CryptoData
 * @property {string} id
 * @property {string} name
 * @property {string} symbol
 * @property {'crypto'|'stablecoin'} type
 * @property {'africa'|'global'} region
 * @property {number} price
 * @property {number} change
 * @property {number} lastUpdated
 */
