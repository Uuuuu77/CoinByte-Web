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
    window.open('https://drive.google.com/file/d/1EJDfNyhU4L8-bLlrqG-EzFfINnjpvGjH/view?usp=sharing', '_blank')
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
              Live in 20+ Countries
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-orange to-primary-gold text-transparent bg-clip-text">
            Build Global Stablecoin<br className="hidden md:block" /> Payment Systems in Minutes
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-light/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enterprise APIs + Decentralized Rails. Start with our CLI, scale with AI-powered compliance across Africa, Asia, and Latin America.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              onClick={() => window.open('https://coinbyte-cli.vercel.app/', '_blank')}
            >
              <BoltIcon className="h-5 w-5" />
              Start Building with CLI →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              onClick={() => window.open('https://v0-byte-e2.vercel.app/', '_blank')}
            >
              <SparklesIcon className="h-5 w-5" />
              Explore Byte AI Research
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary-gold bg-primary-gold/10 border border-primary-gold/30 rounded-lg hover:bg-primary-gold/20 transition-all"
              href="https://identity-forge-wallet.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShieldCheckIcon className="h-4 w-4" />
              DID Wallet (Beta)
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6 mb-12 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/assets/mpesa-logo.png" alt="M-Pesa" className="h-10" />
            <img src="/assets/flutterwave-logo.png" alt="Flutterwave" className="h-8" />
            <img src="/assets/celo-logo.png" alt="Celo" className="h-7" />
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
                  label: 'Development Stage', 
                  value: 'Testnet',
                  metric: 'Private Beta',
                  Icon: ChartBarIcon
                },
                { 
                  label: 'Early Testers', 
                  value: '10+',
                  metric: 'Developers',
                  Icon: GlobeAltIcon
                },
                { 
                  label: 'Target Markets', 
                  value: '20+',
                  metric: 'Countries (Roadmap)',
                  Icon: CurrencyDollarIcon
                },
                { 
                  label: 'Compliance Ready', 
                  value: 'Design Phase',
                  metric: 'MiCA • SOC 2 • GDPR',
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <motion.div 
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="card cursor-pointer"
              onClick={handleAfricaFocus}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary-orange/10 p-2 rounded-lg flex-shrink-0">
                  <BoltIcon className="h-5 w-5 text-primary-orange" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Lagos → Nairobi
                  </h4>
                  <p className="text-gray-400 text-xs">
                    $1 USDC in 15s →
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="card cursor-pointer"
              onClick={handleAfricaFocus}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary-gold/10 p-2 rounded-lg flex-shrink-0">
                  <BoltIcon className="h-5 w-5 text-primary-gold" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    São Paulo → Manila
                  </h4>
                  <p className="text-gray-400 text-xs">
                    $5 USDC in 22s →
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="card cursor-pointer"
              onClick={handleAfricaFocus}
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg flex-shrink-0">
                  <BoltIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    London → Mumbai
                  </h4>
                  <p className="text-gray-400 text-xs">
                    $10 USDC in 18s →
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
