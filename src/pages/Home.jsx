import { Link } from 'react-router-dom'
import { CommandLineIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({ title: 'Build Stablecoin Infrastructure', description: 'CoinByte stablecoin infrastructure.' })
  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container text-center">
          <h1 className="display"><span className="gradient-text">Stablecoin</span> Infrastructure for the Open Web</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: 640, margin: '16px auto 28px' }}>Reserve-backed stablecoins, zero-knowledge privacy, and developer-first APIs.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="https://coinbyte-cli.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary"><CommandLineIcon className="w-4 h-4"/>Start with CLI <ArrowRightIcon className="w-4 h-4"/></a>
            <a href="https://coinbyte-byt.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary">Read Whitepaper v1.5</a>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--bg-raised)' }}><div className="container"><h2 className="headline text-center">Global payments are broken</h2></div></section>
      <section className="section"><div className="container"><h2 className="headline text-center">Infrastructure, not a platform</h2></div></section>
      <section className="section" style={{ background: 'var(--bg-raised)' }}><div className="container"><h2 className="headline text-center">6 tools. One protocol.</h2><div className="text-center mt-6"><Link to="/ecosystem" className="btn-secondary">View Full Ecosystem</Link></div></div></section>
    </PageTransition>
  )
}
