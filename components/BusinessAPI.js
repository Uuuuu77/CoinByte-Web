// BusinessAPI.js
import React from 'react';
import { FaPlug, FaChartLine, FaExchangeAlt, FaCogs } from 'react-icons/fa';

function BusinessAPI() {
  const apiBenefits = [
    {
      title: "Seamless Integration",
      description: "CoinByte's API allows businesses to integrate stablecoin payment solutions quickly and easily, providing secure transactions within minutes.",
      icon: <FaPlug className="text-[#FF6A00] text-3xl" />
    },
    {
      title: "Advanced Analytics",
      description: "Access detailed transaction data and performance metrics directly through the API. Make data-driven decisions with powerful insights into market trends and customer behavior.",
      icon: <FaChartLine className="text-[#FF6A00] text-3xl" />
    },
    {
      title: "Cross-Border Payments",
      description: "Enable businesses to accept payments in stablecoins for international transactions. With CoinByte's API, you can facilitate fast, low-cost payments across borders.",
      icon: <FaExchangeAlt className="text-[#FF6A00] text-3xl" />
    },
    {
      title: "Customizable Solutions",
      description: "Our API is flexible and customizable to meet your business needs. Whether you need to accept payments, monitor transactions, or access live data, CoinByte’s API adapts to your use case.",
      icon: <FaCogs className="text-[#FF6A00] text-3xl" />
    }
  ];

  return (
    <section data-name="business-api" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#333] mb-8">CoinByte API for Businesses</h2>
        <p className="text-lg text-center mb-12">Discover how CoinByte's API can transform the way your business handles payments, analytics, and global transactions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {apiBenefits.map((benefit, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessAPI;
