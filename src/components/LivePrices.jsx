// LivePrices.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
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
    ? prices.filter(coin => coin.type === 'stablecoin')
    : prices

  return (
    <section id="prices" className="py-20" style={{ background: '#111' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag tag-orange mb-4">LIVE MARKETS</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Real-time stablecoin data.
          </h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: '#9CA3AF' }}>
            Live prices and cross-border payment corridors across emerging markets.
          </p>
          
          {/* Stablecoin Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
            <span className="text-sm" style={{ color: '#4B5563' }}>All Coins</span>
            <button
              onClick={() => setShowStablecoinsOnly(!showStablecoinsOnly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
              style={{
                background: showStablecoinsOnly ? '#FF6A00' : '#2A2A2A',
                border: showStablecoinsOnly ? '1px solid #FF6A00' : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showStablecoinsOnly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className="text-sm"
              style={{ color: showStablecoinsOnly ? '#F2F2F2' : '#4B5563' }}
            >
              Stablecoins Only
            </span>
          </div>
        </div>

        {/* Payment Corridors Section */}
        <div className="mb-16 text-center">
          <span className="tag tag-orange mb-6">PAYMENT CORRIDORS</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
            {paymentCorridors.map((corridor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#1C1C1C',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '20px 24px',
                  textAlign: 'center',
                  transition: 'border-color .2s'
                }}
                whileHover={{ borderColor: 'rgba(255,106,0,0.35)' }}
              >
                <div className="text-2xl mb-3">{corridor.flag}</div>
                <h4 className="font-semibold text-white text-base mb-3">
                  {corridor.from} → {corridor.to}
                </h4>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: '#4B5563' }}>Settlement</span>
                    <span style={{ fontSize: 13, color: '#4ADE80', fontWeight: 600 }}>
                      {corridor.time}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: '#4B5563' }}>Fee</span>
                    <span style={{ fontSize: 13, color: '#FF6A00', fontWeight: 600 }}>
                      {corridor.fee}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-20 rounded-xl" style={{ background: '#1C1C1C' }} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 space-y-4">
            <p className="text-red-500">{error}</p>
            <button
              onClick={fetchPrices}
              className="btn-secondary flex items-center gap-2 mx-auto"
            >
              <ArrowPathIcon className="w-5 h-5" />
              Retry
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredPrices.map((coin) => (
              <motion.div
                key={coin.id}
                style={{
                  background: '#1C1C1C',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'border-color .2s'
                }}
                whileHover={{ borderColor: 'rgba(255,106,0,0.35)' }}
              >
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {coin.symbol}
                    {coin.type === 'stablecoin' && (
                      <span className="tag tag-green ml-2">
                        Stablecoin
                      </span>
                    )}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: '#4B5563' }}>{coin.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-white">
                    {window.formatPrice ? window.formatPrice(coin.price) : `$${coin.price?.toFixed(2) || '0.00'}`}
                  </p>
                  <p className={`text-xs ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {coin.change >= 0 ? '+' : ''}{coin.change?.toFixed(2) || '0.00'}%
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default LivePrices
