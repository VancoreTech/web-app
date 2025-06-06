export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white mt-10 mb-10">
      <div className="px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="mb-12">
            <div className="flex lg:flex-row flex-col items-center mb-6">
              <div className="flex items-center justify-center w-full lg:w-auto lg:justify-start mb-4 lg:mb-0">
                <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8 w-auto mr-2" />
                <span className="text-xl font-semibold text-gray-900">Vancore</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1 text-center lg:text-left">Subscription plan</h1>
            <p className="text-gray-600 text-sm text-center lg:text-left">Choose your preferred subscription plan</p>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-[#F8F9FF] rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="w-8 h-8 mb-4">
                <img src="/pricing-icon.png" alt="Pricing Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter plan</h3>
              <p className="text-gray-600 text-sm mb-6">
                Take control of your business finances with the Basic plan—your all-in-one solution for smart financial management.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">₦0.00</span>
              </div>

              <hr className="border-gray-200 mb-6" />

              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Access to Essential Features</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
                Get started
              </button>
            </div>

            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="absolute -top-3 right-6">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-medium">Recommended</span>
              </div>
              <div className="w-8 h-8 mb-4">
                <img src="/pricing-icon.png" alt="Pricing Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business plan</h3>
              <p className="text-gray-600 text-sm mb-6">
                Take control of your business finances with the Basic plan—your all-in-one solution for smart financial management.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">₦40,000.00</span>
                <span className="text-gray-600 text-sm">/per month</span>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Access to Essential Features</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gray-100 text-gray-500 py-3 px-4 rounded-lg text-sm font-medium cursor-not-allowed">
                Coming soon
              </button>
            </div>

            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="w-8 h-8 mb-4">
                <img src="/pricing-icon.png" alt="Pricing Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth plan</h3>
              <p className="text-gray-600 text-sm mb-6">
                Take control of your business finances with the Basic plan—your all-in-one solution for smart financial management.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">₦65,000.00</span>
                <span className="text-gray-600 text-sm">/per month</span>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Access to Essential Features</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gray-100 text-gray-500 py-3 px-4 rounded-lg text-sm font-medium cursor-not-allowed">
                Coming soon
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="w-8 h-8 mb-4">
                <img src="/pricing-icon.png" alt="Pricing Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise plan</h3>
              <p className="text-gray-600 text-sm mb-6">
                Take control of your business finances with the Basic plan—your all-in-one solution for smart financial management.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">₦120,000.00</span>
                <span className="text-gray-600 text-sm">/per month</span>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Access to Essential Features</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gray-100 text-gray-500 py-3 px-4 rounded-lg text-sm font-medium cursor-not-allowed">
                Coming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
