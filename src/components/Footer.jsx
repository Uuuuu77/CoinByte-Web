import { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcons } from '../utils/icons'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { Twitter, GitHub, LinkedIn } = SocialIcons

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your subscription logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 2000)
  }

  return (
    <footer className="border-t border-gray-800 bg-primary-black">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-primary-orange mb-6">CoinByte</h3>
            <p className="text-secondary-light/80 mb-6 max-w-sm">
              Revolutionizing stablecoin payments with secure, fast, and low-cost global transactions.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 text-secondary-light hover:text-primary-orange transition-colors duration-300" />
              <GitHub className="w-6 h-6 text-secondary-light hover:text-primary-orange transition-colors duration-300" />
              <LinkedIn className="w-6 h-6 text-secondary-light hover:text-primary-orange transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-secondary-light mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-secondary-light/80 hover:text-primary-orange transition-colors duration-300">Features</a></li>
              <li><a href="#security" className="text-secondary-light/80 hover:text-primary-orange transition-colors duration-300">Security</a></li>
              <li><a href="#enterprise" className="text-secondary-light/80 hover:text-primary-orange transition-colors duration-300">Enterprise</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-secondary-light mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-secondary-light/80 hover:text-primary-orange transition-colors duration-300">About</a></li>
              <li><a href="#careers" className="text-secondary-light/80 hover:text-primary-orange transition-colors duration-300">Careers</a></li>
              <li><a href="#blog" className="text-secondary-light/80 hover:text-primary-orange transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-secondary-light mb-4">Stay Updated</h4>
            <p className="text-secondary-light/80 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <EnvelopeIcon className="w-5 h-5 text-secondary-light/50 absolute left-3 top-3.5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary"
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-secondary-light/80">&copy; {new Date().getFullYear()} CoinByte. All rights reserved.</p>
            <div className="flex space-x-4 text-secondary-light/80">
              <a href="#privacy" className="hover:text-primary-orange transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-primary-orange transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#cookies" className="hover:text-primary-orange transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
