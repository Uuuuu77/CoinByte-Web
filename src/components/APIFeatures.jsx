import { motion } from 'framer-motion'
import { 
  CommandLineIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowsRightLeftIcon,
  GlobeAltIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

const APIFeatures = () => {
  const apiFeatures = [
    {
      title: "Compliance-as-Code",
      description: "Pre-built KYC/AML flows with regional regulation templates",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      gradient: "from-green-400 to-primary-gold",
      delay: 0.1
    },
    {
      title: "AI Optimization",
      description: "Dynamic fee routing & liquidity prediction models",
      icon: <CpuChipIcon className="w-8 h-8" />,
      gradient: "from-purple-400 to-primary-orange",
      delay: 0.2
    },
    {
      title: "Multi-Chain SDK",
      description: "Unified API for Ethereum, Polygon & Solana stablecoins",
      icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
      gradient: "from-primary-orange to-primary-gold",
      delay: 0.3
    },
    {
      title: "Web3 Integrations",
      description: "Plug-and-play modules for DeFi & NFT platforms",
      icon: <BanknotesIcon className="w-8 h-8" />,
      gradient: "from-yellow-400 to-primary-orange",
      delay: 0.4
    },
    {
      title: "African Corridors",
      description: "Pre-configured NGN/KES/GHS payment routes",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      gradient: "from-blue-400 to-primary-gold",
      delay: 0.5
    },
    {
      title: "Enterprise Modules",
      description: "Shopify, WooCommerce & payroll system integrations",
      icon: <CommandLineIcon className="w-8 h-8" />,
      gradient: "from-primary-gold to-primary-orange",
      delay: 0.6
    }
  ]

  return (
    <section id="api-features" className="py-24 bg-gradient-to-br from-primary-black to-[#0F0B07]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Enterprise API Ecosystem
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto">
            Developer tools bridging traditional finance and decentralized networks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay }}
              viewport={{ once: true, margin: "-100px" }}
              className="card group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 backdrop-blur-sm">
                  <div className="text-primary-orange">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-light/90 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <button 
                    className="text-primary-orange text-sm font-medium hover:underline"
                    onClick={() => window.open('https://docs.coinbyte.com', '_blank')}
                  >
                    Explore Feature →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 card max-w-4xl mx-auto text-center"
        >
          <div className="p-8 md:p-12">
            <div className="mb-8 inline-flex items-center gap-3 bg-primary-orange/10 px-5 py-3 rounded-full">
              <CommandLineIcon className="w-5 h-5 text-primary-orange" />
              <span className="text-sm text-primary-orange">API Demo</span>
            </div>
            <div className="text-left mb-8 bg-primary-black/50 p-6 rounded-lg font-mono text-sm">
              <code className="text-gray-400">
                {`coinbyte.payment.create({\n`}
                {`  from: "0x...", // Business wallet\n`}
                {`  to: "0x...",   // Merchant address\n`}
                {`  amount: 1000, // USDC\n`}
                {`  chain: "polygon"\n`}
                {`})`}
              </code>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="button-primary"
                onClick={() => window.open('https://docs.coinbyte.com', '_blank')}
              >
                Full API Documentation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="button-secondary"
                onClick={() => window.open('https://wt.ls/waitlist', '_blank')}
              >
                Get Early Access
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default APIFeatures
