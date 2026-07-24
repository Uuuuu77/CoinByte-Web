import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('developers markets grid renders exactly two component children', async () => {
  const source = await read('src/pages/Developers.jsx')
  assert.match(
    source,
    /<div className="grid gap-10 lg:grid-cols-\[3fr_2fr\] items-start">\s*<LivePrices \/>\s*<TransactionStatus \/>\s*<\/div>/,
  )
})

test('live markets and transaction simulator expose one top-level grid item each', async () => {
  const livePrices = await read('src/components/LivePrices.jsx')
  const transactionStatus = await read('src/components/TransactionStatus.jsx')

  assert.match(livePrices, /return \(\s*<div className="flex flex-col gap-16">/)
  assert.doesNotMatch(livePrices, /return \(\s*<>/)
  assert.match(transactionStatus, /return \(\s*<div className="flex flex-col gap-10 lg:sticky lg:top-24 self-start">/)
  assert.doesNotMatch(transactionStatus, /return \(\s*<>/)
})

test('visible developers page copy uses real Unicode glyphs instead of escaped JSX text', async () => {
  const developers = await read('src/pages/Developers.jsx')
  const livePrices = await read('src/components/LivePrices.jsx')
  const transactionStatus = await read('src/components/TransactionStatus.jsx')

  assert.match(livePrices, /\{corridor\.from\} → \{corridor\.to\}/)
  assert.match(transactionStatus, /lifecycle — pending/)
  assert.doesNotMatch(developers, />[^<]*\\u[0-9a-fA-F]{4}/)
  assert.doesNotMatch(livePrices, />[^<]*\\u[0-9a-fA-F]{4}/)
  assert.doesNotMatch(transactionStatus, />[^<]*\\u[0-9a-fA-F]{4}/)
})

test('stablecoin badge is a non-shrinking sibling hidden in stablecoins-only mode', async () => {
  const source = await read('src/components/LivePrices.jsx')
  assert.match(source, /<span className="truncate">\{coin\.symbol\}<\/span>/)
  assert.match(source, /!showStablecoinsOnly && coin\.type === 'stablecoin'/)
  assert.match(source, /<span className="tag tag-green flex-shrink-0">/)
  assert.doesNotMatch(source, /textOverflow: 'ellipsis'/)
})
