import React from 'react';
import { FaPlug, FaDatabase, FaRegCreditCard } from 'react-icons/fa';

const APIFeatures = () => {
  const apiFeatures = [
    {
      title: "Easy API Integration",
      description: "Integrate CoinByte's stablecoin payment API into your existing infrastructure seamlessly.",
      icon: <FaPlug className="text-[#FF6A00] text-3xl" />,
      gradient: "from-[#FF6A00] to-[#FFB400]"
    },
    {
      title: "Real-time Market Data",
      description: "Access live market data for cryptocurrencies with millisecond latency.",
      icon: <FaDatabase className="text-[#FF6A00] text-3xl" />,
      gradient: "from-[#FFB400] to-[#FF6A00]"
    },
    {
      title: "Payment Gateway API",
      description: "Process stablecoin payments with enterprise-grade security and reliability.",
      icon: <FaRegCreditCard className="text-[#FF6A00] text-3xl" />,
      gradient: "from-[#FF6A00] to-[#FFB400]"
    }
  ];

  return (
    <section id="api-features" className="py-16 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#FFB400] bg-clip-text text-transparent mb-4">
            Developer-First API Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful tools for businesses to integrate blockchain payments seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apiFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-black/50 rounded-xl p-8 backdrop-blur-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FFB400]">
                  <span className="text-white">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="button-primary mx-auto"
            onClick={() => window.open('https://docs.coinbyte.com', '_blank')}
            aria-label="View API Documentation"
          >
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default APIFeatures;
