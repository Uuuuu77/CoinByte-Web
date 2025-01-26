// LiveMarketData.js
import React, { useState, useEffect } from 'react';

const LiveMarketData = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana,dogecoin,usdt,usdc',
            order: 'market_cap_desc',
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setMarketData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMarketData();
    const intervalId = setInterval(fetchMarketData, 60000); // Refresh every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (loading) {
    return <div className="text-center">Loading market data...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section data-name="live-market-data" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#333] mb-8">Live Market Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketData.map((coin) => (
            <div key={coin.id} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-center mb-4">{coin.name}</h3>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-medium">Price:</p>
                <p className="text-lg text-green-500">{`$${coin.current_price.toFixed(2)}`}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-medium">24h Change:</p>
                <p className={`text-lg ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-medium">Market Cap:</p>
                <p className="text-lg">{`$${coin.market_cap.toLocaleString()}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMarketData;
