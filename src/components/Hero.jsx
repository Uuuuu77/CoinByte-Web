import { motion } from 'framer-motion'
import { trackEvent } from '../utils/actions'
import { 
  SparklesIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

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
          <div className="mb-8 flex justify-center gap-3 flex-wrap">
            <div className="badge bg-orange-500/20 text-primary-orange flex items-center">
              <SparklesIcon className="h-5 w-5 mr-1.5" />
              AI-Powered Payments
            </div>
            <div className="badge bg-green-500/20 text-green-400 flex items-center">
              <GlobeAltIcon className="h-5 w-5 mr-1.5" />
              Live in 20+ African Countries
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-orange to-primary-gold text-transparent bg-clip-text">
            Enterprise APIs Meet<br className="hidden md:block" /> Decentralized Finance
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-light/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build compliant crypto payment systems while empowering underbanked users
            with decentralized rails across emerging markets
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              onClick={() => window.open('https://wt.ls/waitlist', '_blank')}
            >
              <BoltIcon className="h-5 w-5" />
              Start Building →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              onClick={handleAPIDocs}
            >
              <ChartBarIcon className="h-5 w-5" />
              Developer Docs
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-12 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/mpesa-logo.svg" alt="M-Pesa" className="h-10" />
            <img src="/flutterwave-logo.svg" alt="Flutterwave" className="h-8" />
            <img src="/celo-logo.svg" alt="Celo" className="h-7" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 relative w-full max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/10 to-primary-gold/5 blur-3xl" />
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="card group"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { 
                  label: 'API Throughput', 
                  value: '5M+',
                  metric: 'Daily Calls',
                  Icon: ChartBarIcon
                },
                { 
                  label: 'Market Reach', 
                  value: '20+',
                  metric: 'Countries',
                  Icon: GlobeAltIcon
                },
                { 
                  label: 'Assets', 
                  value: 'Multi-Chain',
                  metric: 'USDC • cUSD • naira',
                  Icon: CurrencyDollarIcon
                },
                { 
                  label: 'Compliance', 
                  value: 'Enterprise',
                  metric: 'MiCA • GDPR',
                  Icon: ShieldCheckIcon
                }
              ].map(({ Icon, ...stat }, index) => (
                <div key={index} className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="h-8 w-8 text-primary-orange p-1.5 bg-orange-500/10 rounded-lg" />
                  </div>
                  <div className="text-2xl font-bold text-primary-orange mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-secondary-light mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    {stat.metric}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 card cursor-pointer"
            onClick={handleAfricaFocus}
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary-orange/10 p-3 rounded-lg flex-shrink-0">
                <BoltIcon className="h-6 w-6 text-primary-orange" />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-white mb-1">
                  Instant Cross-Border Demo
                </h3>
                <p className="text-gray-400 text-sm">
                  Send $1 USDC from Lagos to Nairobi in 15s →
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
