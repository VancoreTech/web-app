"use client"

import { User } from "lucide-react"

export default function Step2({ accountType, setAccountType, onNext, isValid }) {
  return (
    <div className="max-w-sm mx-auto px-3">
      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Create free account</h1>
      <p className="text-gray-600 mb-6 text-center text-sm">Choose your account type</p>

      <div className="space-y-3 mb-6">
        <label className="flex items-center p-5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          <User className="w-5 h-5 text-gray-400 mr-4" />
          <span className={`flex-1 font-medium transition-colors duration-200 ${
            accountType === "business" 
              ? "text-gray-700" 
              : "text-gray-400"
          }`}>
            Business account
          </span>
          <input
            type="radio"
            name="accountType"
            value="business"
            checked={accountType === "business"}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-5 h-5 text-blue-600"
          />
        </label>

        <label className="flex items-center p-5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
          <User className="w-5 h-5 text-gray-400 mr-4" />
          <span className={`flex-1 font-medium transition-colors duration-200 ${
            accountType === "aggregator" 
              ? "text-gray-700" 
              : "text-gray-400"
          }`}>
            Aggregator account
          </span>
          <input
            type="radio"
            name="accountType"
            value="aggregator"
            checked={accountType === "aggregator"}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-5 h-5 text-blue-600"
          />
        </label>
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className={`w-full py-3 px-6 rounded-lg font-medium mb-4 transition-colors duration-200 ${
          isValid ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Proceed
      </button>

      <p className="text-center text-gray-600">
        Already have an account? <button className="text-blue-600 hover:underline">Sign in</button>
      </p>
    </div>
  )
}