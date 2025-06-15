import React, { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";
import Navbar from "../components/Navbar";
import { ChevronDown } from "lucide-react";
import arrows from "../assets/arrows.svg";

const StoreInformation = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Store information form state
  const [storeData, setStoreData] = useState({
    businessName: "Susan clothings",
    storeName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    description: "",
    currency: "Select currency",
  });

  // Modal states
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({});
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  // Currency options
  const currencies = [
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
  ];

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setStoreData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCurrencySelect = (currency) => {
    setStoreData((prev) => ({
      ...prev,
      currency: `${currency.name} (${currency.code})`,
    }));
    setIsCurrencyDropdownOpen(false);
  };

  const handleSubmit = (type) => {
    if (type === "save") {
      setModalConfig({
        title: "Save Changes",
        message:
          "Are you sure you want to save the changes made to store information?",
        confirmText: "Save",
        action: () => {
          setShowConfirmModal(false);
          setShowSuccessModal(true);
          setModalConfig({
            title: "Success",
            message: "Store information has been successfully updated.",
          });
        },
      });
    } else {
      setModalConfig({
        title: "Cancel Changes",
        message:
          "Are you sure you want to cancel? Any unsaved changes will be lost.",
        confirmText: "Yes",
        action: () => {
          // Reset form to initial state
          setStoreData({
            businessName: "Susan clothings",
            storeName: "",
            emailAddress: "",
            phoneNumber: "",
            address: "",
            zipCode: "",
            description: "",
            currency: "Select currency",
          });
          setShowConfirmModal(false);
        },
      });
    }
    setShowConfirmModal(true);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <div className="mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Store information
          </h1>
          <p className="text-gray-500 text-sm">
            See all information about your business here
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <span className="text-blue-600 text-lg cursor-pointer flex items-center gap-2">
              <img src={arrows} alt=" " />
              <p>All information</p>
            </span>
          </div>
          {/* Profile Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Susan"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Susan Sheidu
                </h3>
                <p className="text-gray-500 text-sm">susanclothings</p>
              </div>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                id="logoInput"
              />
              <label
                htmlFor="logoInput"
                className="bg-[#4705E3] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Change logo
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Business Name and Store Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Business name
                </label>
                <input
                  type="text"
                  value={storeData.businessName}
                  onChange={(e) =>
                    handleInputChange("businessName", e.target.value)
                  }
                  className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Store tagline
                </label>
                <input
                  type="text"
                  value={storeData.storeName}
                  onChange={(e) =>
                    handleInputChange("storeName", e.target.value)
                  }
                  placeholder="Enter tag line"
                  className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email Address and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={storeData.emailAddress}
                  onChange={(e) =>
                    handleInputChange("emailAddress", e.target.value)
                  }
                  placeholder="Enter email address"
                  className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  value={storeData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  placeholder="Enter phone number"
                  className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Address and Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={storeData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter address"
                  className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Zip code
                </label>
                <input
                  type="text"
                  value={storeData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  placeholder="Enter zip code"
                  className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={storeData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Enter address"
                rows={4}
                className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            {/* Currency */}
            <div className="relative z-10">
              <label className="block text-sm text-gray-700 mb-2">
                Currency
              </label>
              <div
                className="w-full px-3 py-3 border text-sm bg-[#F6F8FA] border-[#ECEFF3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
                }
              >
                <span
                  className={
                    storeData.currency === "Select currency"
                      ? "text-gray-400"
                      : "text-gray-900"
                  }
                >
                  {storeData.currency}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    isCurrencyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isCurrencyDropdownOpen && (
  <div className="absolute z-50 w-full bottom-full mb-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {currencies.map((currency) => (
                    <div
                      key={currency.code}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                      onClick={() => handleCurrencySelect(currency)}
                    >
                      {currency.name} ({currency.code})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-8">
            <button
              onClick={() => handleSubmit("cancel")}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSubmit("save")}
              className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Save changes
            </button>
          </div>
        </div>

        {/* Modals */}
        <ConfirmModal
          isOpen={showConfirmModal}
          title={modalConfig.title}
          message={modalConfig.message}
          confirmText={modalConfig.confirmText}
          onConfirm={modalConfig.action}
          onCancel={() => setShowConfirmModal(false)}
        />

        <SuccessModal
          isOpen={showSuccessModal}
          title={modalConfig.title}
          message={modalConfig.message}
          onDone={() => setShowSuccessModal(false)}
        />
      </div>
    </div>
  );
};

export default StoreInformation;
