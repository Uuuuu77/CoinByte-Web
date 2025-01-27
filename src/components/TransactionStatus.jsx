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

const TransactionStatus = () => {
  const [status, setStatus] = useState("pending")

  return (
    <section className="py-24 bg-gradient-to-b from-primary-black to-primary-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-8">
          Transaction Status
        </h2>

        <div className={`p-8 rounded-2xl ${statusConfig[status].color} transition-all`}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">{statusConfig[status].icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {status[0].toUpperCase() + status.slice(1)} Transaction
              </h3>
              <p className="text-secondary-light">{statusConfig[status].message}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {Object.keys(statusConfig).map((key) => (
            <button
              key={key}
              onClick={() => setStatus(key)}
              className={`${statusConfig[key].button} text-white px-6 py-2 rounded-lg transition-colors`}
            >
              Simulate {key[0].toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TransactionStatus
