import React from "react";
import AlertIcon from "../components/AlertIcon";

const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          <div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center pb-4">
              <AlertIcon
                width={24}
                height={24}
                fill="#6A6767"
                className="w-7 h-7"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 mt-1">{message}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
