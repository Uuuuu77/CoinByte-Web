import { motion } from 'framer-motion'
import { 
  CommandLineIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const developerTools = [
  {
    title: "CoinByte CLI",
    description: "Mint, redeem, and manage stablecoins from your terminal. Deploy test transactions in seconds.",
    icon: CommandLineIcon,
    badge: "Production Ready",
    badgeColor: "bg-green-500/20 text-green-400",
    cta: "Install CLI",
    url: "https://coinbyte-cli.vercel.app/",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Byte AI Research Assistant",
    description: "Multi-model AI for financial and scientific analysis. Built for deep insight, not just chat.",
    icon: SparklesIcon,
    badge: "Research Preview",
    badgeColor: "bg-purple-500/20 text-purple-400",
    cta: "Try Byte AI",
    url: "https://v0-byte-e2.vercel.app/",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Identity Forge Wallet",
    description: "Decentralized identity wallet with AI agent support. Manage credentials and payments securely.",
    icon: ShieldCheckIcon,
    badge: "Beta",
    badgeColor: "bg-primary-gold/20 text-primary-gold",
    cta: "Explore Wallet",
    url: "https://identity-forge-wallet.vercel.app/",
    gradient: "from-primary-orange/20 to-primary-gold/20"
  }
]

const DeveloperTools = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-black via-[#1a0f00] to-primary-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent mb-6">
              Built for Global Builders
            </h2>
            <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto leading-relaxed">
              From CLI tools to AI research assistants, CoinByte's ecosystem empowers developers worldwide to innovate on stablecoin infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {developerTools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative card p-8 h-full flex flex-col border-2 border-primary-orange/20 hover:border-primary-orange/40">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-primary-orange/10 rounded-xl group-hover:bg-primary-orange/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-orange" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-orange transition-colors duration-300">
                    {tool.title}
                  </h3>
                  
                  <p className="text-secondary-light/90 mb-8 flex-grow leading-relaxed">
                    {tool.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button-primary w-full flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    {tool.cta}
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary-orange/5 to-primary-gold/5 border-primary-orange/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build the Future of Global Payments?
            </h3>
            <p className="text-secondary-light/90 mb-6 max-w-2xl mx-auto">
              Join thousands of developers building compliant stablecoin infrastructure across emerging markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="button-primary px-8 py-3"
                onClick={() => window.open('https://coinbyte-byt.vercel.app/', '_blank')}
              >
                Read Whitepaper
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="button-secondary px-8 py-3"
                onClick={() => window.open('https://github.com/Uuuuu77/CoinByte-Web', '_blank')}
              >
                View on GitHub
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperTools