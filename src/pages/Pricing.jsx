import { useState } from 'react'
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'

const TIERS = [
  {
    name: 'Free',
    kicker: 'Prototype',
    monthly: 0,
    annual: 0,
    cta: 'Start Building Free',
    url: 'https://coinbyte-cli.vercel.app/',
    highlight: false,
    icon: CommandLineIcon,
    features: ['CLI sandbox', 'Testnet corridors', 'Community support', 'Basic explorer visibility'],
  },
  {
    name: 'Individual',
    kicker: 'Solo builder',
    monthly: 19,
    annual: 15,
    cta: 'Join Waitlist',
    url: 'https://wt.ls/waitlist',
    highlight: false,
    icon: SparklesIcon,
    features: ['Higher testnet limits', 'Webhook simulator', 'Quote receipts', 'Early SDK previews'],
  },
  {
    name: 'Business',
    kicker: 'Launch team',
    monthly: 99,
    annual: 79,
    cta: 'Join Waitlist',
    url: 'https://wt.ls/waitlist',
    highlight: true,
    icon: RocketLaunchIcon,
    features: ['Production corridor planning', 'Policy workflow templates', 'Priority onboarding', 'Reconciliation exports'],
  },
  {
    name: 'Enterprise',
    kicker: 'Regulated scale',
    monthly: null,
    annual: null,
    cta: 'Contact Sales',
    url: 'mailto:coinbyte002@gmail.com',
    highlight: false,
    icon: BuildingOffice2Icon,
    features: ['Custom corridor design', 'Dedicated compliance reviews', 'Private support channel', 'SLA and integration planning'],
  },
]

const assurances = [
  'No hidden settlement markup in sandbox pricing',
  'Upgrade only when your transfer volume justifies it',
  'Designed for staged launch: prototype, pilot, production',
]

export default function PricingPage() {
  usePageMeta({ title: 'Pricing', description: 'CoinByte pricing for stablecoin infrastructure builders, teams, and enterprises.' })
  const [annual, setAnnual] = useState(false)

  return (
    <PageTransition>
      <section className="subpage-hero pricing-hero section-shell">
        <div className="container pricing-hero-grid">
          <div className="reveal-stack">
            <p className="eyebrow"><span /> Transparent launch economics</p>
            <h1 className="display subpage-title">Pricing that follows your payment maturity.</h1>
            <p className="subpage-lede">
              Start with the CLI for free, validate corridors with real developer signals, then move into business-grade onboarding when your stablecoin product is ready for customers.
            </p>
          </div>
          <div className="pricing-note-card">
            <ShieldCheckIcon className="w-8 h-8" />
            <h2>Built for careful launches</h2>
            <p>CoinByte pricing separates experimentation from production readiness, so teams can prove flow quality before committing to deeper compliance and corridor work.</p>
          </div>
        </div>
      </section>

      <section className="section-shell compact-section">
        <div className="container">
          <div className="pricing-toggle-wrap" aria-label="Billing period">
            <button className={!annual ? 'billing-toggle-active' : ''} onClick={() => setAnnual(false)}>Monthly</button>
            <button className={annual ? 'billing-toggle-active' : ''} onClick={() => setAnnual(true)}>Annual <span>Save ~20%</span></button>
          </div>
          <div className="pricing-grid">
            {TIERS.map((tier) => {
              const Icon = tier.icon
              const price = tier.monthly === null ? 'Custom' : `$${annual ? tier.annual : tier.monthly}`
              return (
                <article key={tier.name} className={`pricing-card ${tier.highlight ? 'pricing-card-featured' : ''}`}>
                  {tier.highlight && <div className="featured-ribbon">Most useful for pilots</div>}
                  <div className="pricing-card-header">
                    <div className="tool-icon"><Icon className="w-6 h-6" /></div>
                    <span>{tier.kicker}</span>
                  </div>
                  <h2>{tier.name}</h2>
                  <div className="price-line">
                    <strong>{price}</strong>
                    {tier.monthly !== null && <em>/mo</em>}
                  </div>
                  <ul>
                    {tier.features.map((feature) => <li key={feature}><CheckCircleIcon className="w-4 h-4" /> {feature}</li>)}
                  </ul>
                  <a href={tier.url} target={tier.url.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className={tier.highlight ? 'btn-primary' : 'btn-secondary'}>
                    {tier.cta} <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-shell broken-section">
        <div className="container assurance-panel">
          <div>
            <p className="eyebrow"><span /> Pricing principles</p>
            <h2 className="headline">No vanity tiers. Just a path from sandbox to serious volume.</h2>
          </div>
          <div className="assurance-list">
            {assurances.map((item) => <p key={item}><CheckCircleIcon className="w-5 h-5" /> {item}</p>)}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
