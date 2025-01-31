import { motion } from 'framer-motion'
import { trackEvent } from '../utils/actions'

const Hero = () => {
  const handleAPIDocs = () => {
    trackEvent('api_docs_clicked')
    window.open('#api-docs', '_blank')
  }

  const handleAfricaFocus = () => {
    trackEvent('africa_cta_clicked')
    document.getElementById('africa')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-24 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-primary-black via-[#1a0f00] to-primary-black">
      <div className="container mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8 flex justify-center space-x-4">
            <div className="badge bg-orange-500/20 text-primary-orange px-4 py-2 rounded-full">
              AI-Powered Payments
            </div>
            <div className="badge bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              Live in 20+ African Countries
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-orange to-primary-gold text-transparent bg-clip-text">
            B2B APIs Meet<br className="hidden md:block" /> Decentralized Payments
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-light mb-8 max-w-3xl mx-auto">
            Build compliant crypto payment systems for enterprises while empowering underbanked users
            with decentralized rails across Africa
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="button-primary text-lg px-8 py-4"
              onClick={() => window.openModal('enterprise')}
            >
              For Enterprises →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="button-secondary text-lg px-8 py-4"
              onClick={handleAPIDocs}
            >
              Developer API Docs
            </motion.button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <img src="/mpesa-logo.svg" alt="M-Pesa" className="h-12 opacity-80" />
            <img src="/flutterwave-logo.svg" alt="Flutterwave" className="h-10 opacity-80" />
            <img src="/celo-logo.svg" alt="Celo" className="h-8 opacity-80" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 relative w-full max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-gold opacity-15 blur-3xl" />
          
          <div className="relative bg-black/50 rounded-2xl p-8 backdrop-blur-xl border border-orange-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'API Calls/Day', value: '5M+' },
                { label: 'African Markets', value: '20+' },
                { label: 'Stablecoins', value: 'USDC • cUSD • naira' },
                { label: 'Compliance', value: 'MiCA • GDPR' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-light mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="mt-8 bg-primary-black/80 p-6 rounded-xl border border-gray-800 backdrop-blur-lg text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-orange-500/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Live API Demo</h3>
                <p className="text-gray-400 text-sm">
                  Send $1 USDC from Lagos to Nairobi in 15s
                  <button 
                    onClick={handleAfricaFocus}
                    className="ml-2 text-orange-500 hover:underline"
                  >
                    Try African Payment Rail →
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
