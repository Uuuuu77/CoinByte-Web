import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// Lazy load sections for improved performance
const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const Features = React.lazy(() => import('./components/Features'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const LivePrices = React.lazy(() => import('./components/LivePrices'));
const CallToAction = React.lazy(() => import('./components/CallToAction'));
const Footer = React.lazy(() => import('./components/Footer'));
const APIFeatures = React.lazy(() => import('./components/APIFeatures')); // New component
const BusinessAPI = React.lazy(() => import('./components/BusinessAPI')); // New component
const LiveMarketData = React.lazy(() => import('./components/LiveMarketData')); // New component
const TransactionStatus = React.lazy(() => import('./components/TransactionStatus')); // New component

// The main App component serves as the root component for the application
function App() {
  return (
    <div data-name="app" className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <APIFeatures /> {/* Adding API Features Component */}
          <BusinessAPI /> {/* Adding Business API Component */}
          <LiveMarketData /> {/* Adding Live Market Data Component */}
          <LivePrices />
          <TransactionStatus /> {/* Adding Transaction Status Component */}
          <CallToAction />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

// Initialize the app by rendering the App component into the root DOM element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
