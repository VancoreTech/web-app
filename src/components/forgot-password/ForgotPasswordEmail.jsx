import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordEmail({ onSubmit, onNavigateToSignUp }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    onSubmit(email);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Forgot password
      </h1>
      <p className="text-base text-gray-600 mb-8">
        Please enter the email address linked to your account
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="Enter your email address"
            className="w-full h-[42px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={!email || !isValidEmail(email)}
          className={`w-full h-[42px] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
            email && isValidEmail(email)
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-300 text-white cursor-not-allowed"
          }`}
        >
          Proceed
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          {/* <button
            type="button"
            onClick={onNavigateToSignUp}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up
          </button> */}
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
