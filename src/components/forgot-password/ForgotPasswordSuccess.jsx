export default function ForgotPasswordSuccess({ onNavigateToSignIn }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-[380px]">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-[#00A85A] flex items-center justify-center">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Congratulations!
          </h1>
          <p className="text-base text-gray-600 mb-8">
            Your password reset was successful. You can proceed to sign in
          </p>

          <button
            onClick={onNavigateToSignIn}
            className="w-full h-[42px] bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
} 