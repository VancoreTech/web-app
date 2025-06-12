import React from "react";
import { X } from "lucide-react";

const TransactionDetailsModal = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  const transactionDetails = {
    transactionId: `FS${transaction.orderId}396`,
    customerName: "Michael Adeniyi",
    customerEmail: "michaeladeniyi@gmail.com",
    merchantName: "Jumia",
    transactionDate: `${transaction.date}, 09:11:04`,
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 h-[600px]">
        {/* Header */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-600">Amount</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6  space-y-2">
          {/* Amount Section */}
          <div className=" pb-2">
            <div className="text-xl font-bold text-gray-900 pb-2">
              ₦{transaction.amount.toLocaleString()}
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <span className="w-1 h-1 bg-green-600 rounded-full mr-2"></span>
              Success
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-gray-900">Details</h3>

            <div className="space-y-0">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 text-xs">
                <span className="text-gray-600">Transaction date</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.transactionDate}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100 text-xs">
                <span className="text-gray-600">Transaction ID</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.transactionId}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100 text-xs">
                <span className="text-gray-600">Customer name</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.customerName}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100 text-xs">
                <span className="text-gray-600">Customer email</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.customerEmail}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-100 text-xs">
                <span className="text-gray-600">Merchant name</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.merchantName}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 text-xs">
                <span className="text-gray-600">Transaction type</span>
                <span className="text-gray-900 font-medium">
                  {transaction.transactionType}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsModal;