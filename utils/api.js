window.fetchCryptoData = async function() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,usd-coin,binancecoin,ripple&vs_currencies=usd&include_24hr_change=true'
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
    }
    
    return await response.json();
  } catch (error) {
    reportError(error);
    return null;
  }
};

window.formatCryptoData = async function(data) {
  try {
    if (!data) return [];

    const cryptoMap = {
      bitcoin: { name: 'Bitcoin', symbol: 'BTC' },
      ethereum: { name: 'Ethereum', symbol: 'ETH' },
      tether: { name: 'Tether', symbol: 'USDT' },
      'usd-coin': { name: 'USD Coin', symbol: 'USDC' },
      binancecoin: { name: 'BNB', symbol: 'BNB' },
      ripple: { name: 'XRP', symbol: 'XRP' }
    };

    return Object.entries(data).map(([id, values]) => ({
      id,
      name: cryptoMap[id].name,
      symbol: cryptoMap[id].symbol,
      price: values.usd,
      change: values.usd_24h_change
    }));
  } catch (error) {
    reportError(error);
    return [];
  }
};
