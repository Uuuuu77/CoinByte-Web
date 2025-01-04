function App() {
  return (
    <div data-name="app" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LivePrices />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

// Initialize the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
