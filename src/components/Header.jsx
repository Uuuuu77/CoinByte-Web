import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import useTheme from '../hooks/useTheme'

const NAV = [
  { label: 'Developers', to: '/developers' },
  { label: 'Ecosystem', to: '/ecosystem' },
  { label: 'Pricing', to: '/pricing' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()

  useEffect(() => setMobileOpen(false), [pathname])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: scrolled ? 'rgba(14,14,14,0.92)' : 'transparent', borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent' }}>
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src="/coinbyte-icon.svg" alt="CoinByte" className="h-8 w-8 rounded-lg" />
          <span className="font-bold text-lg gradient-text">CoinByte</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((n) => <Link key={n.to} to={n.to} className="px-3 py-2 rounded text-sm no-underline" style={{ color: pathname === n.to ? '#FF6A00' : 'var(--text-muted)' }}>{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="h-9 w-9 rounded border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <SunIcon className="w-4 h-4 m-auto" /> : <MoonIcon className="w-4 h-4 m-auto" />}
          </button>
          <a href="https://v0-coinbyte-api.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary hidden md:inline-flex">Get Early Access →</a>
          <button onClick={() => setMobileOpen((o) => !o)} className="md:hidden">{mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}</button>
        </div>
      </div>
      <AnimatePresence>{mobileOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-raised)' }}><div className="p-4 flex flex-col gap-2">{NAV.map((n) => <Link key={n.to} to={n.to} className="px-3 py-2 no-underline" style={{ color: 'var(--text)' }}>{n.label}</Link>)}</div></motion.div>}</AnimatePresence>
    </header>
  )
}
