import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'Developers', href: '#developers' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Africa Focus', href: '#africa' },
    { name: 'AI Tools', href: '#ai' },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-primary-black/95 backdrop-blur-xl' : 'bg-primary-black/90 backdrop-blur-lg'} border-b border-gray-800 transition-all duration-300`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-orange hover:text-primary-gold transition-colors">
                CoinByte
                <span className="text-sm font-medium text-primary-gold ml-2 hidden lg:inline-block">
                  Stripe for Stablecoins
                </span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link group relative px-3 py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <div className="flex space-x-4 ml-4">
              <button 
                className="button-secondary"
                onClick={() => window.openModal('enterprise')}
              >
                For Businesses
              </button>
              <button 
                className="button-primary"
                onClick={() => window.openModal('developer')}
              >
                API Access
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-primary-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link-mobile block px-4 py-3 rounded-lg hover:bg-gray-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="space-y-3 mt-4 px-4">
                <button 
                  className="button-secondary w-full"
                  onClick={() => {
                    window.openModal('enterprise')
                    setIsOpen(false)
                  }}
                >
                  For Businesses
                </button>
                <button 
                  className="button-primary w-full"
                  onClick={() => {
                    window.openModal('developer')
                    setIsOpen(false)
                  }}
                >
                  API Access
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
