// APIFeatures.js
import React from 'react';
import { FaPlug, FaDatabase, FaRegCreditCard } from 'react-icons/fa';

function APIFeatures() {
  const apiFeatures = [
    {
      title: "Easy API Integration",
      description: "Integrate CoinByte's stablecoin payment API into your existing infrastructure seamlessly. Simple and secure integration for businesses of all sizes.",
      icon: <FaPlug className="text-[#FF6A00] text-3xl" />
    },
    {
      title: "Real-time Market Data",
      description: "Access live market data for cryptocurrencies directly from the CoinByte API. Track prices, volume, and other relevant market metrics in real time.",
      icon: <FaDatabase className="text-[#FF6A00] text-3xl" />
    },
    {
      title: "Payment Gateway API",
      description: "Easily process stablecoin payments with CoinByte's Payment Gateway API, supporting fast and secure cross-border transactions for your customers.",
      icon: <FaRegCreditCard className="text-[#FF6A00] text-3xl" />
    },
    {
      title: "Transaction Monitoring",
      description: "Track and monitor all your transactions with CoinByte's API. Stay up-to-date with transaction status, history, and details in real time.",
      icon: <FaDatabase className="text-[#FF6A00] text-3xl" />
    }
  ];

  return (
    <section data-name="api-features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#333] mb-8">API Features for Businesses</h2>
        <p className="text-lg text-center mb-12">CoinByte's API allows businesses to easily integrate stablecoin payments, access live market data, and monitor transactions for better financial management.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apiFeatures.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default APIFeatures;
