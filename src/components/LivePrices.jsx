// LivePrices.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { fetchCryptoData, formatCryptoData, formatPrice } from '../utils/api'

const paymentCorridors = [
  {
    from: 'San Francisco',
    to: 'Nairobi',
    time: '12 seconds',
    fee: '$0.05',
    flag: '\ud83c\uddfa\ud83c\uddf8 \u2192 \ud83c\uddf0\ud83c\uddea'
  },
  {
    from: 'London',
    to: 'Mumbai',
    time: '18 seconds',
    fee: '$0.07',
    flag: '\ud83c\uddec\ud83c\udde7 \u2192 \ud83c\uddee\ud83c\uddf3'
  },
  {
    from: 'S\u00e3o Paulo',
    to: 'Manila',
    time: '22 seconds',
    fee: '$0.09',
    flag: '\ud83c\udde7\ud83c\uddf7 \u2192 \ud83c\uddf5\ud83c\udded'
  }
]

const LivePrices = () => {
  const [prices, setPrices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showStablecoinsOnly, setShowStablecoinsOnly] = useState(true)

  const fetchPrices = async (signal) => {
    try {
      setLoading(true)
      const data = await fetchCryptoData({ signal })
      setPrices(formatCryptoData(data))
      setError(null)
    } catch (err) {
      if (err.code === 'REQUEST_ABORTED') return
      setError('Failed to fetch prices. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchPrices(controller.signal)
    const interval = setInterval(() => fetchPrices(controller.signal), 30000)

    return () => {
      controller.abort()
      clearInterval(interval)
    }
  }, [])

  const filteredPrices = showStablecoinsOnly
    ? prices.filter(coin => coin.type === 'stablecoin')
    : prices

  return (
    <div className="flex flex-col gap-16">
      <div className="text-center">
        <span className="tag tag-orange mb-4">LIVE MARKETS</span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-3"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Real-time stablecoin data.
        </h2>
        <p className="text-base max-w-xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
          Live prices and cross-border payment corridors across emerging markets.
        </p>

        {/* Stablecoin Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
          <span className="text-sm" style={{ color: 'var(--text-faint)' }}>All Coins</span>
          <button
            type="button"
            aria-label="Toggle stablecoins only"
            aria-pressed={showStablecoinsOnly}
            onClick={() => setShowStablecoinsOnly(!showStablecoinsOnly)}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
            style={{
              background: showStablecoinsOnly ? 'var(--brand-orange)' : 'var(--bg-card)',
              border: showStablecoinsOnly ? '1px solid var(--brand-orange)' : '1px solid var(--border)'
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
            style={{ color: showStablecoinsOnly ? 'var(--text)' : 'var(--text-faint)' }}
          >
            Stablecoins Only
          </span>
        </div>
      </div>

      {/* Payment Corridors Section */}
      <div className="text-center">
        <span className="tag tag-orange mb-6">PAYMENT CORRIDORS</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {paymentCorridors.map((corridor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{
                padding: '20px 24px',
                textAlign: 'center',
              }}
              whileHover={{ borderColor: 'var(--border-hover)' }}
            >
              <div className="text-2xl mb-3">{corridor.flag}</div>
              <h4 className="font-semibold text-white text-base mb-3">
                {corridor.from} → {corridor.to}
              </h4>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: 'var(--text-faint)' }}>Settlement</span>
                  <span style={{ fontSize: 13, color: 'var(--brand-green)', fontWeight: 600 }}>
                    {corridor.time}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-faint)' }}>Fee</span>
                  <span style={{ fontSize: 13, color: 'var(--brand-orange)', fontWeight: 600 }}>
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
            <div key={i} className="h-20 rounded-xl card" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8 space-y-4">
          <p className="text-red-500" role="alert">{error}</p>
          <button
            type="button"
            onClick={() => fetchPrices()}
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {filteredPrices.map((coin) => (
            <motion.div
              key={coin.id}
              className="card"
              style={{
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              whileHover={{ borderColor: 'var(--border-hover)' }}
            >
              <div style={{ minWidth: 0, overflow: 'hidden' }}>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 min-w-0">
                  <span className="truncate">{coin.symbol}</span>
                  {!showStablecoinsOnly && coin.type === 'stablecoin' && (
                    <span className="tag tag-green flex-shrink-0">
                      Stablecoin
                    </span>
                  )}
                </h3>
                <p className="text-xs mt-1" style={{ color: 'var(--text-faint)' }}>{coin.name}</p>
              </div>
              <div className="text-right" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                <p className="text-base font-semibold text-white">
                  {formatPrice(coin.price)}
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
  )
}

export default LivePrices
