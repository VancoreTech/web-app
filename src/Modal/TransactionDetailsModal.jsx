import React from "react";
import { X } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

const TransactionDetailsModal = ({ isOpen, onClose, transaction }) => {
  if (!transaction) return null;

  const transactionDetails = {
    transactionId: `FS${transaction.orderId}396`,
    customerName: "Michael Adeniyi",
    customerEmail: "michaeladeniyi@gmail.com",
    merchantName: "Jumia",
    transactionDate: `${transaction.date}, 09:11:04`,
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium text-gray-600">
              Amount
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Amount Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gray-900">
              ₦{transaction.amount.toLocaleString()}
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              • Success
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Details</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Transaction date</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.transactionDate}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Transaction ID</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.transactionId}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Customer name</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.customerName}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Customer email</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.customerEmail}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Merchant name</span>
                <span className="text-gray-900 font-medium">
                  {transactionDetails.merchantName}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Transaction type</span>
                <span className="text-gray-900 font-medium">
                  {transaction.transactionType}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDetailsModal;
