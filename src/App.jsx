"use client";

import { useState } from "react";
import RegistrationFlow from "./components/RegistrationFlow";
import PricingPage from "./components/PricingPage";
import SignInPage from "./components/SignInPage";
import VerificationModal from "./components/VerificationModal";
import ForgotPasswordFlow from "./components/ForgotPasswordFlow";
import { Route, Router, Routes } from "react-router-dom";

export default function App() {
  // const [currentPage, setCurrentPage] = useState("registration");
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const [verificationType, setVerificationType] = useState("");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referralCode: "",
    goals: [],
    businessName: "",
    storeUrl: "",
    hasPhysicalStore: "",
    businessCategory: "",
  });

  const handleVerifyClick = (type) => {
    setVerificationType(type);
    setShowVerificationModal(true);
  };

  const handleVerificationSubmit = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setShowVerificationModal(false);
      setVerificationCode(["", "", "", "", "", ""]);
    }, 2000);
  };

  const handleVerificationCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // if (currentPage === "pricing") {
  //   return (
  //     <>
  //       <PricingPage />
  //       <VerificationModal
  //         showModal={showVerificationModal}
  //         setShowModal={setShowVerificationModal}
  //         verificationType={verificationType}
  //         verificationCode={verificationCode}
  //         isVerifying={isVerifying}
  //         email={formData.email}
  //         onCodeChange={handleVerificationCodeChange}
  //         onSubmit={handleVerificationSubmit}
  //       />
  //     </>
  //   );
  // }

  // if (currentPage === "signin") {
  //   return (
  //     <SignInPage
  //       onNavigateToRegistration={() => setCurrentPage("registration")}
  //       onNavigateToForgotPassword={() => setCurrentPage("forgot-password")}
  //     />
  //   );
  // }

  // if (currentPage === "forgot-password") {
  //   return (
  //     <ForgotPasswordFlow
  //       onNavigateToSignIn={() => setCurrentPage("signin")}
  //       onNavigateToSignUp={() => setCurrentPage("registration")}
  //     />
  //   );
  // }

  return (
    <>
      {/* <RegistrationFlow
        formData={formData}
        setFormData={setFormData}
        onVerifyClick={handleVerifyClick}
        onNavigateToPricing={() => setCurrentPage("pricing")}
        onNavigateToSignIn={() => setCurrentPage("signin")}
      />
      <VerificationModal
        showModal={showVerificationModal}
        setShowModal={setShowVerificationModal}
        verificationType={verificationType}
        verificationCode={verificationCode}
        isVerifying={isVerifying}
        email={formData.email}
        onCodeChange={handleVerificationCodeChange}
        onSubmit={handleVerificationSubmit}
      /> */}
      <Routes>
        <Route
          path="/"
          element={
            <RegistrationFlow
              formData={formData}
              setFormData={setFormData}
              onVerifyClick={handleVerifyClick}
            />
          }
        />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordFlow />} />
      </Routes>

      <VerificationModal
        showModal={showVerificationModal}
        setShowModal={setShowVerificationModal}
        verificationType={verificationType}
        verificationCode={verificationCode}
        isVerifying={isVerifying}
        email={formData.email}
        onCodeChange={handleVerificationCodeChange}
        onSubmit={handleVerificationSubmit}
      />
    </>
  );
}
