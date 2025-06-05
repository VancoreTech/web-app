"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Step1({ onNext, isValid }) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="max-w-sm mx-auto px-3">
      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Create free account
      </h1>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Take the first step to better business management
      </p>

      <div className="space-y-3 mb-6">
        <button
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-200"
        >
          <Mail className="w-5 h-5 mr-2" />
          Continue with email
        </button>

        <button
          disabled={!agreedToTerms}
          className={`w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-200 ${
            agreedToTerms
              ? "border border-gray-300 hover:bg-gray-50 text-gray-700"
              : "border border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with google
        </button>
      </div>

      <p className="text-center text-gray-600 mb-4">
        Already have an account?{" "}
        <button className="text-blue-600 hover:underline">Sign in</button>
      </p>

      <div className="flex justify-center space-x-1 p-4 ">
        <input
          type="checkbox"
          id="terms-checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="h-4 w-4 "
        />
        <label htmlFor="terms-checkbox" className="text-xs text-center max-md:text-start">
          By signing up, you agree to be bound by our 
          <a href="#" className="text-blue-600 hover:underline mx-1">
            Terms & Conditions
          </a>
          as well as our 
          <a href="#" className="text-blue-600 hover:underline mx-1">
            Privacy Policy
          </a>
        </label>
      </div>
    </div>
  );
}
