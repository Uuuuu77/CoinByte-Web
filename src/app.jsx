// src/app.jsx
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';

const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error('Component load failed:', error);
      return { default: () => <ErrorBoundary /> };
    }
  });

// Lazy-loaded components
const Header = lazyWithRetry(() => import('./components/Header'));
const Hero = lazyWithRetry(() => import('./components/Hero'));
const Features = lazyWithRetry(() => import('./components/Features'));
const HowItWorks = lazyWithRetry(() => import('./components/HowItWorks'));
const APIFeatures = lazyWithRetry(() => import('./components/APIFeatures'));
const BusinessAPI = lazyWithRetry(() => import('./components/BusinessAPI'));
const LivePrices = lazyWithRetry(() => import('./components/LivePrices'));
const TransactionStatus = lazyWithRetry(() => import('./components/TransactionStatus'));
const CallToAction = lazyWithRetry(() => import('./components/CallToAction'));
const Footer = lazyWithRetry(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>

        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Hero />
            <Features />
            <HowItWorks />
            <APIFeatures />
            <BusinessAPI />
            <LivePrices />
            <TransactionStatus />
            <CallToAction />
          </Suspense>
        </main>

        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
