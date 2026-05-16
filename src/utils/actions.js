import { CTA_TARGETS, EXTERNAL_LINKS } from '../config/links.js'

const ANALYTICS_EVENT = 'coinbyte:analytics'

export function reportError(error, context = 'app') {
  console.error(`[CoinByte Error] ${context}:`, error)
}

export function trackEvent(eventName, data = {}) {
  if (!eventName) return

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_EVENT, {
      detail: { eventName, data, timestamp: Date.now() },
    }),
  )
}

export function detectPlatform(userAgent = navigator.userAgent) {
  const normalizedAgent = userAgent.toLowerCase()
  if (/iphone|ipod|ipad/.test(normalizedAgent)) return 'ios'
  if (/android/.test(normalizedAgent)) return 'android'
  return 'desktop'
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
}

export function openExternalLink(url, eventName, eventData = {}) {
  if (!url) return null

  if (eventName) trackEvent(eventName, eventData)
  return window.open(url, '_blank', 'noopener,noreferrer')
}

export function handleGetStarted() {
  return openExternalLink(CTA_TARGETS.getStarted, 'get_started_clicked')
}

export function handleDownloadWallet(userAgent) {
  const platform = detectPlatform(userAgent)
  const storeUrls = {
    ios: EXTERNAL_LINKS.waitlist,
    android: EXTERNAL_LINKS.waitlist,
    desktop: EXTERNAL_LINKS.waitlist,
  }

  return openExternalLink(storeUrls[platform] || storeUrls.desktop, 'download_wallet_clicked', {
    platform,
  })
}

export async function handleNewsletterSubscribe(email, notify = showNotification) {
  const normalizedEmail = String(email || '').trim()

  if (!normalizedEmail) {
    notify('error', 'Email is required')
    return false
  }

  if (!isValidEmail(normalizedEmail)) {
    notify('error', 'Invalid email format')
    return false
  }

  trackEvent('newsletter_subscribe', { email: normalizedEmail })
  await new Promise((resolve) => setTimeout(resolve, 300))
  notify('success', 'Thank you for subscribing!')
  return true
}

export function showNotification(type, message) {
  const notification = document.createElement('div')
  notification.setAttribute('role', type === 'error' ? 'alert' : 'status')
  notification.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite')
  notification.className = `fixed bottom-4 right-4 p-4 rounded-lg text-white ${
    type === 'error' ? 'bg-red-500' : 'bg-green-500'
  } shadow-lg z-50 fade-in`
  notification.textContent = message
  document.body.appendChild(notification)
  setTimeout(() => notification.remove(), 3000)
  return notification
}

export function registerGlobalActions() {
  window.handleGetStarted = handleGetStarted
  window.handleDownloadWallet = handleDownloadWallet
  window.handleNewsletterSubscribe = handleNewsletterSubscribe
  window.showNotification = showNotification
  window.reportError = reportError
}
