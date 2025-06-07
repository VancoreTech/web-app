import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordCode({
  email,
  verificationCode,
  setVerificationCode,
  onSubmit,
  onNavigateToSignUp,
}) {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;

    setVerificationCode(newCode);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificationCode.every((digit) => digit !== "")) {
      onSubmit(verificationCode);
    }
  };

  const isComplete = verificationCode.every((digit) => digit !== "");

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Forgot password
      </h1>
      <p className="text-base text-gray-600 mb-8">
        Please enter the 6-digit code that has been sent to your email
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter the 6-digit code
          </label>
          <div className="flex gap-2 justify-between">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-[52px] h-[42px] text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isComplete}
          className={`w-full h-[42px] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
            isComplete
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-300 text-white cursor-not-allowed"
          }`}
        >
          Proceed
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
