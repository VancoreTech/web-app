import { useState } from "react";
import { Link } from "react-router-dom";

export default function Step3({
  formData,
  setFormData,
  onVerifyClick,
  onNext,
  isValid,
  onNavigateToSignIn,
}) {
  const countries = [
    { code: "+234", name: "Nigeria", flag: "/nigerian-flag.svg" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className=" w-[25rem] max-sm:w-full mx-auto px-2">
      <div className="lg:hidden flex justify-center mb-6">
        <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8" />
      </div>
      <h1 className="text-xl font-bold text-gray-900 mb-1 text-center">
        Create free account
      </h1>
      <p className="text-gray-600 mb-4 text-center text-base ">
        Take the first step to better business management
      </p>

      <form className="space-y-3 max-sm:w-full w-[25rem] mx-auto">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            First name
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className="w-full p-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#F6F8FA", borderColor: "#DFE1E7" }}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Last name
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className="w-full p-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#F6F8FA", borderColor: "#DFE1E7" }}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email address
          </label>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="flex-1 p-3 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F6F8FA", borderColor: "#DFE1E7" }}
              required
            />
            <button
              type="button"
              onClick={() => onVerifyClick("email")}
              className="px-3 py-2 text-sm text-white rounded-r-md"
              style={{ backgroundColor: "#5704E3" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#4701C0")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#5704E3")
              }
            >
              Verify
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex relative">
            <div
              className="flex items-center px-3 py-2 text-sm border rounded-l-md bg-gray-50 cursor-pointer select-none"
              style={{ borderColor: "#DFE1E7" }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img src={selectedCountry.flag} className="w-4 h-4" alt="flag" />
              <svg
                className={`ml-2 w-4 h-4 text-gray-500 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="flex-1 p-3 text-sm border-t border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F6F8FA", borderColor: "#DFE1E7" }}
              required
            />

            <button
              type="button"
              onClick={() => onVerifyClick("phone")}
              className="px-3 py-2 text-sm text-white rounded-r-md"
              style={{ backgroundColor: "#5704E3" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#4701C0")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#5704E3")
              }
            >
              Verify
            </button>

            {showDropdown && (
              <ul
                className="absolute top-full left-0 z-10 w-40 mt-1 overflow-auto bg-white border border-gray-300 rounded shadow-lg max-h-40"
                style={{ maxHeight: "160px" }}
              >
                {countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowDropdown(false);
                    }}
                  >
                    <img
                      src={country.flag}
                      className="w-4 h-4 mr-1"
                      alt="flag"
                    />
                    <span className="text-sm">
                      {country.name} ({country.code})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Referral code
          </label>
          <input
            type="text"
            placeholder="Enter referral code (optional)"
            value={formData.referralCode}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, referralCode: e.target.value }))
            }
            className="w-full p-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#F6F8FA", borderColor: "#DFE1E7" }}
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className={`w-full p-3 text-sm rounded-md font-medium transition-colors ${
            isValid
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Proceed
        </button>

        <p className="text-center text-gray-600 text-xs">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
