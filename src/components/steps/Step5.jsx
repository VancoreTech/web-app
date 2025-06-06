"use client"

export default function Step5({ formData, setFormData, onNext, isValid }) {
  return (
    <div className="max-w-[380px] mx-auto px-3">
      <div className="lg:hidden flex justify-center mb-6">
        <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1 text-center">Business information</h1>
      <p className="text-gray-600 mb-4 text-center text-sm">Enter your business details to continue</p>

      <form className="space-y-3.5">
        <div>
          <label className="block text-[15px] text-gray-700 mb-1">Business name</label>
          <input
            type="text"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
            className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA]"
            required
          />
        </div>

        <div>
          <label className="block text-[15px] text-gray-700 mb-1">Store URL</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter store url"
              value={formData.storeUrl}
              onChange={(e) => setFormData((prev) => ({ ...prev, storeUrl: e.target.value }))}
              className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA] pr-[100px]"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-blue-600">.vancour.com</span>
          </div>
        </div>

        <div>
          <label className="block text-[15px] text-gray-700 mb-1">Do you have a physical store?</label>
          <div className="flex gap-2.5">
            <label className="flex items-center h-11 px-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 flex-1 transition-all duration-200 bg-[#F6F8FA]">
              <span className="text-[15px] text-gray-700">Yes</span>
              <div className={`ml-auto w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                formData.hasPhysicalStore === "yes" 
                  ? "border-blue-500 bg-blue-500" 
                  : "border-gray-300 bg-[#44444405]"
              }`}>
                {formData.hasPhysicalStore === "yes" && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <input
                type="radio"
                name="physicalStore"
                value="yes"
                checked={formData.hasPhysicalStore === "yes"}
                onChange={(e) => setFormData((prev) => ({ ...prev, hasPhysicalStore: e.target.value }))}
                className="sr-only"
              />
            </label>

            <label className="flex items-center h-11 px-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 flex-1 transition-all duration-200 bg-[#F6F8FA]">
              <span className="text-[15px] text-gray-700">No</span>
              <div className={`ml-auto w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                formData.hasPhysicalStore === "no" 
                  ? "border-blue-500 bg-blue-500" 
                  : "border-gray-300 bg-[#44444405]"
              }`}>
                {formData.hasPhysicalStore === "no" && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <input
                type="radio"
                name="physicalStore"
                value="no"
                checked={formData.hasPhysicalStore === "no"}
                onChange={(e) => setFormData((prev) => ({ ...prev, hasPhysicalStore: e.target.value }))}
                className="sr-only"
              />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-[15px] text-gray-700 mb-1">Business category</label>
          <div className="relative">
            <select
              value={formData.businessCategory}
              onChange={(e) => setFormData((prev) => ({ ...prev, businessCategory: e.target.value }))}
              className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-[#F6F8FA] text-gray-400"
              required
            >
              <option value="" disabled>Select your business category</option>
              <option value="retail">Retail</option>
              <option value="food">Food & Beverage</option>
              <option value="tech">Technology</option>
              <option value="health">Healthcare</option>
              <option value="education">Education</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#98A2B3" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
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
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
        </p>
      </form>
    </div>
  )
}
