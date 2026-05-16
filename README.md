# CoinByte Web

CoinByte Web is the public React/Vite website for CoinByte's stablecoin infrastructure, developer tooling, pricing, legal, and ecosystem pages. The current pre-API hardening pass keeps the UI intact while adding safer CTA routing, testable utilities, and documentation for the upcoming CoinByte API connection.

## Tech stack

- React 18 + Vite
- React Router
- Tailwind CSS
- Framer Motion
- Heroicons / React Icons

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build      # production build
npm run preview    # serve the built app on port 4173
npm run lint       # static checks
npm test           # Node-based unit tests for utility modules
```

## Project structure

```text
src/components/   Shared UI sections and widgets
src/config/       Centralized external links and CTA targets
src/hooks/        Page metadata hooks
src/layouts/      Route layouts
src/pages/        Routed website pages
src/utils/        API, analytics, CTA, and formatting utilities
src/styles/       Global and animation CSS
```

## API status

The Get Started CTA now routes through a central link/config layer so the upcoming CoinByte API handoff can be updated in one place without touching the visual components. Market-price previews still use CoinGecko through the hardened utility in `src/utils/api.js`.

## Security notes

- Do not commit API keys or secrets; use environment variables for future API credentials.
- External links are centralized in `src/config/links.js` and should use `rel="noopener noreferrer"` when opened in a new tab.
- Third-party scripts should only be added to `index.html` when a documented product feature requires them.

## Deployment

The app builds to `dist/` with relative asset paths for GitHub Pages compatibility. The repository also includes a `deploy` script using `gh-pages`.

## Repository

[CoinByte Web on GitHub](https://github.com/Uuuuu77/CoinByte-Web)
