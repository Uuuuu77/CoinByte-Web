import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

const LiveMarketData = () => {
  const [marketData, setMarketData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchMarketData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,usdt,usdc,binancecoin&order=market_cap_desc`
      )

      if (!response.ok) throw new Error('Failed to fetch market data')
      const data = await response.json()
      setMarketData(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
    const interval = setInterval(fetchMarketData, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-primary-black to-primary-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Live Market Data
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto">
            Real-time cryptocurrency prices and market movements
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-secondary-gray rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketData.map((coin, index) => (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-black/50 rounded-xl backdrop-blur-lg border border-orange-500/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={coin.image} 
                      alt={coin.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <h3 className="text-xl font-semibold text-gray-100">
                      {coin.symbol.toUpperCase()}
                    </h3>
                  </div>
                  <span className="text-secondary-light">
                    #{coin.market_cap_rank}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-secondary-light">Price</span>
                    <span className="font-medium">
                      ${coin.current_price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-light">24h Change</span>
                    <span className={`${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-light">Market Cap</span>
                    <span className="font-medium">
                      ${coin.market_cap.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={fetchMarketData}
            className="text-secondary-light hover:text-primary-orange transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowPathIcon className="w-5 h-5" />
            Refresh Data
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveMarketData
