import { motion } from 'framer-motion'
import {
  ArrowPathIcon,
  BanknotesIcon,
  BoltIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  KeyIcon,
  LockClosedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'
import LivePrices from '../components/LivePrices'
import TransactionStatus from '../components/TransactionStatus'

const viewport = { once: true, margin: '-80px' }
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport }

const stats = [
  ['3', 'Core endpoints'],
  ['5', 'Supported chains'],
  ['<15 min', 'Time to first transaction'],
  ['Testnet', 'Current phase'],
]

const endpoints = [
  {
    icon: BanknotesIcon,
    name: 'POST /v1/mint',
    description: 'Issue testnet stable value to a verified wallet on the requested rail.',
    tag: 'ETH · POL · SOL · BASE · CELO',
    code: `POST /v1/mint
{
  "to": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "amount": "10.00",
  "asset": "cUSD",
  "chain": "polygon"
}

{
  "id": "mnt_01HX8K9",
  "status": "pending",
  "chain": "polygon",
  "txHash": "0x..."
}`,
  },
  {
    icon: ArrowPathIcon,
    name: 'POST /v1/send',
    description: 'Route a stablecoin transfer across supported chains with one normalized call.',
    tag: 'Unified routing',
    code: `POST /v1/send
{
  "from": "0xBusinessWallet",
  "to": "0xMerchantWallet",
  "amount": "25.00",
  "asset": "cUSD",
  "chain": "base"
}

{
  "id": "snd_01HX8N2",
  "status": "broadcast",
  "fee": "0.0031",
  "txHash": "0x..."
}`,
  },
  {
    icon: CubeTransparentIcon,
    name: 'POST /v1/redeem',
    description: 'Burn testnet cUSD and reconcile a redemption record for treasury workflows.',
    tag: 'Treasury-ready',
    code: `POST /v1/redeem
{
  "wallet": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "amount": "10.00",
  "asset": "cUSD",
  "chain": "celo"
}

{
  "id": "rdm_01HX8P7",
  "status": "queued",
  "redeemable": "10.00",
  "txHash": null
}`,
  },
]

const chains = ['Ethereum', 'Polygon', 'Solana', 'Base', 'Celo']

const security = [
  ['AES-256 key encryption', KeyIcon],
  ['Zero private keys in logs', LockClosedIcon],
  ['Rate limiting per API key', BoltIcon],
  ['HTTPS only / testnet isolation', ServerStackIcon],
  ['Input validation on all endpoints', CheckCircleIcon],
  ['Encrypted storage at rest', ShieldCheckIcon],
]

export default function Developers() {
  usePageMeta({ title: 'Developers', description: 'CLI, API and testnet docs.' })

  return (
    <PageTransition>
      <div className="bg-[#0E0E0E]">
        <motion.section {...fadeUp} className="container py-16 md:py-24">
          <div className="max-w-4xl">
            <span className="tag tag-orange">Developer Docs</span>
            <h1 className="display mt-6 max-w-4xl text-[#F2F2F2]">
              Build once.<br />Ship everywhere.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#9CA3AF] md:text-xl">
              CoinByte gives you mint, send, and redeem primitives across 5 chains — wrapped in a REST API a junior dev can integrate in 15 minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://coinbyte-cli.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">Start with CLI →</a>
              <a href="https://coinbyte-byt.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary">Read Whitepaper</a>
            </div>
            <div className="terminal-block mt-8 max-w-3xl">
              <div><span className="prompt">$</span> coinbyte init my-app</div>
              <div className="output">✓ Wallet created on Polygon</div>
              <div className="output">✓ Treasury funded (testnet)</div>
              <div><span className="prompt">→</span> Ready. Run: coinbyte mint --amount 10 --to 0x...</div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container pb-10">
          <div className="grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[#1C1C1C] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: index * 0.1 }}
                className="border-b border-[var(--border)] p-6 sm:border-r lg:border-b-0"
              >
                <div className="font-serif text-4xl font-black text-[#FF6A00]">{value}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.14em] text-[#9CA3AF]">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="section-alt py-20 md:py-24">
          <div className="container">
            <span className="tag tag-gold">Core Endpoints</span>
            <h2 className="headline mt-5 max-w-4xl text-[#F2F2F2]">Three primitives. Everything else is a wrapper.</h2>
            <div className="mt-10 space-y-5">
              {endpoints.map((endpoint, index) => {
                const Icon = endpoint.icon
                return (
                  <motion.article
                    key={endpoint.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: index * 0.1 }}
                    className="card grid gap-6 p-6 md:grid-cols-[minmax(0,0.8fr)_minmax(320px,1fr)] md:p-8"
                  >
                    <div className="flex gap-5">
                      <div className="icon-badge"><Icon className="h-6 w-6" /></div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#F2F2F2]">{endpoint.name}</h3>
                        <p className="mt-3 text-[#9CA3AF]">{endpoint.description}</p>
                        <span className="tag tag-orange mt-5">{endpoint.tag}</span>
                      </div>
                    </div>
                    <pre className="terminal-block whitespace-pre-wrap"><code>{endpoint.code}</code></pre>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container py-20 md:py-24">
          <span className="tag tag-orange">Chain Support</span>
          <h2 className="headline mt-5 text-[#F2F2F2]">Five chains. One API surface.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {chains.map((chain, index) => (
              <motion.div
                key={chain}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[#1C1C1C] p-5"
              >
                <div className="flex items-center gap-3 text-lg font-bold text-[#F2F2F2]"><span className="h-3 w-3 rounded-full bg-[#FF6A00] shadow-[0_0_24px_rgba(255,106,0,0.55)]" />{chain}</div>
                <p className="mt-2 text-sm text-[#9CA3AF]">Testnet</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[#9CA3AF]">CoinByte normalizes wallet creation, transaction routing, and status polling so your application can choose a destination chain without rebuilding payment logic.</p>
        </motion.section>

        <motion.section {...fadeUp} className="section-alt py-20 md:py-24">
          <div className="container">
            <span className="tag tag-green">Security</span>
            <h2 className="headline mt-5 max-w-4xl text-[#F2F2F2]">Security is not a feature. It's the foundation.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {security.map(([title, Icon], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: index * 0.1 }}
                  className="card flex items-center gap-4 p-6"
                >
                  <div className="icon-badge"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-lg font-bold text-[#F2F2F2]">{title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container py-20 md:py-24">
          <span className="tag tag-orange">SDK Quick-start</span>
          <h2 className="headline mt-5 text-[#F2F2F2]">Install, create, ship.</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="terminal-block"><span className="prompt">$</span> npm install @coinbyte/sdk</div>
            <pre className="terminal-block whitespace-pre-wrap"><code>{`coinbyte.payment.create({
  from: "0x...", // Business wallet
  to: "0x...",   // Merchant address
  amount: 1000, // USDC
  chain: "polygon"
})`}</code></pre>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <LivePrices />
            <TransactionStatus />
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container pb-20 md:pb-24">
          <div className="card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <span className="tag tag-gold">Testnet</span>
              <h2 className="mt-4 text-3xl font-black text-[#F2F2F2] md:text-4xl">Join the testnet waitlist</h2>
              <p className="mt-2 text-[#9CA3AF]">Get API keys, integration notes, and early network updates.</p>
            </div>
            <a href="https://wt.ls/waitlist" target="_blank" rel="noreferrer" className="btn-primary">Join the testnet waitlist →</a>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  )
}
