import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon,
  BuildingLibraryIcon,
  CodeBracketIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add actual subscription logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 2000)
  }

  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-primary-black to-[#0F0B07]">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-gold bg-clip-text text-transparent">
                CoinByte
              </span>
              <span className="text-sm text-primary-gold/80">v2.0</span>
            </div>
            <p className="text-secondary-light/80 mb-4 max-w-sm text-sm">
              Hybrid payment infrastructure for enterprises building with stablecoins.
            </p>
            <div className="flex items-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com/coinbyte"
                className="p-2 rounded-lg bg-primary-black/50 border border-gray-800 hover:border-primary-orange/30"
              >
                <img src="/github-icon.svg" className="w-5 h-5" alt="GitHub" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://discord.gg/coinbyte"
                className="p-2 rounded-lg bg-primary-black/50 border border-gray-800 hover:border-primary-orange/30"
              >
                <img src="/discord-icon.svg" className="w-5 h-5" alt="Discord" />
              </motion.a>
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-3 flex items-center gap-2">
              <BuildingLibraryIcon className="w-5 h-5 text-primary-orange" />
              <span>Solutions</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#enterprise" className="footer-link">Enterprise APIs</a></li>
              <li><a href="#compliance" className="footer-link">Compliance Tools</a></li>
              <li><a href="#africa" className="footer-link">African Rails</a></li>
              <li><a href="#defi" className="footer-link">DeFi Integrations</a></li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-3 flex items-center gap-2">
              <CodeBracketIcon className="w-5 h-5 text-primary-orange" />
              <span>Developers</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#docs" className="footer-link">API Documentation</a></li>
              <li><a href="#sdk" className="footer-link">SDK &amp; Libraries</a></li>
              <li><a href="#github" className="footer-link">Open Source</a></li>
              <li><a href="#support" className="footer-link">Developer Support</a></li>
            </ul>
          </div>

          {/* Compliance Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-3 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-primary-orange" />
              <span>Compliance</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#gdpr" className="footer-link">GDPR</a></li>
              <li><a href="#mica" className="footer-link">MiCA</a></li>
              <li><a href="#aml" className="footer-link">AML Policy</a></li>
              <li><a href="#audits" className="footer-link">Audit Reports</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-3 flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-primary-orange" />
              <span>Newsletter</span>
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your work email"
                  className="input-field pl-10 bg-primary-black/50 border-gray-800 focus:border-primary-orange text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <EnvelopeIcon className="w-5 h-5 text-secondary-light/50 absolute left-3 top-2.5" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full text-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Get Updates'}
              </button>
            </form>
            <p className="mt-2 text-xs text-secondary-light/60">
              We respect your privacy. No spam ever.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-light/80">
          <p>
            © {new Date().getFullYear()} CoinByte • Stripe for Stablecoins
          </p>
          <div className="flex items-center space-x-3 mt-2 md:mt-0">
            <a href="#privacy" className="footer-link">Privacy</a>
            <span className="text-primary-orange/50">•</span>
            <a href="#terms" className="footer-link">Terms</a>
            <span className="text-primary-orange/50">•</span>
            <a href="#cookies" className="footer-link">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
