"use client"

import { useState } from 'react'
import Sidebar from './Sidebar'
import ForgotPasswordEmail from './forgot-password/ForgotPasswordEmail'
import ForgotPasswordCode from './forgot-password/ForgotPasswordCode'
import ForgotPasswordReset from './forgot-password/ForgotPasswordReset'
import ForgotPasswordSuccess from './forgot-password/ForgotPasswordSuccess'

export default function ForgotPasswordFlow({ onNavigateToSignIn, onNavigateToSignUp }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])

  const handleEmailSubmit = (submittedEmail) => {
    setEmail(submittedEmail)
    setCurrentStep(2)
  }

  const handleCodeSubmit = (code) => {
    setVerificationCode(code)
    setCurrentStep(3)
  }

  const handlePasswordReset = () => {
    setCurrentStep(4)
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ForgotPasswordEmail 
            onSubmit={handleEmailSubmit}
            onNavigateToSignUp={onNavigateToSignUp}
          />
        )
      case 2:
        return (
          <ForgotPasswordCode
            email={email}
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            onSubmit={handleCodeSubmit}
            onNavigateToSignUp={onNavigateToSignUp}
          />
        )
      case 3:
        return (
          <ForgotPasswordReset
            onSubmit={handlePasswordReset}
            onNavigateToSignUp={onNavigateToSignUp}
          />
        )
      case 4:
        return (
          <ForgotPasswordSuccess
            onNavigateToSignIn={onNavigateToSignIn}
          />
        )
      default:
        return null
    }
  }

  if (currentStep === 4) {
    return renderCurrentStep()
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

            {renderCurrentStep()}
          </div>
        </div>
      </div>
    </div>
  )
} 