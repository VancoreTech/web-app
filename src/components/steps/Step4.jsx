import React from "react";
import { Link } from "react-router-dom";
export default function Step4({
  goals,
  formData,
  onGoalToggle,
  onNext,
  isValid,
  onNavigateToSignIn,
}) {
  const goalOptions = [
    "Create a website & run sales",
    "Record daily sales",
    "Get detailed business analytics",
    "Create invoices",
    "Manage my inventory and staff across different locations",
    "Create receipts",
    "Automate my sales and order processes",
  ];

  return (
    <div className="max-w-4xl mx-auto px-3 lg:pb-0 pb-10">
      <div className="lg:hidden flex justify-center mb-6">
        <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        What do you need Vancore for?
      </h1>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Choose your goal so we can match you with the right tools and features
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {goalOptions.map((goal, index) => {
          const isSelected = formData.goals.includes(goal);
          const isFullWidth =
            goal ===
              "Manage my inventory and staff across different locations" ||
            goal === "Automate my sales and order processes";

          return (
            <div key={index} className={`${isFullWidth ? "col-span-2" : ""}`}>
              <label
                className={`flex items-center min-h-[40px] border rounded-lg cursor-pointer transition-all duration-200 w-full ${
                  isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50 bg-[#44444405]"
                }`}
              >
                <div className="flex-1 flex items-center min-w-0 px-3 py-1.5">
                  <span className="text-[15px] text-gray-700">{goal}</span>
                </div>
                <div
                  className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors mx-3 ${
                    isSelected
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300 bg-[#44444405]"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onGoalToggle(goal)}
                  className="sr-only"
                />
              </label>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`w-full max-w-sm py-3 px-6 rounded-lg font-medium mb-4 transition-colors duration-200 ${
            isValid
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Proceed
        </button>
      </div>

      <p className="text-center text-gray-600 text-sm">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
