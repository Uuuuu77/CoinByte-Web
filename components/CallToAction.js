import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you might need navigation with React Router
import { ArrowRight } from './Icons'; // Ensure this icon is imported correctly

function CallToAction() {
  return (
    <section data-name="cta" id="cta" className="bg-[#FF6A00] text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to revolutionize your payments with CoinByte?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join the future of secure, fast, and cost-effective payments with CoinByte. Whether you're sending remittances or integrating payments, we've got you covered.
        </p>
        
        <Link 
          to="/get-started" 
          className="inline-flex items-center bg-white text-[#FF6A00] hover:bg-opacity-80 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;

