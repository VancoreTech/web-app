"use client"

import { ArrowLeft } from "lucide-react"

export default function VerificationModal({
  showModal,
  setShowModal,
  verificationType,
  verificationCode,
  isVerifying,
  email,
  onCodeChange,
  onSubmit,
}) {
  if (!showModal) return null

  const displayEmail = email || "susansheidu@gmail.com"

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 lg:mr-60">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-semibold">Vancore</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Code</h2>
          <p className="text-gray-600 mb-8">
            We sent a code to <span className="font-semibold">{displayEmail}</span>
          </p>

          <div className="flex justify-center space-x-3 mb-8">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => onCodeChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            onClick={onSubmit}
            disabled={isVerifying || verificationCode.some((digit) => !digit)}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium mb-4 flex items-center justify-center"
          >
            {isVerifying ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Continue"
            )}
          </button>

          <p className="text-gray-600 mb-4">
            Didn't receive the code? <button className="text-blue-600 hover:underline">Click to resend code</button>
          </p>

          <button
            onClick={() => setShowModal(false)}
            className="flex items-center text-gray-500 hover:text-gray-700 mx-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to create account
          </button>
        </div>
      </div>
    </div>
  )
}
