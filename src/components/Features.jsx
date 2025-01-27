import { motion } from 'framer-motion'
import { LightningBoltIcon, ShieldCheckIcon, CurrencyDollarIcon, ChartBarIcon, GlobeIcon, ChatIcon } from '@heroicons/react/outline'

const Features = () => {
  const features = [
    {
      title: "Instant Transfers",
      description: "Global payments in seconds with 0.1% fees",
      icon: <LightningBoltIcon className="w-8 h-8" />,
      delay: 0.1
    },
    {
      title: "Secure Storage",
      description: "AES-256 encryption & multi-sig wallets",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      delay: 0.2
    },
    {
      title: "Multi-Currency",
      description: "100+ cryptocurrencies & stablecoins",
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      delay: 0.3
    },
    {
      title: "Smart Trading",
      description: "AI-powered market insights & automation",
      icon: <ChartBarIcon className="w-8 h-8" />,
      delay: 0.4
    },
    {
      title: "DeFi Access",
      description: "Integrated decentralized finance protocols",
      icon: <GlobeIcon className="w-8 h-8" />,
      delay: 0.5
    },
    {
      title: "24/7 Support",
      description: "Priority support & dedicated account managers",
      icon: <ChatIcon className="w-8 h-8" />,
      delay: 0.6
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-primary-black to-primary-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage digital assets at scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.day }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl backdrop-blur-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 bg-black/30"
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-primary-orange to-primary-gold">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
