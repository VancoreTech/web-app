"use client"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function SignInPage({ onNavigateToRegistration, onNavigateToForgotPassword }) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const isFormValid = formData.username.trim() !== '' && formData.password.trim() !== ''

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-y-scroll">
      <Sidebar />
      
      <div className="flex-1 xl:w-3/5 flex flex-col">
        <div className="flex-1 flex justify-center items-start px-8 pt-20">
          <div className="w-full max-w-[380px]">
            <div className="lg:hidden flex justify-center mb-6">
              <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-1 text-center">Sign in</h1>
            <p className="text-gray-600 mb-6 text-center text-sm">Sign in to your account to continue</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[15px] text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA]"
                  required
                />
              </div>

              <div>
                <label className="block text-[15px] text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                onClick={() => onNavigateToForgotPassword()}
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot password?
              </button>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  isFormValid 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Sign in
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => onNavigateToRegistration()}
                className="text-blue-600 hover:underline"
              >
                Create free account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 