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
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${scrolled ? 'border-b border-[var(--border)] bg-[#0E0E0E]/95 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline" aria-label="CoinByte home">
          <img src="/coinbyte-icon.svg" alt="CoinByte" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-bold gradient-text">CoinByte</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {NAV.map((n) => {
            const active = pathname === n.to
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded px-3 py-2 text-sm font-semibold no-underline transition-colors hover:text-[#FF6A00] ${active ? 'text-[#FF6A00]' : 'text-[#9CA3AF]'}`}
              >
                {n.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://v0-coinbyte-api.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary hidden md:inline-flex">
            Get Early Access →
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[#F2F2F2] md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--border)] bg-[#161616] md:hidden"
          >
            <div className="container flex flex-col gap-2 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold no-underline transition-colors hover:text-[#FF6A00] ${pathname === n.to ? 'text-[#FF6A00]' : 'text-[#F2F2F2]'}`}
                >
                  {n.label}
                </Link>
              ))}
              <a href="https://v0-coinbyte-api.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary mt-2 w-full">
                Get Early Access →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
