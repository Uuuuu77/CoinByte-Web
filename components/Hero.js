function Hero() {
  const handleExploreFeatures = () => {
    try {
      trackEvent('explore_features_clicked');
      document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      reportError(error);
    }
  };

  return (
    <section data-name="hero" className="pt-24 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="container mx-auto text-center">
        <div data-name="hero-content" className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6A00] to-[#FFB400] text-transparent bg-clip-text">
            Revolutionizing Stablecoin Payments
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Empowering seamless, fast, and low-cost transactions globally
          </p>
          <div data-name="cta-buttons" className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              className="button-primary text-lg"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button 
              className="button-secondary text-lg"
              onClick={handleExploreFeatures}
            >
              Explore Features
            </button>
          </div>
        </div>
        
        <div data-name="hero-graphic" className="mt-16">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FFB400] opacity-20 blur-3xl"></div>
            <div className="relative bg-black/50 rounded-2xl p-8 backdrop-blur-xl border border-orange-500/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Volume', value: '$2.5B+' },
                  { label: 'Active Users', value: '500K+' },
                  { label: 'Countries', value: '150+' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#FF6A00]">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
