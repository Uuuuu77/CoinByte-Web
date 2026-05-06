import {
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  ChartPieIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  FingerPrintIcon,
  MapIcon,
  WalletIcon,
} from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'

const tools = [
  { name: 'CoinByte CLI', url: 'https://coinbyte-cli.vercel.app/', description: 'Terminal-first stablecoin operations for quotes, transfers, keys, and corridor testing.', icon: CodeBracketSquareIcon, tag: 'Build' },
  { name: 'Byte AI Research Assistant', url: 'https://v0-byte-e2.vercel.app/', description: 'Multi-model analysis workspace for risk briefs, market notes, and protocol research.', icon: CpuChipIcon, tag: 'Analyze' },
  { name: 'Identity Forge Wallet', url: 'https://identity-forge-wallet.vercel.app/', description: 'DID wallet experiments for identity-linked payments, credentials, and portable user trust.', icon: FingerPrintIcon, tag: 'Identify' },
  { name: 'AlgoByte', url: 'https://algobyte.vercel.app', description: 'On-chain analytics for wallet behavior, routing intelligence, and stablecoin liquidity signals.', icon: ChartPieIcon, tag: 'Measure' },
  { name: 'Byte Explorer', url: 'https://byte-explorer.vercel.app/', description: 'Protocol explorer for transaction visibility, settlement traces, and transfer state inspection.', icon: MapIcon, tag: 'Trace' },
  { name: 'ClawByte', url: 'https://claw-cast.vercel.app/', description: 'Data pipeline and indexing layer for operational events, webhooks, and reconciliation feeds.', icon: CircleStackIcon, tag: 'Index' },
]

const layers = ['Interface', 'Identity', 'Liquidity', 'Policy', 'Settlement', 'Observability']

export default function Ecosystem() {
  usePageMeta({ title: 'Ecosystem', description: 'CoinByte Labs toolkit for stablecoin infrastructure, identity, analytics, and observability.' })

  return (
    <PageTransition>
      <section className="subpage-hero ecosystem-hero section-shell">
        <div className="container subpage-grid">
          <div className="reveal-stack">
            <p className="eyebrow"><span /> CoinByte Labs ecosystem</p>
            <h1 className="display subpage-title">One protocol surface. Six sharp instruments.</h1>
            <p className="subpage-lede">
              The ecosystem is organized like a lab bench: each tool solves one hard part of stablecoin product development, from command-line launch to identity, analytics, indexing, and settlement visibility.
            </p>
          </div>
          <div className="ecosystem-orbital" aria-label="CoinByte protocol layers">
            <BeakerIcon className="orbital-core" />
            {layers.map((layer, index) => (
              <span key={layer} style={{ '--step': index }}>{layer}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell compact-section">
        <div className="container ecosystem-tool-grid">
          {tools.map(({ name, url, description, icon: Icon, tag }, index) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="ecosystem-tool-card no-underline"
              style={{ '--delay': `${index * 60}ms` }}
            >
              <div className="ecosystem-card-topline">
                <span>{tag}</span>
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </div>
              <div className="ecosystem-tool-icon"><Icon className="w-7 h-7" /></div>
              <h2>{name}</h2>
              <p>{description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell broken-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow"><span /> How the pieces connect</p>
            <h2 className="headline">Every product surface feeds the same settlement narrative.</h2>
          </div>
          <div className="protocol-timeline">
            {layers.map((layer, index) => (
              <article className="timeline-node" key={layer}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{layer}</h3>
                  <p>{index === 0 ? 'Builders start in the CLI or wallet.' : index === 5 ? 'Teams inspect, index, and reconcile every event.' : 'Signals move forward as policy-aware payment context.'}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell ecosystem-band">
        <div className="container ecosystem-panel">
          <div>
            <p className="eyebrow"><span /> Build across the stack</p>
            <h2 className="headline">Compose tools as your product matures.</h2>
          </div>
          <div className="mini-map" aria-hidden="true">
            <CodeBracketSquareIcon />
            <WalletIcon />
            <CircleStackIcon />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
