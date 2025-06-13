import { ArrowLeft } from "lucide-react"

export default function VerificationModal({
  showModal,
  setShowModal,
  verificationType,
  verificationCode,
  isVerifying,
  email,
  phone,
  selectedCountry,
  onCodeChange,
  onSubmit,
}) {
  if (!showModal) return null

  // Determine what to display based on verification type
  const getDisplayInfo = () => {
    if (verificationType === "email") {
      return {
        contact: email || "susansheidu@gmail.com",
        message: `We sent a code to`
      }
    } else if (verificationType === "phone") {
      const fullPhone = `${selectedCountry?.code || "+234"} ${phone || "8012345678"}`
      return {
        contact: fullPhone,
        message: `We sent a code to`
      }
    }
    return {
      contact: email || "susansheidu@gmail.com",
      message: `We sent a code to`
    }
  }

  const { contact, message } = getDisplayInfo()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 lg:mr-60">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2 gap-1">
            <img src="/vancore-logo.png" alt="Vancore" className="" />
            <span className="text-xs font-medium">Vancore</span>
          </div>

          <h2 className="text-sm font-semibold text-gray-900 mb-1">Request Code</h2>
          <p className="text-gray-600 mb-4 text-sm">
            {message} <span className="font-semibold">{contact}</span>
          </p>

          <div className="flex justify-center space-x-3 mb-8 border-t border-[#EBEBEB] pt-4">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => onCodeChange(index, e.target.value)}
                onKeyDown={(e) => {
                  // Auto-focus next input on digit entry
                  if (e.key >= '0' && e.key <= '9' && index < 5) {
                    setTimeout(() => {
                      const nextInput = document.getElementById(`code-${index + 1}`)
                      if (nextInput) nextInput.focus()
                    }, 0)
                  }
                  // Auto-focus previous input on backspace
                  else if (e.key === 'Backspace' && !digit && index > 0) {
                    setTimeout(() => {
                      const prevInput = document.getElementById(`code-${index - 1}`)
                      if (prevInput) prevInput.focus()
                    }, 0)
                  }
                }}
                className="w-10 h-10 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            onClick={onSubmit}
            disabled={isVerifying || verificationCode.some((digit) => !digit)}
            className="w-full bg-[#0A6DEE] hover:bg-blue-700 disabled:bg-[#0A6DEE80] text-white py-3 px-4 rounded-lg font-medium mb-4 flex items-center justify-center"
          >
            {isVerifying ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Continue"
            )}
          </button>

          <p className="text-gray-600 mb-4 text-xs">
            Didn't receive the code? <button className="text-blue-600 underline">Click to resend code</button>
          </p>

          <button
            onClick={() => setShowModal(false)}
            className="flex items-center text-gray-400 hover:text-gray-700 mx-auto text-xs"
          >
            <ArrowLeft className="w-4 h-4 mr-2 " />
            Back to create account
          </button>
        </div>
      </div>
    </div>
  )
}