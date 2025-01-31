import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowPathIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import { fetchCryptoData, formatCryptoData } from '../utils/api'

const LiveMarketData = () => {
  const [marketData, setMarketData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const rawData = await fetchCryptoData()
      const formattedData = formatCryptoData(rawData)
      setMarketData(formattedData)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])

  // Stablecoin detection
  const isStablecoin = (symbol) => ['USDT', 'USDC'].includes(symbol)

  return (
    <section className="py-24 bg-gradient-to-b from-primary-black to-[#0F0B07]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Real-Time Asset Prices
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto">
            Track stablecoins and digital assets across multiple chains
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-primary-black/50 rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-8 card">
            Error loading data: {error}
            <button
              onClick={fetchData}
              className="button-secondary mt-4 text-sm"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketData.map((coin, index) => (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group relative overflow-hidden"
              >
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={`/${coin.symbol.toLowerCase()}-logo.svg`}
                        alt={coin.name}
                        className="w-12 h-12 rounded-full bg-white/5 p-2"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100">
                          {coin.symbol}
                          {isStablecoin(coin.symbol) && (
                            <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                              Stablecoin
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-secondary-light/80">
                          {coin.name}
                        </p>
                      </div>
                    </div>
                    <span className="text-secondary-light/80 text-sm">
                      #{index + 1}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-light/90">Price</span>
                      <span className="font-medium text-lg">
                        {window.formatPrice(coin.price)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-light/90">24h Change</span>
                      <div className={`flex items-center gap-1 ${
                        coin.change < 0 ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {coin.change < 0 ? (
                          <ArrowDownIcon className="w-4 h-4" />
                        ) : (
                          <ArrowUpIcon className="w-4 h-4" />
                        )}
                        <span>{Math.abs(coin.change).toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <motion.button
            onClick={fetchData}
            whileHover={{ scale: 1.05 }}
            className="text-secondary-light/90 hover:text-primary-orange transition-colors flex items-center justify-center gap-2 mx-auto text-sm"
          >
            <ArrowPathIcon className="w-5 h-5" />
            Live Updates Every 5s
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default LiveMarketData
