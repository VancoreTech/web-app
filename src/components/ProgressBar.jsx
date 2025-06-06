export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="w-full px-4 lg:px-8 pt-12">
      <div className="relative w-full">
        
        <div className="hidden lg:flex justify-between mb-4 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="flex-1 text-center">
              <span className={`text-sm font-medium ${currentStep >= step.id ? "text-purple-600" : "text-gray-400"}`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>

        
        <div className="relative h-4 flex items-center w-full lg:max-w-4xl lg:mx-auto">
          
          <div className="relative w-full lg:hidden px-2">
            
            <div className="absolute h-0.5 bg-gray-300 left-2 right-2 top-1/2 transform -translate-y-1/2"></div>

            <div
              className="absolute h-0.5 bg-purple-600 left-2 top-1/2 transform -translate-y-1/2 transition-all duration-300"
              style={{
                width: currentStep === 1 ? "0%" : `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - ${16 / steps.length}px)`,
              }}
            ></div>

            <div className="absolute left-2 right-2 flex justify-between top-1/2 transform -translate-y-1/2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-4 h-4 rounded-full z-10 transition-all duration-300 ${
                    currentStep >= step.id ? "bg-purple-600" : "bg-white border-2 border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            className="relative hidden lg:block"
            style={{
              width: `${(100 * (steps.length - 1)) / steps.length}%`,
              marginLeft: `${100 / (2 * steps.length)}%`,
              marginRight: `${100 / (2 * steps.length)}%`,
            }}
          >
            
            <div className="absolute h-0.5 bg-gray-300 left-0 right-0 top-1/2 transform -translate-y-1/2"></div>

            <div
              className="absolute h-0.5 bg-purple-600 left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300"
              style={{
                width: currentStep === 1 ? "0%" : `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            ></div>

            <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-4 h-4 rounded-full z-10 transition-all duration-300 ${
                    currentStep >= step.id ? "bg-purple-600" : "bg-white border-2 border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}