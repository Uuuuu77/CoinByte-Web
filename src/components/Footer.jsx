import { Link } from 'react-router-dom'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

const ecosystemLinks = [
  { name: 'CoinByte CLI', url: 'https://coinbyte-cli.vercel.app/', badge: 'Testnet', tagClass: 'tag-green' },
  { name: 'Byte AI', url: 'https://v0-byte-e2.vercel.app/', badge: 'Preview', tagClass: 'tag-gold' },
  { name: 'Identity Forge Wallet', url: 'https://identity-forge-wallet.vercel.app/', badge: 'Beta', tagClass: 'tag-orange' },
  { name: 'AlgoByte', url: 'https://algobyte.vercel.app', badge: 'New', tagClass: 'tag-faint' },
  { name: 'Byte Explorer', url: 'https://byte-explorer.vercel.app/', badge: 'New', tagClass: 'tag-faint' },
  { name: 'ClawByte', url: 'https://claw-cast.vercel.app/', badge: 'New', tagClass: 'tag-faint' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0E0E0E]">
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2 no-underline" aria-label="CoinByte home">
              <img src="/coinbyte-icon.svg" alt="CoinByte" className="h-9 w-9 rounded-lg" />
              <span className="text-xl font-bold gradient-text">CoinByte</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#9CA3AF]">
              Open monetary infrastructure for stable value transfer.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Uuuuu77/CoinByte-Web"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[#9CA3AF] transition hover:border-[var(--border-hover)] hover:text-[#FF6A00]"
                aria-label="CoinByte GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/coinbyte"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[#9CA3AF] transition hover:border-[var(--border-hover)] hover:text-[#FF6A00]"
                aria-label="CoinByte Twitter"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F2F2F2]">Ecosystem</h5>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[#161616] px-4 py-3 text-sm text-[#F2F2F2] no-underline transition hover:border-[var(--border-hover)]"
                  >
                    <span>{link.name}</span>
                    <span className={`tag ${link.tagClass} !px-2 !py-0.5 !text-[10px]`}>{link.badge}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F2F2F2]">Legal</h5>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li><Link to="/privacy" className="transition hover:text-[#FF6A00]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition hover:text-[#FF6A00]">Terms of Service</Link></li>
            </ul>
            <p className="mt-8 text-xs text-[#4B5563]">© 2026 CoinByte Labs, Inc.</p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[#161616] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
          Pre-launch testnet phase · Not financial advice · Apache-2.0
        </div>
      </div>
    </footer>
  )
}
