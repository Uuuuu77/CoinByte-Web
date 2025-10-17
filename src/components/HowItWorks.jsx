import { motion } from 'framer-motion'
import { 
  CommandLineIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    title: "Explore Tools",
    description: "Start with our CLI to test stablecoin operations",
    subtext: "Command-line interface & API testing",
    icon: <CommandLineIcon className="w-8 h-8" />,
    gradient: "from-primary-orange to-primary-gold"
  },
  {
    title: "Integrate SDK",
    description: "Use our JavaScript SDK for web applications",
    subtext: "REST API & documentation",
    icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
    gradient: "from-blue-400 to-primary-gold"
  },
  {
    title: "Deploy Live",
    description: "Go live with multi-chain stablecoin payments",
    subtext: "Polygon, Ethereum & Solana support",
    icon: <GlobeAltIcon className="w-8 h-8" />,
    gradient: "from-primary-gold to-primary-orange"
  }
]

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0F0B07] to-primary-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto">
            Get started with stablecoin payments in three simple steps
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange/20 via-primary-gold/20 to-primary-orange/20" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                {/* Step indicator */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-r from-primary-orange/20 to-primary-gold/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-primary-orange">
                    {step.icon}
                  </div>
                </div>
                
                {/* Step number */}
                <div className="absolute top-4 right-4 text-xs font-mono text-primary-orange">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary-light/90 mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-primary-orange/80 font-mono mt-auto">
                  {step.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decentralized Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 card max-w-2xl mx-auto text-center"
        >
          <div className="p-8">
            <div className="mb-6 inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full">
              <SparklesIcon className="w-5 h-5 text-primary-orange" />
              <span className="text-sm text-primary-orange">For Developers</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Ready to Start Building?
            </h3>
            <p className="text-secondary-light/90 mb-6">
              Access our developer tools and start testing stablecoin infrastructure today
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="button-secondary text-sm px-6 py-3"
                onClick={() => window.open('https://coinbyte-cli.vercel.app/', '_blank')}
              >
                <CommandLineIcon className="w-5 h-5 mr-2" />
                Try CLI Tools
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="button-primary text-sm px-6 py-3"
                onClick={() => window.open('https://coinbyte-byt.vercel.app/', '_blank')}
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Read Docs
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
