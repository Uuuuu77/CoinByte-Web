import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add actual subscription logic
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 2000)
  }

  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-primary-black to-[#0F0B07]">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
                CoinByte
              </span>
              <span className="text-sm text-primary-gold/80">v2.0</span>
            </div>
            <p className="text-secondary-light/80 mb-6 max-w-sm">
              Hybrid payment infrastructure for enterprises building with stablecoins
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com/coinbyte"
                className="p-2 rounded-lg bg-primary-black/50 border border-gray-800 hover:border-primary-orange/30"
              >
                <img src="/github-icon.svg" className="w-6 h-6" alt="GitHub" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://discord.gg/coinbyte"
                className="p-2 rounded-lg bg-primary-black/50 border border-gray-800 hover:border-primary-orange/30"
              >
                <img src="/discord-icon.svg" className="w-6 h-6" alt="Discord" />
              </motion.a>
            </div>

            <div className="flex items-center gap-3 opacity-80">
              <span className="text-sm text-secondary-light/80">Trusted by:</span>
              <img src="/mpesa-logo.svg" className="h-6" alt="M-Pesa" />
              <img src="/flutterwave-logo.svg" className="h-5" alt="Flutterwave" />
              <img src="/celo-logo.svg" className="h-4" alt="Celo" />
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4 flex items-center gap-2">
              <BuildingLibraryIcon className="w-5 h-5 text-primary-orange" />
              Solutions
            </h4>
            <ul className="space-y-3">
              <li><a href="#enterprise" className="footer-link">Enterprise APIs</a></li>
              <li><a href="#compliance" className="footer-link">Compliance Tools</a></li>
              <li><a href="#africa" className="footer-link">African Rails</a></li>
              <li><a href="#defi" className="footer-link">DeFi Integrations</a></li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4 flex items-center gap-2">
              <CodeBracketIcon className="w-5 h-5 text-primary-orange" />
              Developers
            </h4>
            <ul className="space-y-3">
              <li><a href="#docs" className="footer-link">API Documentation</a></li>
              <li><a href="#sdk" className="footer-link">SDK & Libraries</a></li>
              <li><a href="#github" className="footer-link">Open Source</a></li>
              <li><a href="#support" className="footer-link">Developer Support</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-primary-orange" />
              Compliance
            </h4>
            <ul className="space-y-3">
              <li><a href="#gdpr" className="footer-link">GDPR</a></li>
              <li><a href="#mica" className="footer-link">MiCA</a></li>
              <li><a href="#aml" className="footer-link">AML Policy</a></li>
              <li><a href="#audits" className="footer-link">Audit Reports</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4 flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-primary-orange" />
              Newsletter
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your work email"
                  className="input-field pl-11 bg-primary-black/50 border-gray-800 focus:border-primary-orange"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <EnvelopeIcon className="w-5 h-5 text-secondary-light/50 absolute left-3 top-3.5" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Get Updates'}
              </button>
            </form>
            <p className="mt-3 text-xs text-secondary-light/60">
              We respect your privacy. No spam ever.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-secondary-light/80">
              © {new Date().getFullYear()} CoinByte • Stripe for Stablecoins
            </p>
            <div className="flex space-x-4 text-secondary-light/80">
              <a href="#privacy" className="footer-link">Privacy</a>
              <span className="text-primary-orange/50">•</span>
              <a href="#terms" className="footer-link">Terms</a>
              <span className="text-primary-orange/50">•</span>
              <a href="#cookies" className="footer-link">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
