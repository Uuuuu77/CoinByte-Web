import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BanknotesIcon,
  BoltIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'

const corridors = [
  { from: 'Lagos', to: 'Nairobi', time: '15s', rail: 'USDC', cost: '$0.42' },
  { from: 'São Paulo', to: 'Manila', time: '22s', rail: 'USDT', cost: '$0.71' },
  { from: 'London', to: 'Mumbai', time: '18s', rail: 'cUSD', cost: '$0.56' },
]

const proofPoints = [
  { label: 'Settlement target', value: '< 30s', detail: 'stablecoin rails with transparent status events' },
  { label: 'Launch surface', value: '6 tools', detail: 'CLI, APIs, wallets, explorer, analytics, data pipes' },
  { label: 'Market map', value: '20+', detail: 'corridors designed for emerging-market payouts' },
]

const problems = [
  { title: 'Float gets stranded', copy: 'Legacy PSP stacks trap operating cash across banks, currencies, and waiting periods.' },
  { title: 'Compliance is bolted on', copy: 'Risk checks arrive after money moves instead of being modeled into every transfer state.' },
  { title: 'Developers lack primitives', copy: 'Teams stitch together wallets, quotes, webhooks, explorers, and reconciliation from scratch.' },
]

const tools = [
  { title: 'CLI-first launch', icon: CommandLineIcon, copy: 'Spin up keys, testnet flows, and stablecoin transfers from a focused terminal workflow.' },
  { title: 'Proof-aware APIs', icon: ShieldCheckIcon, copy: 'Programmable transfer states for identity, policy checks, audit trails, and settlement.' },
  { title: 'Corridor intelligence', icon: ChartBarIcon, copy: 'Expose price, route, and status signals before they become failed payments.' },
  { title: 'Multi-chain rails', icon: Squares2X2Icon, copy: 'Operate across supported stablecoins and networks without rebuilding your checkout.' },
]

export default function Home() {
  usePageMeta({
    title: 'Build Stablecoin Infrastructure',
    description: 'CoinByte stablecoin infrastructure for global payments, developer tooling, and compliance-ready rails.',
  })

  return (
    <PageTransition>
      <section className="home-hero section-shell">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal-stack">
            <p className="eyebrow"><span /> Reserve-backed rails for builders</p>
            <h1 className="display hero-title">
              Move value like code, settle like cash.
            </h1>
            <p className="hero-lede">
              CoinByte is stablecoin infrastructure for teams shipping borderless payouts, developer-first wallets, and compliance-aware transfer flows across fragmented markets.
            </p>
            <div className="hero-actions">
              <a href="https://coinbyte-cli.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary btn-command">
                <CommandLineIcon className="w-4 h-4" /> Start with CLI <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href="https://coinbyte-byt.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary">
                Read Whitepaper v1.5
              </a>
            </div>
          </div>

          <div className="settlement-card" aria-label="Live settlement preview">
            <div className="terminal-bar">
              <span /> <span /> <span />
              <strong>coinbyte route --live</strong>
            </div>
            <div className="ledger-lines">
              {corridors.map((corridor, index) => (
                <div className="ledger-row" key={`${corridor.from}-${corridor.to}`} style={{ '--delay': `${index * 90}ms` }}>
                  <div>
                    <small>{corridor.rail}</small>
                    <b>{corridor.from} → {corridor.to}</b>
                  </div>
                  <div className="ledger-meta">
                    <span>{corridor.time}</span>
                    <em>{corridor.cost}</em>
                  </div>
                </div>
              ))}
            </div>
            <div className="proof-strip">
              <CheckCircleIcon className="w-5 h-5" /> policy checked · quote locked · webhook queued
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell proof-section">
        <div className="container proof-grid">
          {proofPoints.map((point) => (
            <article className="proof-tile" key={point.label}>
              <span>{point.label}</span>
              <strong>{point.value}</strong>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell broken-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow"><span /> The payment stack is leaking</p>
            <h2 className="headline">Global payments are broken because every layer speaks a different language.</h2>
          </div>
          <div className="problem-grid">
            {problems.map((problem) => (
              <article className="card editorial-card" key={problem.title}>
                <h3>{problem.title}</h3>
                <p>{problem.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell tools-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><span /> Infrastructure, not another dashboard</p>
            <h2 className="headline">Four primitives for shipping payments without the ceremony.</h2>
          </div>
          <div className="tools-grid">
            {tools.map(({ title, icon: Icon, copy }) => (
              <article className="tool-card" key={title}>
                <div className="tool-icon"><Icon className="w-6 h-6" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell ecosystem-band">
        <div className="container ecosystem-panel">
          <div>
            <p className="eyebrow"><span /> 6 tools. One protocol.</p>
            <h2 className="headline">A complete lab bench for stablecoin products.</h2>
          </div>
          <div className="ecosystem-actions">
            <div className="mini-map" aria-hidden="true">
              <GlobeAltIcon />
              <BanknotesIcon />
              <BoltIcon />
            </div>
            <Link to="/ecosystem" className="btn-primary">View Full Ecosystem <ArrowRightIcon className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
