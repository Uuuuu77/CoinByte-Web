// TransactionStatus.js
import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaExclamationCircle } from 'react-icons/fa';

function TransactionStatus() {
  const [status, setStatus] = useState("pending");

  const statusMessages = {
    pending: {
      icon: <FaClock className="text-yellow-500 text-3xl" />,
      message: "Your transaction is being processed. Please be patient.",
      color: "bg-yellow-100"
    },
    completed: {
      icon: <FaCheckCircle className="text-green-500 text-3xl" />,
      message: "Transaction successful! Your payment has been completed.",
      color: "bg-green-100"
    },
    failed: {
      icon: <FaExclamationCircle className="text-red-500 text-3xl" />,
      message: "Oops! Something went wrong with the transaction. Please try again.",
      color: "bg-red-100"
    }
  };

  const handleTransactionChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <section data-name="transaction-status" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#333] mb-8">Transaction Status</h2>
        
        <div className={`p-6 rounded-lg shadow-lg ${statusMessages[status].color}`}>
          <div className="flex items-center mb-4">
            {statusMessages[status].icon}
            <h3 className="ml-4 text-xl font-semibold">{status === 'pending' ? 'Transaction Pending' : status === 'completed' ? 'Transaction Completed' : 'Transaction Failed'}</h3>
          </div>
          <p className="text-lg">{statusMessages[status].message}</p>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => handleTransactionChange("pending")}
            className="bg-yellow-500 text-white py-2 px-6 rounded-md mr-4"
          >
            Pending
          </button>
          <button 
            onClick={() => handleTransactionChange("completed")}
            className="bg-green-500 text-white py-2 px-6 rounded-md mr-4"
          >
            Completed
          </button>
          <button 
            onClick={() => handleTransactionChange("failed")}
            className="bg-red-500 text-white py-2 px-6 rounded-md"
          >
            Failed
          </button>
        </div>
      </div>
    </section>
  );
}

export default TransactionStatus;
