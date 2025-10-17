import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

const CallToAction = () => {
  return (
    <section id="cta" className="relative overflow-hidden py-24 bg-gradient-to-br from-primary-black to-[#0F0B07]">
      <div className="absolute inset-0 opacity-5 bg-[url('/grid-dark.svg')]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center gap-3 flex-wrap">
            <div className="badge bg-orange-500/20 text-primary-orange">
              <ShieldCheckIcon className="h-5 w-5 mr-1.5" />
              MiCA/GDPR Compliant
            </div>
            <div className="badge bg-green-500/20 text-green-400">
              <GlobeAltIcon className="h-5 w-5 mr-1.5" />
              Live in 20+ Countries
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
            Ready to Start Building?
          </h2>
          
          <p className="text-xl text-secondary-light/90 mb-8 max-w-3xl mx-auto">
            Join developers worldwide who are building the next generation of stablecoin payment infrastructure
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://coinbyte-cli.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary group flex items-center justify-center gap-2 no-underline"
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            >
              <CommandLineIcon className="w-5 h-5" />
              Try CLI Tools
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://coinbyte-byt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary group flex items-center justify-center gap-2 no-underline"
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            >
              <BuildingLibraryIcon className="w-5 h-5" />
              Read Documentation
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          <div className="flex justify-center mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wt.ls/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-gold bg-primary-gold/10 border border-primary-gold/30 rounded-lg hover:bg-primary-gold/20 transition-all cursor-pointer no-underline"
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            >
              <GlobeAltIcon className="w-4 h-4" />
              Join Waitlist for Early Access
            </motion.a>
          </div>

          <div className="mt-12 card inline-flex items-center gap-4 px-8 py-4 bg-primary-black/50">
            <div className="flex items-center gap-2 text-sm text-secondary-light/90">
              <span>Explore our ecosystem:</span>
              <div className="flex items-center gap-1 px-2 py-1 bg-primary-orange/10 rounded text-xs text-primary-orange">CLI</div>
              <div className="flex items-center gap-1 px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-400">Byte AI</div>
              <div className="flex items-center gap-1 px-2 py-1 bg-primary-gold/10 rounded text-xs text-primary-gold">DID Wallet</div>
            </div>
          </div>

          <div className="mt-8 text-sm text-secondary-light/80 max-w-xl mx-auto">
            <p className="mb-2">Get started with stablecoin infrastructure:</p>
            <div className="bg-primary-black/50 p-4 rounded-lg border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <code className="font-mono text-xs text-green-400">$ coinbyte --help</code>
                <a 
                  href="https://coinbyte-cli.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary-orange hover:underline"
                >
                  Install CLI →
                </a>
              </div>
              <code className="block font-mono text-xs text-gray-400">
                coinbyte init my-stablecoin-app
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
