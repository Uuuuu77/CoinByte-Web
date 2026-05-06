import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Developers', to: '/developers' },
  { label: 'Ecosystem', to: '/ecosystem' },
  { label: 'Pricing', to: '/pricing' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMobileOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }, [])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="brand-mark no-underline" aria-label="CoinByte home">
          <img src="/coinbyte-icon.svg" alt="" className="h-8 w-8 rounded-lg" />
          <span>CoinByte</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${pathname === item.to ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://v0-coinbyte-api.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary hidden md:inline-flex">Get Early Access →</a>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="mobile-menu-button md:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav md:hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="mobile-nav-link no-underline">
                  {item.label}
                </Link>
              ))}
              <a href="https://v0-coinbyte-api.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary mt-2">Get Early Access →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
