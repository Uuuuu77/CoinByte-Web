import {
  ArrowRightIcon,
  BoltIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'
import LivePrices from '../components/LivePrices'
import TransactionStatus from '../components/TransactionStatus'

const installSteps = [
  { command: 'npx coinbyte init payout-rail', note: 'Create keys, environment files, and a test corridor.' },
  { command: 'coinbyte quote --from NGN --to USDC', note: 'Lock a stablecoin quote before funds move.' },
  { command: 'coinbyte transfer --policy kyb-basic', note: 'Execute with webhook, policy, and explorer status events.' },
]

const capabilities = [
  { title: 'Typed payment states', icon: SignalIcon, copy: 'Quote, lock, policy-check, transfer, settle, reconcile — every state is observable.' },
  { title: 'Compliance hooks', icon: ShieldCheckIcon, copy: 'Wire KYB, sanctions, wallet risk, and audit evidence into a single transfer lifecycle.' },
  { title: 'Composable SDKs', icon: CubeTransparentIcon, copy: 'Start with the CLI, then graduate to API primitives that keep wallets and corridors portable.' },
]

const checklist = ['Testnet keys in minutes', 'Webhook-first status events', 'Stablecoin quote receipts', 'Explorer-ready transaction IDs']

export default function Developers() {
  usePageMeta({ title: 'Developers', description: 'CLI, API, testnet docs, and stablecoin payment primitives for CoinByte builders.' })

  return (
    <PageTransition>
      <section className="subpage-hero developer-hero section-shell">
        <div className="container subpage-grid">
          <div className="reveal-stack">
            <p className="eyebrow"><span /> Developer control plane</p>
            <h1 className="display subpage-title">Ship stablecoin flows from terminal to production.</h1>
            <p className="subpage-lede">
              CoinByte gives engineering teams the primitives to quote, route, verify, settle, and reconcile global transfers without stitching together a dozen fragile dashboards.
            </p>
            <div className="hero-actions">
              <a href="https://coinbyte-cli.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary btn-command">
                <CommandLineIcon className="w-4 h-4" /> Open CLI docs <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href="https://v0-coinbyte-api.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary">
                Request API access
              </a>
            </div>
          </div>

          <div className="api-console-card" aria-label="CoinByte API quickstart preview">
            <div className="terminal-bar">
              <span /> <span /> <span />
              <strong>quickstart.sh</strong>
            </div>
            <pre>{`import { CoinByte } from '@coinbyte/sdk'

const cb = new CoinByte({ env: 'testnet' })
const quote = await cb.quotes.create({
  corridor: 'Lagos:Nairobi',
  asset: 'USDC',
  amount: '250.00'
})

await cb.transfers.send({ quoteId: quote.id })`}</pre>
            <div className="console-status"><CheckCircleIcon className="w-5 h-5" /> testnet route simulated · webhook delivered</div>
          </div>
        </div>
      </section>

      <section className="section-shell compact-section">
        <div className="container developer-workbench">
          <div className="workbench-copy">
            <p className="eyebrow"><span /> Three-command launch</p>
            <h2 className="headline">A CLI workflow that behaves like infrastructure, not a demo.</h2>
          </div>
          <div className="command-stack">
            {installSteps.map((step, index) => (
              <article className="command-row" key={step.command} style={{ '--delay': `${index * 80}ms` }}>
                <span>0{index + 1}</span>
                <div>
                  <code>{step.command}</code>
                  <p>{step.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell tools-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><span /> Payment primitives</p>
            <h2 className="headline">Everything a payment engineer needs before money leaves the wallet.</h2>
          </div>
          <div className="tools-grid developer-capability-grid">
            {capabilities.map(({ title, icon: Icon, copy }) => (
              <article className="tool-card" key={title}>
                <div className="tool-icon"><Icon className="w-6 h-6" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
            <article className="tool-card checklist-card">
              <div className="tool-icon"><ClipboardDocumentCheckIcon className="w-6 h-6" /></div>
              <h3>Launch checklist</h3>
              <ul>
                {checklist.map((item) => <li key={item}><CheckCircleIcon className="w-4 h-4" /> {item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell telemetry-section">
        <div className="container telemetry-grid">
          <div>
            <p className="eyebrow"><span /> Live testnet telemetry</p>
            <h2 className="headline">Watch prices and transactions behave like product signals.</h2>
            <p className="subpage-lede compact-lede">Keep the existing live widgets, but place them inside a richer developer operations surface.</p>
          </div>
          <div className="telemetry-cards">
            <LivePrices />
            <TransactionStatus />
          </div>
        </div>
      </section>

      <section className="section-shell ecosystem-band">
        <div className="container ecosystem-panel">
          <div>
            <p className="eyebrow"><span /> Ready to compile?</p>
            <h2 className="headline">Start with one corridor. Scale into a global payment rail.</h2>
          </div>
          <a href="https://coinbyte-cli.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">
            Install CLI <BoltIcon className="w-4 h-4" />
          </a>
        </div>
      </section>
    </PageTransition>
  )
}
