import test from 'node:test'
import assert from 'node:assert/strict'
import { detectPlatform, isValidEmail, openExternalLink } from '../src/utils/actions.js'

test('detectPlatform maps common mobile and desktop user agents', () => {
  assert.equal(detectPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'), 'ios')
  assert.equal(detectPlatform('Mozilla/5.0 (Linux; Android 14; Pixel)'), 'android')
  assert.equal(detectPlatform('Mozilla/5.0 (X11; Linux x86_64)'), 'desktop')
})

test('isValidEmail validates typical newsletter addresses', () => {
  assert.equal(isValidEmail('builder@coinbyte.dev'), true)
  assert.equal(isValidEmail('bad-address'), false)
})

test('openExternalLink centralizes noopener/noreferrer window opening', () => {
  const events = []
  const opened = []
  globalThis.window = {
    dispatchEvent: (event) => events.push(event.detail),
    open: (...args) => opened.push(args),
  }
  globalThis.CustomEvent = class CustomEvent {
    constructor(_name, init) {
      this.detail = init.detail
    }
  }

  openExternalLink('https://example.test', 'cta_clicked', { source: 'test' })

  assert.equal(opened[0][0], 'https://example.test')
  assert.equal(opened[0][2], 'noopener,noreferrer')
  assert.equal(events[0].eventName, 'cta_clicked')
})
