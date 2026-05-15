import { useState } from 'react'
import { ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const statusConfig = {
  pending: {
    icon: <ClockIcon className="w-8 h-8 text-yellow-500" />,
    message: "Transaction being processed - usually completes within 2 minutes",
    color: "bg-yellow-500/10",
    button: "bg-yellow-500 hover:bg-yellow-600"
  },
  completed: {
    icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
    message: "Success! Funds have been transferred to recipient wallet",
    color: "bg-green-500/10",
    button: "bg-green-500 hover:bg-green-600"
  },
  failed: {
    icon: <XCircleIcon className="w-8 h-8 text-red-500" />,
    message: "Transaction failed. Please check details and try again",
    color: "bg-red-500/10",
    button: "bg-red-500 hover:bg-red-600"
  }
}

const accentColors = {
  pending: '#EAB308',
  completed: '#22C55E',
  failed: '#EF4444'
}

const TransactionStatus = () => {
  const [status, setStatus] = useState("pending")
  const accentColor = accentColors[status]

  return (
    <section className="py-20" style={{ background: '#0E0E0E' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag tag-orange mb-4">TRANSACTION SIMULATOR</span>
          <h2
            className="text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            See how payments settle.
          </h2>
          <p className="text-sm max-w-sm mx-auto" style={{ color: '#9CA3AF' }}>
            Test the full payment lifecycle — pending, confirmed, and failed states.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div
            style={{
              background: '#1C1C1C',
              border: '1px solid rgba(255,255,255,0.07)',
              borderLeft: `3px solid ${accentColor}`,
              borderRadius: 16,
              padding: '24px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              marginBottom: 24,
              minHeight: 120
            }}
          >
            <div className="flex-shrink-0">{statusConfig[status].icon}</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-2">
                {status[0].toUpperCase() + status.slice(1)} Transaction
              </h3>
              <p className="text-sm" style={{ color: '#9CA3AF' }}>
                {statusConfig[status].message}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
            {Object.keys(statusConfig).map((key) => {
              const color = accentColors[key]

              return (
                <button
                  key={key}
                  onClick={() => setStatus(key)}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.background = `${color}1A`
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.background = `${color}0D`
                  }}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 999,
                    border: `1px solid ${color}22`,
                    background: `${color}0D`,
                    color,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all .15s',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {key[0].toUpperCase() + key.slice(1)}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionStatus
