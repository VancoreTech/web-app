"use client"

import { Check } from "lucide-react"

export default function Step7({ onNavigateToPricing }) {
  return (
    <div className="max-w-md mx-auto text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-8 h-8 text-white" />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Congratulations!</h1>
      <p className="text-gray-600 mb-8">You're in! Your registration was completed successfully.</p>

      <button
        onClick={onNavigateToPricing}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium mb-4"
      >
        Proceed
      </button>
    </div>
  )
} 