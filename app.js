// The main App component serves as the root component for the application
function App() {
  return (
    <div data-name="app" className="min-h-screen">
      {/* Render the Header component at the top of the page */}
      <Header />
      <main>
        {/* Render the Hero section, which is the main introductory banner */}
        <Hero />
        {/* Render the Features section to highlight platform features */}
        <Features />
        {/* Render the HowItWorks section to explain how the platform functions */}
        <HowItWorks />
        {/* Render the LivePrices section to display real-time cryptocurrency prices */}
        <LivePrices />
        {/* Render the CallToAction section to prompt user actions */}
        <CallToAction />
      </main>
      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
}

// Initialize the app by rendering the App component into the root DOM element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
