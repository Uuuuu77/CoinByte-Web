import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

const Features = () => {
  const features = [
    {
      title: "Compliance Tools",
      description: "Embedded KYC/AML & auto-generated audit trails",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      delay: 0.1,
      gradient: "from-green-400 to-primary-gold"
    },
    {
      title: "AI Optimization",
      description: "Dynamic fee optimization & fraud detection",
      icon: <CpuChipIcon className="w-8 h-8" />,
      delay: 0.2,
      gradient: "from-purple-400 to-primary-orange"
    },
    {
      title: "Cross-Border Rails",
      description: "Africa-focused payment corridors with mobile money integration",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      delay: 0.3,
      gradient: "from-blue-400 to-primary-gold"
    },
    {
      title: "Multi-Chain Support",
      description: "Ethereum, Polygon & Solana stablecoin interoperability",
      icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
      delay: 0.4,
      gradient: "from-primary-orange to-primary-gold"
    },
    {
      title: "DeFi Integrations",
      description: "Yield earning & decentralized lending protocols",
      icon: <BanknotesIcon className="w-8 h-8" />,
      delay: 0.5,
      gradient: "from-yellow-400 to-primary-orange"
    },
    {
      title: "Enterprise APIs",
      description: "Pre-built Shopify, WooCommerce & payroll integrations",
      icon: <CommandLineIcon className="w-8 h-8" />,
      delay: 0.6,
      gradient: "from-primary-gold to-primary-orange"
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-primary-black to-[#0F0B07]">
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
            Bridging enterprise compliance with decentralized innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay }}
              viewport={{ once: true, margin: "-100px" }}
              className="card group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8 h-full">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 backdrop-blur-sm">
                  <div className="text-primary-orange">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-light/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
