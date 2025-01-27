import { useState } from 'react'
import { MailIcon } from '@heroicons/react/outline'
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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-primary-orange mb-6">CoinByte</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing global payments through blockchain technology
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-primary-orange transition-colors" />
              <GitHub className="w-6 h-6 text-gray-400 hover:text-primary-orange transition-colors" />
              <LinkedIn className="w-6 h-6 text-gray-400 hover:text-primary-orange transition-colors" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-primary-orange">Features</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-primary-orange">Security</a></li>
              <li><a href="#enterprise" className="text-gray-400 hover:text-primary-orange">Enterprise</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary-orange">About</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-primary-orange">Careers</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-primary-orange">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Stay Updated</h4>
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <MailIcon className="w-5 h-5 text-gray-400 ml-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-0 text-gray-200 placeholder-gray-500 focus:ring-0 px-4 py-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary whitespace-nowrap"
                >
                  {isSubmitting ? 'Submitting...' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} CoinByte. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-primary-orange">Privacy</a>
              <a href="#terms" className="hover:text-primary-orange">Terms</a>
              <a href="#cookies" className="hover:text-primary-orange">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
