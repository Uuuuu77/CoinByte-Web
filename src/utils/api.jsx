/**
 * Crypto API Utilities with Enhanced Features for CoinByte
 * - 5-second refresh capability
 * - Stablecoin-first data structure
 * - African market focus
 */

// API Configuration
const API_CONFIG = {
  baseUrl: 'https://api.coingecko.com/api/v3/simple/price',
  defaultIds: [
    'bitcoin', 'ethereum', 'solana',
    'tether', 'usd-coin', // USDT and USDC
    'binancecoin', 'cardano', 'ripple',
    'celo', 'stellar', 'celo-dollar' // African-focused assets
  ],
  vsCurrency: 'usd',
  cacheTTL: 5000, // 5 seconds for live updates
  retryCount: 3,
  retryDelay: 500,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

// Enhanced crypto metadata with African market data
const CRYPTO_METADATA = {
  bitcoin: { name: 'Bitcoin', symbol: 'BTC', type: 'crypto' },
  ethereum: { name: 'Ethereum', symbol: 'ETH', type: 'crypto' },
  tether: { name: 'Tether', symbol: 'USDT', type: 'stablecoin' },
  'usd-coin': { name: 'USD Coin', symbol: 'USDC', type: 'stablecoin' },
  solana: { name: 'Solana', symbol: 'SOL', type: 'crypto' },
  celo: { name: 'Celo', symbol: 'CELO', type: 'crypto' },
  'celo-dollar': { name: 'cUSD', symbol: 'cUSD', type: 'stablecoin' },
  binancecoin: { name: 'BNB', symbol: 'BNB', type: 'crypto' },
  ripple: { name: 'XRP', symbol: 'XRP', type: 'crypto' },
  stellar: { name: 'Stellar', symbol: 'XLM', type: 'crypto' }
};

// Cache system with 5-second expiration
let apiCache = {
  data: null,
  timestamp: 0,
  etag: null
};

// Enhanced fetch function with ETag support
export async function fetchCryptoData(params = {}) {
  try {
    // Return cached data if valid
    if (apiCache.data && Date.now() - apiCache.timestamp < API_CONFIG.cacheTTL) {
      return apiCache.data;
    }

    // Configure request parameters
    const requestParams = {
      ids: params.ids || API_CONFIG.defaultIds.join(','),
      vs_currencies: API_CONFIG.vsCurrency,
      include_24hr_change: true,
      include_last_updated_at: true
    };

    // Build URL
    const url = new URL(API_CONFIG.baseUrl);
    Object.entries(requestParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    // Configure request headers
    const headers = new Headers(API_CONFIG.headers);
    if (apiCache.etag) {
      headers.append('If-None-Match', apiCache.etag);
    }

    let response;
    for (let attempt = 0; attempt < API_CONFIG.retryCount; attempt++) {
      try {
        response = await fetch(url, { headers });
        
        // Handle 304 Not Modified
        if (response.status === 304) {
          apiCache.timestamp = Date.now();
          return apiCache.data;
        }
        
        if (response.ok) break;
        
      } catch (error) {
        if (attempt === API_CONFIG.retryCount - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, API_CONFIG.retryDelay));
      }
    }

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    // Update cache metadata
    const newEtag = response.headers.get('ETag');
    const data = await response.json();

    apiCache = {
      data,
      timestamp: Date.now(),
      etag: newEtag
    };

    return data;

  } catch (error) {
    reportError(error, 'fetchCryptoData');
    throw error;
  }
}

// Enhanced formatter with African market focus
export function formatCryptoData(data) {
  try {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format');
    }

    return Object.entries(data)
      .map(([id, values]) => {
        const metadata = CRYPTO_METADATA[id] || { 
          name: id.toUpperCase(),
          symbol: id.slice(0, 4).toUpperCase(),
          type: 'crypto'
        };

        return {
          id,
          name: metadata.name,
          symbol: metadata.symbol,
          type: metadata.type,
          price: values[API_CONFIG.vsCurrency] || 0,
          change: values[`${API_CONFIG.vsCurrency}_24h_change`] || 0,
          lastUpdated: values.last_updated_at || Date.now()
        };
      })
      .sort((a, b) => {
        // Prioritize stablecoins first
        if (a.type === 'stablecoin' && b.type !== 'stablecoin') return -1;
        if (b.type === 'stablecoin' && a.type !== 'stablecoin') return 1;
        return 0;
      });
  } catch (error) {
    reportError(error, 'formatCryptoData');
    return [];
  }
}

// Enhanced price formatting for African markets
window.formatPrice = function(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(price);
};

// New function for African currency conversion
window.convertToLocalCurrency = function(amount, currencyCode) {
  // Implementation would connect to CoinByte's FX rates API
  return amount * 1; // Placeholder
};

// Error reporting with telemetry
window.reportError = function(error, context = 'api') {
  console.error(`[CoinByte API Error] ${context}:`, error);
  // Add error tracking integration here
};

// Cache management utilities
window.refreshCryptoData = function() {
  apiCache = { data: null, timestamp: 0, etag: null };
};

window.getCacheStatus = function() {
  return {
    age: Date.now() - apiCache.timestamp,
    size: apiCache.data ? Object.keys(apiCache.data).length : 0
  };
};

// Type definitions for TypeScript users
/**
 * @typedef {Object} CryptoData
 * @property {string} id
 * @property {string} name
 * @property {string} symbol
 * @property {'crypto'|'stablecoin'} type
 * @property {number} price
 * @property {number} change
 * @property {number} lastUpdated
 */
