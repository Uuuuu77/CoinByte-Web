import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, ChevronDownIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useTheme from '../hooks/useTheme'

const nav = [{ name: 'Developers', to: '/developers' }, { name: 'Ecosystem', to: '/ecosystem' }, { name: 'Pricing', to: '/pricing' }]
export default function Header() {
  const [o, sO] = useState(false)
  const [d, sD] = useState(false)
  const l = useLocation()
  const { theme, toggle } = useTheme()
  useEffect(() => sO(false), [l.pathname])

  return <header className='fixed top-0 w-full z-50 bg-[var(--bg-secondary)]/90 border-b border-[var(--border-color)] backdrop-blur'>
    <nav className='container py-4 flex items-center justify-between'>
      <Link to='/' className='flex items-center gap-2.5'><img src='/assets/github-logo.png' alt='CoinByte' className='h-8 w-8' /><span className='text-xl font-bold gradient-text'>CoinByte</span></Link>
      <div className='hidden md:flex gap-5 items-center'>
        {nav.map(i => <Link key={i.to} to={i.to} className={l.pathname === i.to ? 'text-primary-orange' : 'text-[var(--text-muted)]'}>{i.name}</Link>)}
        <div className='relative' onMouseEnter={() => sD(true)} onMouseLeave={() => sD(false)}><button className='text-[var(--text-muted)] flex items-center gap-1'>Developer Tools <ChevronDownIcon className='w-4 h-4' /></button>{d && <div className='absolute right-0 mt-2 w-64 card-glass p-2'>{['https://coinbyte-cli.vercel.app/','https://v0-byte-e2.vercel.app/','https://identity-forge-wallet.vercel.app/','https://algobyte.vercel.app','https://byte-explorer.vercel.app/','https://claw-cast.vercel.app/'].map((u,idx)=><a key={u} href={u} target='_blank' rel='noreferrer' className='block px-3 py-2 hover:bg-white/5 rounded text-sm'>Tool {idx+1}</a>)}</div>}</div>
        <button onClick={toggle} className='p-2 rounded-lg border border-gray-700 hover:border-primary-orange transition-colors'>{theme === 'dark' ? <SunIcon className='w-4 h-4 text-gray-300' /> : <MoonIcon className='w-4 h-4 text-gray-700' />}</button>
        <a className='button-primary' href='https://v0-coinbyte-api.vercel.app/' target='_blank' rel='noreferrer'>Get Early Access →</a>
      </div>
      <button className='md:hidden' onClick={() => sO(!o)}>{o ? <XMarkIcon className='w-6' /> : <Bars3Icon className='w-6' />}</button>
    </nav>
  </header>
}
