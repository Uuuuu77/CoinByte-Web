import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

const nav = [{ name: 'Developers', to: '/developers' }, { name: 'Ecosystem', to: '/ecosystem' }, { name: 'Pricing', to: '/pricing' }]
const developerToolsItems = [
  { name: 'CoinByte CLI', url: 'https://coinbyte-cli.vercel.app/', badge: 'Testnet' },
  { name: 'Byte AI Assistant', url: 'https://v0-byte-e2.vercel.app/', badge: 'Preview' },
  { name: 'DID Wallet', url: 'https://identity-forge-wallet.vercel.app/', badge: 'Beta' },
  { name: 'AlgoByte', url: 'https://algobyte.vercel.app', badge: 'New' },
  { name: 'Byte Explorer', url: 'https://byte-explorer.vercel.app/', badge: 'New' },
  { name: 'ClawByte', url: 'https://claw-cast.vercel.app/', badge: 'New' }
]
export default function Header(){const [o,sO]=useState(false);const [d,sD]=useState(false);const l=useLocation();useEffect(()=>sO(false),[l.pathname]);
return <header className='fixed top-0 w-full z-50 bg-primary-black/90 border-b border-gray-800 backdrop-blur'><nav className='container py-4 flex items-center justify-between'><Link to='/' className='text-2xl font-bold gradient-text'>CoinByte</Link><div className='hidden md:flex gap-5 items-center'>{nav.map(i=><Link key={i.to} to={i.to} className={l.pathname===i.to?'text-primary-orange':'text-gray-300'}>{i.name}</Link>)}<div className='relative' onMouseEnter={()=>sD(true)} onMouseLeave={()=>sD(false)}><button className='text-gray-300 flex items-center gap-1'>Developer Tools <ChevronDownIcon className='w-4 h-4'/></button>{d&&<div className='absolute right-0 mt-2 w-72 card-glass p-2'>{developerToolsItems.map(i=><a key={i.name} href={i.url} target='_blank' rel='noreferrer' className='flex justify-between px-3 py-2 hover:bg-white/5 rounded'><span>{i.name}</span><span className='pill bg-orange-500/10 text-orange-300'>{i.badge}</span></a>)}</div>}</div><a className='button-primary' href='https://v0-coinbyte-api.vercel.app/' target='_blank' rel='noreferrer'>Get Early Access →</a></div><button className='md:hidden' onClick={()=>sO(!o)}>{o?<XMarkIcon className='w-6'/>:<Bars3Icon className='w-6'/>}</button></nav>{o&&<div className='md:hidden px-4 pb-4'>{nav.map(i=><Link key={i.to} to={i.to} className='block py-2'>{i.name}</Link>)}</div>}</header>}
