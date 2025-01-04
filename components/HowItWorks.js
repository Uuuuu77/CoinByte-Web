function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Download the Wallet",
      description: "Get started by downloading our secure digital wallet app",
      icon: <Icons.Phone />
    },
    {
      step: 2,
      title: "Add Funds",
      description: "Top-up your wallet using bank transfer or credit card",
      icon: <Icons.Wallet />
    },
    {
      step: 3,
      title: "Start Transacting",
      description: "Send, receive, and trade cryptocurrencies instantly",
      icon: <Icons.Exchange />
    }
  ];

  return (
    <section data-name="how-it-works" id="how-it-works" className="py-16 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started with CoinByte in three simple steps
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              data-name={`step-${index + 1}`}
              className="relative flex-1 max-w-sm w-full"
            >
              <div className="card text-center">
                <div className="text-[#FF6A00] mb-4">{step.icon}</div>
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#FF6A00]">
                  <Icons.ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
