import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'

const TIERS = [
  { name: 'Free', monthly: 0, annual: 0, cta: 'Start Building Free', url: 'https://coinbyte-cli.vercel.app/', highlight: false },
  { name: 'Individual', monthly: 19, annual: 15, cta: 'Join Waitlist', url: 'https://wt.ls/waitlist', highlight: false },
  { name: 'Business', monthly: 99, annual: 79, cta: 'Join Waitlist', url: 'https://wt.ls/waitlist', highlight: true },
  { name: 'Enterprise', monthly: null, annual: null, cta: 'Contact Sales', url: 'mailto:coinbyte002@gmail.com', highlight: false }
]

export default function PricingPage() {
  usePageMeta({ title: 'Pricing', description: 'Simple pricing.' })
  const [annual, setAnnual] = useState(false)

  return (
    <PageTransition>
      <div className="container" style={{ paddingTop: 100, paddingBottom: 80 }}>
        <h1 className="headline text-center">Simple, honest pricing</h1>
        <div className="flex justify-center gap-2 my-6">
          <button className="btn-secondary" onClick={() => setAnnual(false)}>Monthly</button>
          <button className="btn-secondary" onClick={() => setAnnual(true)}>Annual</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {TIERS.map((tier) => (
            <div key={tier.name} className="card" style={{ padding: 24, borderColor: tier.highlight ? '#FF6A00' : 'var(--border)' }}>
              <h3 style={{ fontWeight: 700 }}>{tier.name}</h3>
              <p style={{ fontSize: 36, fontWeight: 800, color: tier.highlight ? '#FF6A00' : 'var(--text)' }}>{tier.monthly === null ? 'Custom' : `$${annual ? tier.annual : tier.monthly}`}</p>
              <a href={tier.url} target={tier.url.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className={tier.highlight ? 'btn-primary' : 'btn-secondary'}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
