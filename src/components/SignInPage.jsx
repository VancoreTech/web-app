"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate, Link } from "react-router-dom";

export default function SignInPage({
  onNavigateToRegistration,
  onNavigateToForgotPassword,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-y-scroll">
      <Sidebar />

      <div className="flex-1 xl:w-3/5 flex flex-col">
        <div className="flex-1 flex justify-center items-start px-8 pt-20">
          <div className="w-full max-w-[380px]">
            <div className="lg:hidden flex justify-center mb-6">
              <img src="/vancore-logo.png" alt="Vancore Logo" className="h-8" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-1 text-center">
              Sign in
            </h1>
            <p className="text-gray-600 mb-6 text-center text-sm">
              Sign in to your account to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[15px] text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA]"
                  required
                />
              </div>

              <div>
                <label className="block text-[15px] text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="w-full h-11 px-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 bg-[#F6F8FA] pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                  >
                    {showPassword ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 4.16699C12.8453 4.16699 15.412 5.49633 17.222 7.66466C18.177 8.81999 18.177 10.6813 17.222 11.8367C15.412 14.005 12.8453 15.3337 10 15.3337C7.1547 15.3337 4.58803 14.005 2.77803 11.8367C1.82303 10.6813 1.82303 8.81999 2.77803 7.66466C4.58803 5.49633 7.1547 4.16699 10 4.16699ZM10 13.3337C11.5053 13.3337 12.7213 12.1177 12.7213 10.6003C12.7213 9.09499 11.5053 7.87033 10 7.87033C8.49469 7.87033 7.27869 9.09499 7.27869 10.6003C7.27869 12.1177 8.49469 13.3337 10 13.3337ZM10 11.667C9.40869 11.667 8.94536 11.1977 8.94536 10.6003C8.94536 10.009 9.40869 9.53366 10 9.53366C10.5913 9.53366 11.0547 10.009 11.0547 10.6003C11.0547 11.1977 10.5913 11.667 10 11.667Z"
                          fill="#98A2B3"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33366 3.33366L16.667 16.667M8.89033 8.89699C8.51366 9.27366 8.29199 9.78699 8.29199 10.3337C8.29199 11.4387 9.18699 12.3337 10.292 12.3337C10.8387 12.3337 11.352 12.112 11.7287 11.7353M7.83366 4.95866C8.51366 4.70866 9.24199 4.58366 10.0003 4.58366C12.8457 4.58366 15.4123 5.91299 17.2223 8.08133C17.6873 8.63966 17.9207 9.27366 17.9957 9.91699C18.0123 10.112 18.0123 10.5553 17.9957 10.7503C17.9207 11.3937 17.6873 12.0277 17.2223 12.5853C16.5957 13.3403 15.8923 14.0053 15.1373 14.5453M12.8457 15.8337C11.9507 16.1187 11.0007 16.2853 10.0003 16.2853C7.15499 16.2853 4.58833 14.9553 2.77833 12.787C2.31333 12.2287 2.07999 11.5953 2.00499 10.952C1.98833 10.757 1.98833 10.3137 2.00499 10.1187C2.07999 9.47533 2.31333 8.84133 2.77833 8.28366C3.40499 7.52866 4.10833 6.86366 4.86333 6.32366"
                          stroke="#98A2B3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                {/* <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot password?
                </button> */}
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Sign in
              </button>

              <p className="text-center text-[15px] text-gray-600">
                Don't have an account?{" "}
                {/* <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="text-blue-600 hover:underline"
                >
                  Sign up
                </button> */}
                <Link to="/" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
