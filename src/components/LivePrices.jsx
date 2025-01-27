import { useState, useEffect } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { fetchCryptoData, formatCryptoData } from '../utils/api'

const LivePrices = () => {
  const [prices, setPrices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPrices = async () => {
    try {
      setLoading(true)
      const data = await fetchCryptoData()
      setPrices(formatCryptoData(data))
      setError(null)
    } catch (err) {
      setError('Failed to fetch prices. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="prices" className="py-24 bg-gradient-to-b from-primary-black to-primary-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Live Crypto Prices
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto">
            Real-time cryptocurrency prices updated every 30 seconds
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-20 bg-secondary-gray rounded-xl" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-red-500">{error}</p>
            <button
              onClick={fetchPrices}
              className="button-primary flex items-center gap-2 mx-auto"
            >
              <ArrowPathIcon className="w-5 h-5" />
              Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((coin) => (
              <div
                key={coin.id}
                className="p-6 bg-black/50 rounded-xl backdrop-blur-lg border border-orange-500/20 hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{coin.name}</h3>
                    <p className="text-sm text-secondary-light">{coin.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">${coin.price.toFixed(2)}</p>
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
  )
}

export default LivePrices
