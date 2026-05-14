import { Link } from 'react-router-dom'

const ecosystemLinks = [
  { name: 'CoinByte CLI', url: 'https://coinbyte-cli.vercel.app/', badge: 'Testnet' },
  { name: 'Byte AI', url: 'https://v0-byte-e2.vercel.app/', badge: 'Preview' },
  { name: 'Identity Forge Wallet', url: 'https://identity-forge-wallet.vercel.app/', badge: 'Beta' },
  { name: 'AlgoByte', url: 'https://algobyte.vercel.app', badge: 'New' },
  { name: 'Byte Explorer', url: 'https://byte-explorer.vercel.app/', badge: 'New' },
  { name: 'ClawByte', url: 'https://claw-cast.vercel.app/', badge: 'New' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0E0E0E]">
      <div className="container pb-8 pt-16">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <img src="/coinbyte-icon.svg" alt="CoinByte" className="h-8 w-8" />
              <span className="text-lg font-bold gradient-text">CoinByte</span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-[#9CA3AF]">
              Open monetary infrastructure for stable value transfer.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold text-[#F2F2F2]">
              Ecosystem
            </h5>

            <ul className="space-y-2.5">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#9CA3AF] transition-colors hover:text-[#FF6A00]"
                  >
                    {link.name}
                    <span className="rounded bg-[#FF6A00]/10 px-1.5 py-0.5 text-xs text-[#FF6A00]">
                      {link.badge}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold text-[#F2F2F2]">
              Legal
            </h5>

            <ul className="space-y-2.5 text-sm text-[#9CA3AF]">
              <li>
                <Link to="/privacy" className="transition-colors hover:text-[#FF6A00]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-[#FF6A00]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#9CA3AF] md:flex-row">
          <p>© 2026 CoinByte Labs, Inc. • Pre-launch testnet phase</p>
        </div>
      </div>
    </footer>
  )
}
