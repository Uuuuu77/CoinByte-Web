// src/app.jsx
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary'; // Create this component

// Lazy load components with error boundaries
const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error('Component load failed:', error);
      return { default: () => <ErrorBoundary /> };
    }
  });

const Header = lazyWithRetry(() => import('./components/Header'));
const Hero = lazyWithRetry(() => import('./components/Hero'));
// Repeat for other components...

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
            <LiveMarketData />
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
