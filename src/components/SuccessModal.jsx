import React from "react";
import { Check } from "lucide-react";

const SuccessModal = ({
  isOpen,
  title,
  message,
  onDone,
  buttonText = "Done",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
            <Check className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{message}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onDone}
            className="px-8 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
