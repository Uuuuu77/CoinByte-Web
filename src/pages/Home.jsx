import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'
import { EXTERNAL_LINKS } from '../config/links'

const proofPoints = [
  { title: 'Quote routes before transfer', output: 'route.quote.created', copy: 'Compare fees, timing, networks, and policy requirements before value moves.' },
  { title: 'Track every state change', output: 'transfer.state.settled', copy: 'Receive normalized status events throughout the transfer lifecycle.' },
  { title: 'Trigger programmable policies', output: 'policy_check.required', copy: 'Model identity and corridor requirements as part of execution, not an afterthought.' },
  { title: 'Reconcile through webhooks', output: 'webhook.transfer.settled', copy: 'Connect settlement evidence to ledgers, dashboards, and internal tools.' },
]

const problems = [
  ['Liquidity fragments', 'Operating cash gets trapped across currencies, providers, wallets, and payout partners.'],
  ['Checks disconnect', 'Compliance decisions live in separate systems from transfer creation and settlement state.'],
  ['Teams rebuild plumbing', 'Developers repeatedly recreate wallets, routing, webhooks, and reconciliation layers.'],
]

const primitives = [
  ['CLI-first workflows', 'A terminal-native way to request quotes, create transfers, and inspect events.', 'Ship scripted payout and wallet flows before building a full dashboard.', 'coinbyte.transfer.created'],
  ['Proof-aware transfer APIs', 'API primitives designed around policy states, evidence, and deterministic updates.', 'Attach review outcomes and settlement records to every transfer.', 'policy_check.passed'],
  ['Corridor intelligence', 'Route metadata for fees, timing, requirements, and supported settlement paths.', 'Choose the right rail for each market before execution begins.', 'route.quote.locked'],
  ['Multi-network settlement rails', 'Stablecoin-aware abstractions across supported networks and assets.', 'Normalize transfer records without coupling your product to one chain.', 'settlement.confirmed'],
]

const useCases = [
  ['Borderless payouts', 'Teams sending contractor, creator, or marketplace payouts across fragmented markets.', 'Payout stacks need quote certainty, policy checks, and settlement status without a maze of providers.', 'CoinByte exposes route quotes, execution states, and webhooks from one developer surface.'],
  ['Embedded wallets', 'Product teams adding programmable balances and stablecoin movement inside an app.', 'Wallet UX needs reliable backend events, policy controls, and clear transfer histories.', 'CoinByte provides transfer primitives that can sit behind custom wallet experiences.'],
  ['Treasury workflows', 'Finance and ops teams moving stable value between entities, wallets, and local rails.', 'Treasury flows require repeatable evidence, normalized records, and reconciliation hooks.', 'CoinByte turns transfers into inspectable records that downstream systems can consume.'],
]

const modules = [
  ['CoinByte API', 'Available preview'], ['CoinByte CLI', 'Available preview'], ['Byte Wallet', 'In development'], ['Identity Forge', 'In development'], ['AlgoByte', 'Research experiment'], ['Byte Explorer', 'In development'], ['Analytics pipes', 'Exploring'],
]

const roadmap = [
  ['Available now', ['Developer preview surface', 'CLI route and transfer workflows', 'Illustrative API patterns and technical documentation']],
  ['Building next', ['Additional route models', 'Normalized transfer event schemas', 'Webhook and reconciliation tooling']],
  ['Exploring', ['Policy and identity primitives', 'Richer corridor intelligence', 'Analytics pipes for operational visibility']],
]

function TransferPanel() {
  const events = ['created', 'policy_checked', 'quote_locked', 'submitted', 'settled']
  return (
    <div className="v2-transfer-panel" aria-label="Illustrative transfer routing interface">
      <div className="v2-panel-top"><span>Illustrative preview</span><div><button>Route</button><button>Events</button><button>CLI</button></div></div>
      <div className="v2-route-map"><div><small>Origin</small><strong>USD wallet</strong><span>New York</span></div><i /><div><small>Destination</small><strong>KES payout</strong><span>Nairobi</span></div></div>
      <div className="v2-metrics">
        <p><span>Asset / network</span><b>USDC · Base</b></p><p><span>Estimated settlement</span><b>~24 seconds</b></p><p><span>Estimated fee</span><b>$4.20</b></p><p><span>Policy check</span><b className="ok">Passed · KYB rule</b></p><p><span>Quote</span><b>Locked for 90s</b></p><p><span>Webhook</span><b>transfer.settled</b></p>
      </div>
      <ol className="v2-event-rail">{events.map((e, i) => <li key={e} style={{ '--i': i }}><span />{e}</li>)}</ol>
      <pre>{`{
  "route_id": "rt_dev_8K42",
  "state": "settled",
  "settlement_evidence": "available"
}`}</pre>
    </div>
  )
}

export default function Home() {
  usePageMeta({ title: 'Stablecoin Infrastructure for Builders', description: 'CoinByte developer preview for borderless payouts, wallets, and compliance-aware stablecoin transfer workflows.' })
  return (
    <PageTransition>
      <main className="v2-home">
        <section className="v2-hero section-shell"><div className="container v2-hero-grid"><div className="reveal-stack"><p className="eyebrow"><span /> STABLECOIN INFRASTRUCTURE FOR BUILDERS</p><h1 className="display">Move value like code.<br />Settle like cash.</h1><p className="hero-lede">CoinByte gives developers programmable rails for building borderless payouts, wallets, and transfer workflows across fragmented markets.</p><div className="hero-actions"><a href={EXTERNAL_LINKS.cli} className="btn-primary">Explore the developer preview <ArrowRightIcon className="w-4 h-4" /></a><a href={EXTERNAL_LINKS.whitepaper} className="btn-secondary">Read the whitepaper</a></div><p className="v2-note">Early-stage product · Developer preview</p></div><TransferPanel /></div></section>
        <section className="v2-proof container">{proofPoints.map(p => <article key={p.title}><code>{p.output}</code><h2>{p.title}</h2><p>{p.copy}</p></article>)}</section>
        <section className="section-shell"><div className="container v2-split"><div><p className="eyebrow"><span /> THE PROBLEM</p><h2 className="headline">Global payments break when every layer speaks a different language.</h2></div><div className="v2-problems">{problems.map(([t,c]) => <article key={t}><h3>{t}</h3><p>{c}</p></article>)}<div className="v2-architecture"><span>Wallets</span><span>Risk checks</span><span>Routes</span><b>CoinByte workflow</b><span>Webhooks</span><span>Settlement</span></div></div></div></section>
        <section className="section-shell v2-works"><div className="container"><p className="eyebrow"><span /> HOW COINBYTE WORKS</p><div className="v2-steps">{[['01 — Quote','Request available routes, fees, timing, and policy requirements.'],['02 — Execute','Create a transfer through the API or CLI and receive deterministic state updates.'],['03 — Reconcile','Consume webhooks, settlement evidence, and normalized transaction records.']].map(([t,c]) => <article key={t}><h2>{t}</h2><p>{c}</p></article>)}</div><ol className="v2-timeline"><li>created</li><li>policy_checked</li><li>quote_locked</li><li>submitted</li><li>settled</li></ol></div></section>
        <section className="section-shell"><div className="container"><div className="section-heading"><p className="eyebrow"><span /> CORE PRIMITIVES</p><h2 className="headline">Primitives for shipping stablecoin products without rebuilding the stack.</h2></div><div className="v2-card-grid">{primitives.map(([t,w,d,o]) => <article key={t}><h3>{t}</h3><p><b>What it is:</b> {w}</p><p><b>Build with it:</b> {d}</p><code>{o}</code></article>)}</div></div></section>
        <section className="section-shell"><div className="container v2-dev"><div><p className="eyebrow"><span /> LIVE DEVELOPER EXPERIENCE</p><h2 className="headline">Create a route in the terminal. Inspect the transfer like a product surface.</h2><Link to="/developers" className="btn-secondary">View developer docs</Link></div><pre>{`$ coinbyte route create \\\n  --from USD \\\n  --to KES \\\n  --asset USDC \\\n  --amount 1000

{
  "route_id": "rt_dev_8K42",
  "estimated_fee": "4.20 USD",
  "estimated_time": "24s",
  "policy_status": "passed",
  "settlement_network": "Base"
}`}</pre></div></section>
        <section className="section-shell"><div className="container"><div className="section-heading"><p className="eyebrow"><span /> USE CASES</p><h2 className="headline">What developers can build with CoinByte.</h2></div><div className="v2-card-grid three">{useCases.map(([t,a,b,c]) => <article key={t}><h3>{t}</h3><p><b>Team:</b> {a}</p><p><b>Challenge:</b> {b}</p><p><b>CoinByte simplifies:</b> {c}</p></article>)}</div></div></section>
        <section className="section-shell v2-ecosystem"><div className="container"><p className="eyebrow"><span /> ECOSYSTEM</p><h2 className="headline">One protocol. A complete lab bench for stablecoin products.</h2><div className="v2-modules">{modules.map(([m,s]) => <article key={m}><strong>{m}</strong><span>{s}</span></article>)}</div></div></section>
        <section className="section-shell"><div className="container v2-roadmap">{roadmap.map(([t,items]) => <article key={t}><h2>{t}</h2>{items.map(i => <p key={i}>→ {i}</p>)}</article>)}</div></section>
        <section className="section-shell"><div className="container v2-final"><h2 className="headline">Build the next stablecoin workflow on programmable rails.</h2><p>Explore the developer preview, inspect the architecture, and follow CoinByte as the protocol develops.</p><div className="hero-actions"><a href={EXTERNAL_LINKS.coinbyteApi} className="btn-primary">Get early access</a><Link to="/ecosystem" className="btn-secondary">Explore the ecosystem</Link></div></div></section>
      </main>
    </PageTransition>
  )
}
