/**
 * Crypto API Utilities with Enhanced Error Handling and Caching
 */

// Configuration constants
const API_CONFIG = {
  baseUrl: 'https://api.coingecko.com/api/v3/simple/price',
  defaultIds: ['bitcoin', 'ethereum', 'tether', 'usd-coin', 'binancecoin', 'ripple'],
  vsCurrency: 'usd',
  cacheTTL: 10000, // 10 seconds
  retryCount: 2,
  retryDelay: 1000
};

// Crypto metadata mapping
const CRYPTO_METADATA = {
  bitcoin: { name: 'Bitcoin', symbol: 'BTC' },
  ethereum: { name: 'Ethereum', symbol: 'ETH' },
  tether: { name: 'Tether', symbol: 'USDT' },
  'usd-coin': { name: 'USD Coin', symbol: 'USDC' },
  binancecoin: { name: 'BNB', symbol: 'BNB' },
  ripple: { name: 'XRP', symbol: 'XRP' }
};

// Cache implementation
let apiCache = {
  data: null,
  timestamp: 0
};

// Export the fetch function
export async function fetchCryptoData(params = {}) {
  try {
    // Use cache if available and valid
    if (apiCache.data && Date.now() - apiCache.timestamp < API_CONFIG.cacheTTL) {
      return apiCache.data;
    }

    // Configure request parameters
    const requestParams = {
      ids: params.ids || API_CONFIG.defaultIds.join(','),
      vs_currencies: API_CONFIG.vsCurrency,
      include_24hr_change: true
    };

    // Build URL with parameters
    const url = new URL(API_CONFIG.baseUrl);
    Object.entries(requestParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    // Retry logic implementation
    let response;
    for (let i = 0; i < API_CONFIG.retryCount; i++) {
      try {
        response = await fetch(url);
        if (response.ok) break;
      } catch (error) {
        if (i === API_CONFIG.retryCount - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, API_CONFIG.retryDelay));
      }
    }

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`API request failed: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();
    
    // Update cache
    apiCache = {
      data,
      timestamp: Date.now()
    };

    return data;
  } catch (error) {
    reportError(error, 'fetchCryptoData');
    throw error;
  }
}

// Export the format function
export function formatCryptoData(data) {
  try {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format received');
    }

    return Object.entries(data).map(([id, values]) => {
      const metadata = CRYPTO_METADATA[id] || { name: id.toUpperCase(), symbol: id.slice(0, 4).toUpperCase() };
      
      return {
        id,
        name: metadata.name,
        symbol: metadata.symbol,
        price: values[API_CONFIG.vsCurrency] || 0,
        change: values[`${API_CONFIG.vsCurrency}_24h_change`] || 0
      };
    });
  } catch (error) {
    reportError(error, 'formatCryptoData');
    return [];
  }
}

// Utility functions (keep window attachments if needed)
window.fetchCryptoData = fetchCryptoData;
window.formatCryptoData = formatCryptoData;

window.getCryptoName = function(id) {
  return CRYPTO_METADATA[id]?.name || id.toUpperCase();
};

window.formatPrice = function(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(price);
};

window.refreshCryptoData = function() {
  apiCache = { data: null, timestamp: 0 };
};

// Error reporting
window.reportError = function(error, context = 'api') {
  console.error(`[API Error] ${context}:`, error);
};
