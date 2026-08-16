import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import PageTransition from '../components/PageTransition'
import usePageMeta from '../hooks/usePageMeta'
import { EXTERNAL_LINKS } from '../config/links'

const viewport = { once: true, margin: '-80px' }
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport }

const TIERS = [
  {
    name: 'Free',
    price: { monthly: '$0', annual: '$0' },
    cadence: '',
    tag: 'Start Today',
    tagClass: 'tag-green',
    cta: 'Start Building Free',
    url: EXTERNAL_LINKS.cli,
    features: ['CLI testnet access', '1,000 API calls/month', 'Community support', 'Basic documentation'],
  },
  {
    name: 'Individual',
    price: { monthly: '$19', annual: '$15' },
    cadence: '/mo',
    tag: 'Early Access',
    tagClass: 'tag-gold',
    cta: 'Join Waitlist',
    url: EXTERNAL_LINKS.waitlist,
    features: ['10,000 API calls/month', '5 chains included', 'Email support', 'SDK access'],
  },
  {
    name: 'Business',
    price: { monthly: '$99', annual: '$79' },
    cadence: '/mo',
    tag: 'Most Popular',
    tagClass: 'tag-orange',
    cta: 'Join Waitlist',
    url: EXTERNAL_LINKS.waitlist,
    highlighted: true,
    features: ['Unlimited API calls', '10 chains included', 'Priority support', 'Custom webhooks', 'Compliance dashboard', 'SLA guarantee'],
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    cadence: '',
    tag: 'Contact Us',
    tagClass: 'tag-faint',
    cta: 'Contact Sales',
    url: 'mailto:coinbyte002@gmail.com',
    features: ['Dedicated infrastructure', 'All 20+ chains', 'Custom integrations', 'Priority SLAs', 'Enhanced security', 'DID Wallet integration', 'Byte AI analytics access'],
  },
]

const faqs = [
  ['Is CoinByte live on mainnet?', 'No. CoinByte is testnet only. Mainnet is planned for Q4 2026.'],
  ['What chains are supported?', 'ETH, Polygon, Solana, Base, and Celo are supported on testnet.'],
  ['How is pricing calculated?', 'Pricing is calculated per API call on pay-as-you-go usage and as a flat rate on packaged tiers.'],
  ['Is the code open-source?', 'Yes. CoinByte code is Apache-2.0 on GitHub.'],
  ['What compliance does CoinByte support?', 'CoinByte is designed to be MiCA-ready and GDPR-aware, with zkKYC on the roadmap.'],
]

export default function PricingPage() {
  usePageMeta({ title: 'Pricing', description: 'Simple pricing.' })
  const [annual, setAnnual] = useState(false)
  const [open, setOpen] = useState(0)

  return (
    <PageTransition>
      <div className="bg-[#0E0E0E]">
        <motion.section {...fadeUp} className="container py-16 text-center md:py-24">
          <span className="tag tag-orange">Pricing</span>
          <h1 className="headline mx-auto mt-6 max-w-4xl text-[#F2F2F2]">Simple, honest pricing.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#9CA3AF] md:text-xl">
            Start free. Scale when you're ready. No hidden fees. No FX spreads.
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-full border border-[var(--border)] bg-[#161616] p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${!annual ? 'bg-[#FF6A00] text-[#180d03]' : 'text-[#9CA3AF] hover:text-[#F2F2F2]'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${annual ? 'bg-[#FF6A00] text-[#180d03]' : 'text-[#9CA3AF] hover:text-[#F2F2F2]'}`}
            >
              Annual
            </button>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container pb-20 md:pb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TIERS.map((tier, index) => (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: index * 0.1 }}
                className={`card relative flex min-h-[520px] flex-col p-6 ${tier.highlighted ? 'border-[#FF6A00] shadow-[0_0_70px_rgba(255,106,0,0.14)]' : ''}`}
              >
                {tier.highlighted && <span className="tag tag-orange absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">Most Popular</span>}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-[#F2F2F2]">{tier.name}</h3>
                  {!tier.highlighted && <span className={`tag ${tier.tagClass}`}>{tier.tag}</span>}
                </div>
                <div className="mt-8 flex items-end gap-1">
                  <span className={`font-serif text-5xl font-black ${tier.highlighted ? 'text-[#FF6A00]' : 'text-[#F2F2F2]'}`}>{annual ? tier.price.annual : tier.price.monthly}</span>
                  {tier.cadence && <span className="pb-2 text-[#9CA3AF]">{tier.cadence}</span>}
                </div>
                {annual && tier.name !== 'Free' && tier.name !== 'Enterprise' && <p className="mt-2 text-sm text-[#9CA3AF]">Annual billing price shown monthly.</p>}
                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-[#F2F2F2]">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-[#FF6A00]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.url}
                  target={tier.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={tier.url.startsWith('mailto') ? undefined : 'noreferrer'}
                  className={`mt-8 w-full ${tier.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.cta}
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="section-alt py-20 md:py-24">
          <div className="container max-w-4xl">
            <span className="tag tag-gold">FAQ</span>
            <h2 className="headline mt-5 text-[#F2F2F2]">Common questions.</h2>
            <div className="mt-10 space-y-3">
              {faqs.map(([question, answer], index) => {
                const active = open === index
                return (
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border border-[var(--border)] bg-[#1C1C1C]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(active ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-bold text-[#F2F2F2]"
                      aria-expanded={active}
                    >
                      {question}
                      <ChevronDownIcon className={`h-5 w-5 flex-none text-[#FF6A00] transition ${active ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-[#9CA3AF]">{answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="container py-20 md:py-24">
          <div className="card p-8 text-center md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">Built on proven infrastructure</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['Polygon', 'Ethereum', 'Solana', 'Celo'].map((logo) => (
                <span key={logo} className="rounded-full border border-[var(--border)] bg-[#161616] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#F2F2F2]">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  )
}
