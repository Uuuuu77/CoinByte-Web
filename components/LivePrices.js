import React from 'react';
import { fetchCryptoData, formatCryptoData, reportError } from './utils'; // Import necessary utilities
import { ArrowRight } from './Icons'; // Ensure this icon is imported correctly

function LivePrices() {
  const [prices, setPrices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchPrices = async () => {
    try {
      setLoading(true);
      const data = await fetchCryptoData();
      if (data) {
        const formattedData = await formatCryptoData(data);
        setPrices(formattedData);
      }
      setLoading(false);
    } catch (error) {
      reportError(error);
      setError('Failed to fetch prices');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section data-name="live-prices" id="prices" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Market Prices
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time cryptocurrency prices updated every 30 seconds
          </p>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#FF6A00]"></div>
            <p className="mt-4 text-gray-400">Loading prices...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-500">{error}</p>
            <button 
              onClick={fetchPrices}
              className="mt-4 button-primary"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((coin) => (
              <div
                key={coin.id}
                data-name={`price-card-${coin.symbol}`}
                className="card"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{coin.name}</h3>
                    <p className="text-sm text-gray-400">{coin.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${coin.price.toFixed(2)}</p>
                    <p className={`text-sm ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LivePrices;
