// LivePrices.jsx
import { useState, useEffect } from 'react'
import { ArrowPathIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { fetchCryptoData, formatCryptoData } from '../utils/api'

const paymentCorridors = [
  { 
    from: 'San Francisco', 
    to: 'Nairobi', 
    time: '12 seconds', 
    fee: '$0.05',
    flag: '🇺🇸 → 🇰🇪'
  },
  { 
    from: 'London', 
    to: 'Mumbai', 
    time: '18 seconds', 
    fee: '$0.07',
    flag: '🇬🇧 → 🇮🇳'
  },
  { 
    from: 'São Paulo', 
    to: 'Manila', 
    time: '22 seconds', 
    fee: '$0.09',
    flag: '🇧🇷 → 🇵🇭'
  }
]

const LivePrices = () => {
  const [prices, setPrices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showStablecoinsOnly, setShowStablecoinsOnly] = useState(true)

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

  const filteredPrices = showStablecoinsOnly 
    ? prices.filter(coin => 
        ['USDC', 'USDT', 'CUSD', 'PYUSD', 'DAI'].includes(coin.symbol.toUpperCase())
      )
    : prices

  return (
    <section id="prices" className="py-24 bg-gradient-to-b from-primary-black to-primary-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Live Global Markets
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto mb-8">
            Real-time cryptocurrency prices and stablecoin payment corridors across emerging markets
          </p>
          
          {/* Stablecoin Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-secondary-light text-sm">All Coins</span>
            <button
              onClick={() => setShowStablecoinsOnly(!showStablecoinsOnly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showStablecoinsOnly ? 'bg-primary-orange' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showStablecoinsOnly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-secondary-light text-sm">Stablecoins Only</span>
          </div>
        </div>

        {/* Payment Corridors Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <GlobeAltIcon className="w-6 h-6 text-primary-orange" />
              Global Payment Corridors
            </h3>
            <p className="text-secondary-light/80 max-w-xl mx-auto">
              Instant cross-border stablecoin transfers with transparent fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paymentCorridors.map((corridor, index) => (
              <div
                key={index}
                className="card p-6 text-center border-primary-orange/20 hover:border-primary-orange/40"
              >
                <div className="text-2xl mb-3">{corridor.flag}</div>
                <h4 className="font-semibold text-white mb-2">
                  {corridor.from} → {corridor.to}
                </h4>
                <div className="space-y-1 text-sm text-secondary-light/90">
                  <div className="flex justify-between">
                    <span>Settlement:</span>
                    <span className="text-green-400">{corridor.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee:</span>
                    <span className="text-primary-orange">{corridor.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            {filteredPrices.map((coin) => (
              <div
                key={coin.id}
                className="card hover:border-primary-orange/40"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {coin.symbol}
                      {coin.region === 'africa' && (
                        <span className="ml-2 text-xs bg-primary-gold/20 text-primary-gold px-2 py-1 rounded-full">
                          🌍 Global
                        </span>
                      )}
                      {['USDC', 'USDT', 'CUSD', 'PYUSD', 'DAI'].includes(coin.symbol?.toUpperCase()) && (
                        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          Stablecoin
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-secondary-light">{coin.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">
                      {window.formatPrice ? window.formatPrice(coin.price) : `$${coin.price?.toFixed(2) || '0.00'}`}
                    </p>
                    <p className={`text-sm ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change?.toFixed(2) || '0.00'}%
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
