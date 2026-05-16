import test from 'node:test'
import assert from 'node:assert/strict'
import { formatCryptoData, formatPrice, refreshCryptoData, fetchCryptoData } from '../src/utils/api.js'

test('formatCryptoData prioritizes stablecoins and adds metadata', () => {
  const result = formatCryptoData({
    bitcoin: { usd: 64000, usd_24h_change: 2, last_updated_at: 1710000000 },
    tether: { usd: 1, usd_24h_change: 0.01, last_updated_at: 1710000001 },
  })

  assert.equal(result[0].id, 'tether')
  assert.equal(result[0].symbol, 'USDT')
  assert.equal(result[0].type, 'stablecoin')
  assert.equal(result[1].symbol, 'BTC')
})

test('formatPrice renders stable currency text', () => {
  assert.equal(formatPrice(1.23456), '$1.2346')
  assert.match(formatPrice(1200, 'NGN', 'en-NG'), /1,200\.00$/)
})

test('fetchCryptoData caches successful responses by request URL', async () => {
  refreshCryptoData()
  const originalFetch = globalThis.fetch
  let calls = 0

  globalThis.fetch = async () => {
    calls += 1
    return new Response(JSON.stringify({ tether: { usd: 1 } }), {
      status: 200,
      headers: { ETag: 'test-etag' },
    })
  }

  try {
    const config = {
      baseUrl: 'https://example.test/simple/price',
      defaultIds: ['tether'],
      vsCurrency: 'usd',
      cacheTTL: 30000,
      timeoutMs: 1000,
      retryConfig: { maxAttempts: 1, baseDelay: 1, maxDelay: 1 },
      headers: { Accept: 'application/json' },
    }

    await fetchCryptoData({}, config)
    await fetchCryptoData({}, config)
    assert.equal(calls, 1)
  } finally {
    globalThis.fetch = originalFetch
    refreshCryptoData()
  }
})
