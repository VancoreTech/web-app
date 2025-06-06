"use client"

import { useState } from 'react'

export default function Step6({ formData, setFormData, onNext, isValid, onNavigateToSignIn }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="max-w-[380px] mx-auto px-3">
      <div className="lg:hidden flex justify-center mb-6">
        <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1 text-center">Set up password</h1>
      <p className="text-gray-600 mb-4 text-center text-sm">Create your unique sign in password</p>

      <form className="space-y-3.5">
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
              className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA] pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 3.35954L3.3593 2.5L17.5 16.6407L16.6407 17.5L14.4073 15.2667C13.0653 16.0917 11.5687 16.6667 10 16.6667C7.1547 16.6667 4.58803 15.3373 2.77803 13.169C1.82303 12.0137 1.82303 10.1523 2.77803 8.99699C3.5547 7.87366 4.55903 6.93033 5.72037 6.21366L2.5 3.35954ZM8.1547 8.64699L11.518 12.0103C11.3633 12.0797 11.1973 12.128 11.0253 12.1537C10.0133 12.3023 9.03037 11.7927 8.64803 10.852C8.51367 10.5903 8.43769 10.3005 8.42635 10.0047C8.41501 9.70893 8.46858 9.41441 8.58337 9.14191C8.69816 8.86941 8.87143 8.62561 9.09161 8.42574C9.3118 8.22587 9.57373 8.07419 9.85903 7.98033L8.1547 8.64699ZM12.7213 10.5083L8.65803 6.44533C9.09136 6.38699 9.54136 6.38699 9.97403 6.44533C11.5053 6.68366 12.484 8.02499 12.7213 9.55566V10.5083ZM10 4.16699C12.8453 4.16699 15.412 5.49633 17.222 7.66466C18.177 8.81999 18.177 10.6813 17.222 11.8367C16.8393 12.3063 16.412 12.7397 15.9473 13.1367L14.9687 12.158C15.3333 11.8663 15.6693 11.5397 15.9687 11.1763C16.5723 10.4397 16.5723 9.06099 15.9687 8.32499C14.4587 6.49166 12.2953 5.35366 10 5.35366C9.45536 5.35366 8.92136 5.41166 8.40736 5.52766L7.34536 4.46566C8.17936 4.27166 9.0547 4.16699 10 4.16699Z" fill="#98A2B3"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4.16699C12.8453 4.16699 15.412 5.49633 17.222 7.66466C18.177 8.81999 18.177 10.6813 17.222 11.8367C15.412 14.005 12.8453 15.3337 10 15.3337C7.1547 15.3337 4.58803 14.005 2.77803 11.8367C1.82303 10.6813 1.82303 8.81999 2.77803 7.66466C4.58803 5.49633 7.1547 4.16699 10 4.16699ZM10 13.3337C11.5053 13.3337 12.7213 12.1177 12.7213 10.6003C12.7213 9.09499 11.5053 7.87033 10 7.87033C8.49469 7.87033 7.27869 9.09499 7.27869 10.6003C7.27869 12.1177 8.49469 13.3337 10 13.3337ZM10 11.667C9.40869 11.667 8.94536 11.1977 8.94536 10.6003C8.94536 10.009 9.40869 9.53366 10 9.53366C10.5913 9.53366 11.0547 10.009 11.0547 10.6003C11.0547 11.1977 10.5913 11.667 10 11.667Z" fill="#98A2B3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-[15px] text-gray-700 mb-1">Confirm password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
              className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA] pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 3.35954L3.3593 2.5L17.5 16.6407L16.6407 17.5L14.4073 15.2667C13.0653 16.0917 11.5687 16.6667 10 16.6667C7.1547 16.6667 4.58803 15.3373 2.77803 13.169C1.82303 12.0137 1.82303 10.1523 2.77803 8.99699C3.5547 7.87366 4.55903 6.93033 5.72037 6.21366L2.5 3.35954ZM8.1547 8.64699L11.518 12.0103C11.3633 12.0797 11.1973 12.128 11.0253 12.1537C10.0133 12.3023 9.03037 11.7927 8.64803 10.852C8.51367 10.5903 8.43769 10.3005 8.42635 10.0047C8.41501 9.70893 8.46858 9.41441 8.58337 9.14191C8.69816 8.86941 8.87143 8.62561 9.09161 8.42574C9.3118 8.22587 9.57373 8.07419 9.85903 7.98033L8.1547 8.64699ZM12.7213 10.5083L8.65803 6.44533C9.09136 6.38699 9.54136 6.38699 9.97403 6.44533C11.5053 6.68366 12.484 8.02499 12.7213 9.55566V10.5083ZM10 4.16699C12.8453 4.16699 15.412 5.49633 17.222 7.66466C18.177 8.81999 18.177 10.6813 17.222 11.8367C16.8393 12.3063 16.412 12.7397 15.9473 13.1367L14.9687 12.158C15.3333 11.8663 15.6693 11.5397 15.9687 11.1763C16.5723 10.4397 16.5723 9.06099 15.9687 8.32499C14.4587 6.49166 12.2953 5.35366 10 5.35366C9.45536 5.35366 8.92136 5.41166 8.40736 5.52766L7.34536 4.46566C8.17936 4.27166 9.0547 4.16699 10 4.16699Z" fill="#98A2B3"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4.16699C12.8453 4.16699 15.412 5.49633 17.222 7.66466C18.177 8.81999 18.177 10.6813 17.222 11.8367C15.412 14.005 12.8453 15.3337 10 15.3337C7.1547 15.3337 4.58803 14.005 2.77803 11.8367C1.82303 10.6813 1.82303 8.81999 2.77803 7.66466C4.58803 5.49633 7.1547 4.16699 10 4.16699ZM10 13.3337C11.5053 13.3337 12.7213 12.1177 12.7213 10.6003C12.7213 9.09499 11.5053 7.87033 10 7.87033C8.49469 7.87033 7.27869 9.09499 7.27869 10.6003C7.27869 12.1177 8.49469 13.3337 10 13.3337ZM10 11.667C9.40869 11.667 8.94536 11.1977 8.94536 10.6003C8.94536 10.009 9.40869 9.53366 10 9.53366C10.5913 9.53366 11.0547 10.009 11.0547 10.6003C11.0547 11.1977 10.5913 11.667 10 11.667Z" fill="#98A2B3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className={`w-full h-11 rounded-lg font-medium transition-all duration-200 mt-2.5 ${
            isValid ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Proceed
        </button>

        <p className="text-center text-[15px] text-gray-600">
          Already have an account? <button onClick={onNavigateToSignIn} className="text-blue-600 hover:underline">Sign in</button>
        </p>
      </form>
    </div>
  )
}
