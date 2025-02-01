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
            Build the Future of Payments
          </h2>
          
          <p className="text-xl text-secondary-light/90 mb-8 max-w-3xl mx-auto">
            Launch your compliant crypto payments system today - enterprise APIs 
            meets decentralized rails for global scale
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://business.coinbyte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary group flex items-center justify-center gap-2"
            >
              <BuildingLibraryIcon className="w-5 h-5" />
              Enterprise Solutions
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#developers"
              className="button-secondary group flex items-center justify-center gap-2"
            >
              <CommandLineIcon className="w-5 h-5" />
              Developer Documentation
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          <div className="mt-12 card inline-flex items-center gap-4 px-8 py-4 bg-primary-black/50">
            <div className="flex items-center gap-2 text-sm text-secondary-light/90">
              <span>Trusted by partners:</span>
              <img src="/assets/mpesa-logo.svg" alt="M-Pesa" className="h-6 opacity-80" />
              <img src="/assets/flutterwave-logo.svg" alt="Flutterwave" className="h-5 opacity-80" />
              <img src="/assets/celo-logo.svg" alt="Celo" className="h-4 opacity-80" />
            </div>
          </div>

          <div className="mt-8 text-sm text-secondary-light/80 max-w-xl mx-auto">
            <p className="mb-2">Start in minutes with our:</p>
            <code className="block font-mono text-xs md:text-sm bg-primary-black/50 p-4 rounded-lg border border-gray-800">
              npm install @coinbyte/api
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
