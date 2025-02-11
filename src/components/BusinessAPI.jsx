import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CommandLineIcon,
  ArrowsRightLeftIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

const BusinessAPI = () => {
  const apiBenefits = [
    {
      title: "Compliance Engine",
      description: "Auto-generated audit trails & KYC/AML workflows",
      subtext: "GDPR, MiCA & CBN compliant",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      gradient: "from-green-400 to-primary-gold",
      delay: 0.1
    },
    {
      title: "AI Optimization",
      description: "Dynamic fee routing & liquidity management",
      subtext: "Fraud detection ML models",
      icon: <CpuChipIcon className="w-8 h-8" />,
      gradient: "from-purple-400 to-primary-orange",
      delay: 0.2
    },
    {
      title: "African Corridors",
      description: "NGN/KES/GHS payment routes with mobile money",
      subtext: "M-Pesa, Flutterwave, Airtel Money",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      gradient: "from-blue-400 to-primary-gold",
      delay: 0.3
    },
    {
      title: "DeFi Bridge",
      description: "Convert between fiat & stablecoins automatically",
      subtext: "USDC, cUSD, naira stablecoins",
      icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
      gradient: "from-primary-orange to-primary-gold",
      delay: 0.4
    }
  ]

  return (
    <section id="business-api" className="py-24 bg-gradient-to-br from-primary-black to-[#0F0B07]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            Hybrid Financial Infrastructure
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto">
            Enterprise APIs with decentralized settlement rails
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apiBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: benefit.delay }}
              viewport={{ once: true, margin: "-100px" }}
              className="card group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 backdrop-blur-sm">
                    <div className="text-primary-orange">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-secondary-light/90 mb-4">
                  {benefit.description}
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-primary-orange/80 font-mono">
                    {benefit.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 card max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-primary-orange/10 p-6 rounded-xl">
              <BuildingLibraryIcon className="w-12 h-12 text-primary-orange" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                Enterprise-Grade Solutions
              </h3>
              <p className="text-secondary-light/90 mb-6">
                Custom implementations for financial institutions and marketplaces
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="button-primary"
                  onClick={() => window.open('coinbyte002@gmail.com', '_blank')}
                >
                  Contact Enterprise Sales
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="button-secondary"
                  onClick={() => window.open('#decentralized', '_blank')}
                >
                  Explore Decentralized Rails
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessAPI
