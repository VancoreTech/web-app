"use client";

import { useState } from "react";
import RegistrationFlow from "./components/RegistrationFlow";
import PricingPage from "./components/PricingPage";
import SignInPage from "./components/SignInPage";
import VerificationModal from "./components/VerificationModal";
import ForgotPasswordFlow from "./components/ForgotPasswordFlow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import UserManagement from "./Pages/UserManagement";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import Analytics from "./Pages/Analytics";
import Campaigns from "./Pages/Campaigns";
import DiscountsCoupons from "./Pages/DiscountsCoupons";
import Transactions from "./Pages/Transactions";
import ConnectedApps from "./Pages/ConnectedApps";
import PaymentsMethods from "./Pages/PaymentsMethods";
import HelpSupport from "./Pages/HelpSupport";

export default function App() {
  const [currentPage, setCurrentPage] = useState("registration");
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

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/discounts" element={<DiscountsCoupons />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/connected-apps" element={<ConnectedApps />} />
        <Route path="/payment-methods" element={<PaymentsMethods />} />
        <Route path="/support" element={<HelpSupport />} />
        <Route path="*" element={
          <>
            {currentPage === "pricing" && (
              <>
                <PricingPage />
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
            )}
            
            {currentPage === "signin" && (
              <SignInPage
                onNavigateToRegistration={() => setCurrentPage("registration")}
                onNavigateToForgotPassword={() => setCurrentPage("forgot-password")}
              />
            )}

            {currentPage === "forgot-password" && (
              <ForgotPasswordFlow
                onNavigateToSignIn={() => setCurrentPage("signin")}
                onNavigateToSignUp={() => setCurrentPage("registration")}
              />
            )}

            {currentPage === "registration" && (
              <>
                <RegistrationFlow
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
                />
              </>
            )}
          </>
        } />
      </Routes>
    </Router>
  );
}
