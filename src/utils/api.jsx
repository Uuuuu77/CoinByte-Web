/**
 * Crypto API Utilities for CoinByte
 * - 30-second refresh capability with exponential backoff
 * - Stablecoin-first data structure
 * - African market focus with localized caching
 */

// API Configuration with 30-second refresh
const API_CONFIG = {
  baseUrl: 'https://api.coingecko.com/api/v3/simple/price',
  defaultIds: [
    'bitcoin', 'ethereum', 'solana',
    'tether', 'usd-coin', // Stablecoins
    'binancecoin', 'cardano', 'ripple',
    'celo', 'stellar', 'celo-dollar' // African-focused
  ],
  vsCurrency: 'usd',
  cacheTTL: 30000, // Updated to 30 seconds
  retryConfig: {
    maxAttempts: 3,
    baseDelay: 500,
    maxDelay: 3000
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'CoinByte-Web/2.0 (African Markets)'
  }
};

// Enhanced metadata with African market details
const CRYPTO_METADATA = {
  bitcoin: { name: 'Bitcoin', symbol: 'BTC', type: 'crypto', region: 'global' },
  ethereum: { name: 'Ethereum', symbol: 'ETH', type: 'crypto', region: 'global' },
  tether: { name: 'Tether', symbol: 'USDT', type: 'stablecoin', region: 'global' },
  'usd-coin': { name: 'USD Coin', symbol: 'USDC', type: 'stablecoin', region: 'global' },
  solana: { name: 'Solana', symbol: 'SOL', type: 'crypto', region: 'global' },
  celo: { name: 'Celo', symbol: 'CELO', type: 'crypto', region: 'africa' },
  'celo-dollar': { name: 'cUSD', symbol: 'cUSD', type: 'stablecoin', region: 'africa' },
  binancecoin: { name: 'BNB', symbol: 'BNB', type: 'crypto', region: 'global' },
  ripple: { name: 'XRP', symbol: 'XRP', type: 'crypto', region: 'global' },
  stellar: { name: 'Stellar', symbol: 'XLM', type: 'crypto', region: 'africa' }
};

// Enhanced cache system with regional tracking
let apiCache = {
  data: null,
  timestamp: 0,
  etag: null,
  regionStats: {
    africa: { lastUpdated: 0, count: 0 },
    global: { lastUpdated: 0, count: 0 }
  }
};

// Smart fetch with exponential backoff and regional awareness
export async function fetchCryptoData(params = {}) {
  const isCacheValid = apiCache.data && 
    Date.now() - apiCache.timestamp < API_CONFIG.cacheTTL;

  if (isCacheValid) {
    return apiCache.data;
  }

  const requestParams = {
    ids: params.ids || API_CONFIG.defaultIds.join(','),
    vs_currencies: API_CONFIG.vsCurrency,
    include_24hr_change: true,
    include_last_updated_at: true,
    precision: '4'
  };

  const url = new URL(API_CONFIG.baseUrl);
  Object.entries(requestParams).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const headers = new Headers(API_CONFIG.headers);
  if (apiCache.etag) headers.set('If-None-Match', apiCache.etag);

  let response;
  let attempt = 0;
  const { maxAttempts, baseDelay, maxDelay } = API_CONFIG.retryConfig;

  while (attempt < maxAttempts) {
    try {
      response = await fetch(url, { headers });
      
      if (response.status === 304) {
        apiCache.timestamp = Date.now();
        return apiCache.data;
      }

      if (response.ok) break;

    } catch (error) {
      if (++attempt === maxAttempts) throw error;
      const delay = Math.min(baseDelay * 2 ** attempt, maxDelay);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const newEtag = response.headers.get('ETag');
  const data = await response.json();

  // Update regional statistics
  const regionStats = { africa: 0, global: 0 };
  Object.keys(data).forEach(id => {
    const region = CRYPTO_METADATA[id]?.region || 'global';
    regionStats[region]++;
  });

  apiCache = {
    data,
    timestamp: Date.now(),
    etag: newEtag,
    regionStats: {
      africa: { lastUpdated: Date.now(), count: regionStats.africa },
      global: { lastUpdated: Date.now(), count: regionStats.global }
    }
  };

  return data;
}

// Enhanced formatter with regional data
export function formatCryptoData(data) {
  if (!data || typeof data !== 'object') return [];

  return Object.entries(data)
    .map(([id, values]) => {
      const metadata = CRYPTO_METADATA[id] || { 
        name: id.toUpperCase(),
        symbol: id.slice(0, 4).toUpperCase(),
        type: 'crypto',
        region: 'global'
      };

      return {
        id,
        region: metadata.region,
        name: metadata.name,
        symbol: metadata.symbol,
        type: metadata.type,
        price: values[API_CONFIG.vsCurrency] || 0,
        change: values[`${API_CONFIG.vsCurrency}_24h_change`] || 0,
        lastUpdated: values.last_updated_at || Date.now()
      };
    })
    .sort((a, b) => {
      if (a.type === 'stablecoin' && b.type !== 'stablecoin') return -1;
      if (b.type === 'stablecoin' && a.type !== 'stablecoin') return 1;
      return b.region.localeCompare(a.region); // Africa first
    });
}

// Enhanced currency formatting for African locales
window.formatPrice = function(price, currency = 'USD', locale = 'en-US') {
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  };

  // Special handling for African currencies
  if (currency === 'NGN') options.maximumFractionDigits = 2;
  if (currency === 'KES') options.maximumFractionDigits = 2;
  if (currency === 'GHS') options.maximumFractionDigits = 2;

  return new Intl.NumberFormat(locale, options).format(price);
};

// Cache management with 30-second refresh
window.refreshCryptoData = function() {
  apiCache = { 
    ...apiCache, 
    data: null, 
    timestamp: 0, 
    etag: null 
  };
};

// Enhanced error reporting
window.reportError = function(error, context = 'api') {
  console.error(`[CoinByte Error] ${context}:`, error);
  if (typeof window.trackJs !== 'undefined') {
    window.trackJs.track(error);
  }
};

// Utility functions
export const APIUtils = {
  getCacheStatus: () => ({
    age: Date.now() - apiCache.timestamp,
    regions: apiCache.regionStats
  }),
  getSupportedCurrencies: () => ['USD', 'NGN', 'KES', 'GHS', 'ZAR']
};

// Type definitions
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
