function Features() {
  const features = [
    {
      title: "Instant Transfers",
      description: "Send and receive payments globally in seconds with minimal fees",
      icon: <Icons.Lightning />
    },
    {
      title: "Secure Storage",
      description: "Military-grade encryption keeps your assets safe",
      icon: <Icons.Shield />
    },
    {
      title: "Multi-Currency Support",
      description: "Support for major stablecoins and cryptocurrencies",
      icon: <Icons.Currency />
    },
    {
      title: "Smart Trading",
      description: "AI-powered trading features and market insights",
      icon: <Icons.Chart />
    },
    {
      title: "DeFi Integration",
      description: "Access to decentralized finance protocols",
      icon: <Icons.Globe />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and assistance",
      icon: <Icons.Chat />
    }
  ];

  return (
    <section data-name="features" id="features" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose CoinByte?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of digital payments with our comprehensive feature set
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-name={`feature-card-${index}`}
              className="card hover-scale"
            >
              <div className="text-[#FF6A00] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
