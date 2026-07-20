import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const homeSource = await readFile(new URL('../src/pages/Home.jsx', import.meta.url), 'utf8')
const footerSource = await readFile(new URL('../src/components/Footer.jsx', import.meta.url), 'utf8')

test('homepage v2 communicates the developer preview without unsupported maturity claims', () => {
  assert.match(homeSource, /STABLECOIN INFRASTRUCTURE FOR BUILDERS/)
  assert.match(homeSource, /Early-stage product · Developer preview/)
  assert.match(homeSource, /Illustrative preview/)
  assert.doesNotMatch(homeSource, /Live in 20\+ Countries|transaction volume|SOC 2|MiCA|GDPR|customers/i)
})

test('homepage v2 includes required product-led sections and lifecycle states', () => {
  for (const section of ['THE PROBLEM', 'HOW COINBYTE WORKS', 'CORE PRIMITIVES', 'LIVE DEVELOPER EXPERIENCE', 'USE CASES', 'ECOSYSTEM']) {
    assert.match(homeSource, new RegExp(section))
  }

  for (const state of ['created', 'policy_checked', 'quote_locked', 'submitted', 'settled']) {
    assert.match(homeSource, new RegExp(state))
  }
})

test('footer keeps early-stage status transparent', () => {
  assert.match(footerSource, /CoinByte is an early-stage product currently under development/)
})
