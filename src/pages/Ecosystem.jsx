import { motion } from 'framer-motion'
import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
  CommandLineIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'

const viewport = { once: true, margin: '-80px' }
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport }

const tools = [
  { name: 'CoinByte CLI', url: 'https://coinbyte-cli.vercel.app/', description: 'Stablecoin operations from your terminal.', status: 'Testnet', tagClass: 'tag-green', icon: CommandLineIcon },
  { name: 'Byte AI', url: 'https://v0-byte-e2.vercel.app/', description: 'AI-native research and routing intelligence.', status: 'Preview', tagClass: 'tag-gold', icon: SparklesIcon },
  { name: 'Identity Forge', url: 'https://identity-forge-wallet.vercel.app/', description: 'DID wallet infrastructure for secure payments.', status: 'Beta', tagClass: 'tag-orange', icon: ShieldCheckIcon },
  { name: 'AlgoByte', url: 'https://algobyte.vercel.app', description: 'Programmable analytics for on-chain signals.', status: 'New', tagClass: 'tag-faint', icon: ChartBarIcon },
  { name: 'Byte Explorer', url: 'https://byte-explorer.vercel.app/', description: 'A protocol explorer for transactions and rails.', status: 'New', tagClass: 'tag-faint', icon: MagnifyingGlassIcon },
  { name: 'ClawByte', url: 'https://claw-cast.vercel.app/', description: 'Data pipeline and indexing for CoinByte apps.', status: 'New', tagClass: 'tag-faint', icon: CpuChipIcon },
]

const flow = ['YOUR APP', 'CoinByte API', 'AI Router', 'ETH | POL | SOL | BASE | CELO']

export default function Ecosystem() {
  usePageMeta({ title: 'Ecosystem', description: 'CoinByte Labs toolkit' })

  return (
    <PageTransition>
      <div className="bg-[#0E0E0E]">
        <motion.section {...fadeUp} className="container py-16 md:py-24">
          <span className="tag tag-orange">Ecosystem</span>
          <h1 className="display mt-6 max-w-4xl text-[#F2F2F2]">
            One protocol.<br />Many entry points.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9CA3AF] md:text-xl">
            Six tools built on the same CoinByte rails. Each solves a different layer of the stack.
          </p>
        </motion.section>

        <motion.section {...fadeUp} className="container pb-20 md:pb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <motion.a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: index * 0.1 }}
                  className="card group flex min-h-[280px] flex-col p-6 no-underline hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="icon-badge"><Icon className="h-6 w-6" /></div>
                    <span className={`tag ${tool.tagClass}`}>{tool.status}</span>
                  </div>
                  <div className="mt-8 flex-1">
                    <h3 className="text-2xl font-bold text-[#F2F2F2]">{tool.name}</h3>
                    <p className="mt-3 text-[#9CA3AF]">{tool.description}</p>
                  </div>
                  <span className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[#FF6A00] transition group-hover:border-[var(--border-hover)] group-hover:bg-[rgba(255,106,0,0.12)]">
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="section-alt py-20 md:py-24">
          <div className="container">
            <span className="tag tag-gold">Protocol Diagram</span>
            <h2 className="headline mt-5 text-[#F2F2F2]">Infrastructure, not a platform.</h2>
            <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {flow.map((item, index) => (
                <div key={item} className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-full border border-[var(--border)] bg-[#1C1C1C] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#F2F2F2] shadow-[0_0_48px_rgba(255,106,0,0.08)]"
                  >
                    {item}
                  </motion.div>
                  {index < flow.length - 1 && <span className="text-center text-3xl text-[#FF6A00] lg:text-2xl">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-[#9CA3AF]">
              CoinByte keeps the protocol surface small while allowing products, wallets, AI agents, and dashboards to compose around the same monetary primitives.
            </p>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container py-20 md:py-24">
          <div className="card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <span className="tag tag-green">Open Source</span>
              <h2 className="mt-4 text-3xl font-black text-[#F2F2F2] md:text-4xl">All code is open-source. Fork it. Build on it. Compete with it.</h2>
            </div>
            <a href="https://github.com/Uuuuu77/CoinByte-Web" target="_blank" rel="noreferrer" className="btn-primary">GitHub →</a>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  )
}
