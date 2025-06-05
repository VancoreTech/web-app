"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import ProgressBar from "./ProgressBar"
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import Step4 from "./steps/Step4"
import Step5 from "./steps/Step5"
import Step6 from "./steps/Step6"
import Step7 from "./steps/Step7"

export default function RegistrationFlow({ formData, setFormData, onVerifyClick, onNavigateToPricing }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [accountType, setAccountType] = useState("")

  const steps = [
    { id: 1, name: "Create free account", subSteps: [1, 2, 3] },
    { id: 2, name: "Why Vancore?", subSteps: [4] },
    { id: 3, name: "Business information", subSteps: [5] },
    { id: 4, name: "Set up password", subSteps: [6] },
  ]

  const getProgressStep = () => {
    if (currentStep >= 7) return 4 // All steps complete
    if (currentStep >= 6) return 4 // Password setup
    if (currentStep >= 5) return 3 // Business information
    if (currentStep >= 4) return 2 // Why Vancore
    if (currentStep >= 1) return 1 // Create free account
    return 1
  }

  const isStepGroupComplete = (stepGroup) => {
    const lastStepInGroup = Math.max(...stepGroup.subSteps)
    return currentStep > lastStepInGroup
  }

  const goals = [
    "Create a website & run sales",
    "Record daily sales",
    "Get detailed business analytics",
    "Create invoices",
    "Manage my inventory and staff across different locations",
    "Create receipts",
    "Automate my sales and order processes",
  ]

  const handleGoalToggle = (goal) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }))
  }

  // Form validation functions
  const isStep1Valid = () => true // Always valid for initial step

  const isStep2Valid = () => accountType !== ""

  const isStep3Valid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== ""
    )
  }

  const isStep4Valid = () => formData.goals.length > 0

  const isStep5Valid = () => {
    return (
      formData.businessName.trim() !== "" &&
      formData.storeUrl.trim() !== "" &&
      formData.hasPhysicalStore !== "" &&
      formData.businessCategory !== ""
    )
  }

  const isStep6Valid = () => {
    return (
      formData.password?.trim() !== "" &&
      formData.confirmPassword?.trim() !== "" &&
      formData.password === formData.confirmPassword
    )
  }

  const getCurrentStepValidation = () => {
    switch (currentStep) {
      case 1:
        return isStep1Valid()
      case 2:
        return isStep2Valid()
      case 3:
        return isStep3Valid()
      case 4:
        return isStep4Valid()
      case 5:
        return isStep5Valid()
      case 6:
        return isStep6Valid()
      default:
        return true
    }
  }

  const renderCurrentStep = () => {
    const isValid = getCurrentStepValidation()

    switch (currentStep) {
      case 1:
        return <Step1 onNext={() => setCurrentStep(2)} isValid={isValid} />
      case 2:
        return (
          <Step2
            accountType={accountType}
            setAccountType={setAccountType}
            onNext={() => setCurrentStep(3)}
            isValid={isValid}
          />
        )
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            onVerifyClick={onVerifyClick}
            onNext={() => setCurrentStep(4)}
            isValid={isValid}
          />
        )
      case 4:
        return (
          <Step4
            goals={goals}
            formData={formData}
            onGoalToggle={handleGoalToggle}
            onNext={() => setCurrentStep(5)}
            isValid={isValid}
          />
        )
      case 5:
        return (
          <Step5 formData={formData} setFormData={setFormData} onNext={() => setCurrentStep(6)} isValid={isValid} />
        )
      case 6:
        return (
          <Step6 formData={formData} setFormData={setFormData} onNext={() => setCurrentStep(7)} isValid={isValid} />
        )
      case 7:
        return <Step7 onNavigateToPricing={onNavigateToPricing} />
      default:
        return <Step1 onNext={() => setCurrentStep(2)} isValid={isValid} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-y-scroll">
      {currentStep < 7 && <Sidebar />}

      <div className={`flex-1 ${currentStep < 7 ? "xl:w-3/5" : "w-full"} flex flex-col h-screen`}>
        {/* Progress Bar with top padding */}
        {currentStep < 7 && <ProgressBar steps={steps} currentStep={getProgressStep()} />}

        {/* Main Content with centered layout and proper spacing */}
        <div className="flex-1 flex pt-20 justify-center px-8">
          <div className="w-full max-w-lg">{renderCurrentStep()}</div>
        </div>
      </div>
    </div>
  )
}
