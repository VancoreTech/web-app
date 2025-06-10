import React from "react";
import SuccessIcon from "../components/SuccessIcon";

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
        <div className="flex items-center mb-4">
          <div>
            <div className="w-10 h-10 rounded-full flex items-center p-3 bg-[#00A85A] justify-center">
              <SuccessIcon
                width={24}
                height={24}
                fill="#fff"
                className="w-7 h-7"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 pt-4">{title}</h3>
              <p className="text-gray-600 mt-1">{message}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onDone}
            className="px-10 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
