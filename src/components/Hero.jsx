import { motion } from 'framer-motion'
import { trackEvent } from '../utils/actions'

const Hero = () => {
  const handleExploreFeatures = () => {
    try {
      trackEvent('explore_features_clicked')
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    } catch (error) {
      console.error('Error handling explore features:', error)
    }
  }

  return (
    <section className="relative pt-24 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-black to-primary-950 opacity-95" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-orange to-primary-gold text-transparent bg-clip-text">
            Revolutionizing Stablecoin Payments
          </h1>
          <p className="text-xl md:text-2xl text-secondary-light mb-8">
            Empowering seamless, fast, and low-cost transactions globally
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="button-primary text-lg"
              onClick={() => window.open('https://wt.ls/waitlist', '_blank')}
              aria-label="Get Started with CoinByte"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="button-secondary text-lg"
              onClick={handleExploreFeatures}
              aria-label="Explore CoinByte Features"
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 relative w-full max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-gold opacity-20 blur-3xl" />
          <div className="relative bg-black/50 rounded-2xl p-8 backdrop-blur-xl border border-orange-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Early Access Users', value: '20K+' },
                { label: 'Daily Transactions', value: '1M+' },
                { label: 'Supported Assets', value: '50+' },
                { label: 'Countries Served', value: '150+' }
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
