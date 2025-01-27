// src/app.jsx
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'  // Create a simple loading component

// Lazy load components with proper error boundaries
const Header = lazy(() => import('./components/Header'))
const Hero = lazy(() => import('./components/Hero'))
const Features = lazy(() => import('./components/Features'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const LivePrices = lazy(() => import('./components/LivePrices'))
const CallToAction = lazy(() => import('./components/CallToAction'))
const Footer = lazy(() => import('./components/Footer'))
const APIFeatures = lazy(() => import('./components/APIFeatures'))
const BusinessAPI = lazy(() => import('./components/BusinessAPI'))
const LiveMarketData = lazy(() => import('./components/LiveMarketData'))
const TransactionStatus = lazy(() => import('./components/TransactionStatus'))

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<Loader />}>
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <APIFeatures />
          <BusinessAPI />
          <LiveMarketData />
          <LivePrices />
          <TransactionStatus />
          <CallToAction />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}
