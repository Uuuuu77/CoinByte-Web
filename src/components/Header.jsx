import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Developers', href: '#api-features' },
    { name: 'Business', href: '#business-api' },
    { name: 'Pricing', href: '#pricing' }
  ]

  const developerToolsItems = [
    { name: 'CoinByte CLI', url: 'https://coinbyte-cli.vercel.app/' },
    { name: 'Byte AI Assistant', url: 'https://v0-byte-e2.vercel.app/' },
    { name: 'DID Wallet (Beta)', url: 'https://identity-forge-wallet.vercel.app/' },
    { name: 'API Documentation', url: 'https://coinbyte-byt.vercel.app/' }
  ]

  const handleCTAClick = () => {
    window.open('https://wt.ls/waitlist', '_blank')
  }

  return (
    <header className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-primary-black/95 backdrop-blur-xl' : 'bg-primary-black/90 backdrop-blur-lg'} border-b border-gray-800 transition-all duration-300`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              className="text-2xl font-bold text-primary-orange hover:text-primary-gold transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              CoinByte
              <span className="text-sm font-medium text-primary-gold ml-2 hidden lg:inline-block">
                | Stripe for Stablecoins
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-gray-300 hover:text-primary-orange transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Developer Tools Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-primary-orange transition-colors text-sm font-medium"
              >
                Developer Tools
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 w-64 bg-primary-black/95 backdrop-blur-xl border border-gray-800 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-2">
                      {developerToolsItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-gray-300 hover:text-primary-orange hover:bg-gray-800/20 rounded-lg transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleCTAClick}
              className="hidden md:flex items-center button-primary text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02]"
            >
              Get Early Access
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-primary-orange transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 space-y-2 pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:bg-gray-800/20 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Developer Tools */}
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-primary-orange mb-2">Developer Tools</div>
                {developerToolsItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-2 text-gray-300 hover:bg-gray-800/20 rounded text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <button
                onClick={() => {
                  handleCTAClick()
                  setIsOpen(false)
                }}
                className="button-primary w-full mt-4 py-3 rounded-lg"
              >
                Get Early Access
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
