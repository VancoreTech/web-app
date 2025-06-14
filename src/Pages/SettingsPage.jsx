import React, { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";
import Navbar from "../components/Navbar";
import { User, Eye, Landmark, EyeOff } from "lucide-react";

// Main Settings Component
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: "Susan",
    lastName: "Sheidu",
    otherName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  // Password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Password visibility state
  const [passwordVisibility, setPasswordVisibility] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Bank details state
  const [bankData, setBankData] = useState({
    bankName: "Sterling Bank",
    accountNumber: "9876543567",
    accountName: "SHEIDU SUSAN",
  });

  // Modal states
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({});

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

  // Check if all profile fields are filled
  const isProfileFormComplete = () => {
    return (
      profileData.firstName.trim() !== "" &&
      profileData.lastName.trim() !== "" &&
      profileData.otherName.trim() !== "" &&
      profileData.phoneNumber.trim() !== "" &&
      profileData.emailAddress.trim() !== ""
    );
  };

  const handleProfileSubmit = (type) => {
    if (type === "save") {
      if (!isProfileFormComplete()) {
        alert("Please fill in all fields before saving");
        return;
      }
      setModalConfig({
        title: "Confirm Action",
        message: "Are you sure you want to save the changes made?",
        confirmText: "Confirm",
        action: () => {
          setShowConfirmModal(false);
          setShowSuccessModal(true);
          setModalConfig({
            title: "Success",
            message: "You have successfully saved the changes made.",
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
          setProfileData({
            firstName: "Susan",
            lastName: "Sheidu",
            otherName: "",
            phoneNumber: "",
            emailAddress: "",
          });
          setShowConfirmModal(false);
        },
      });
    }
    setShowConfirmModal(true);
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handlePasswordSubmit = () => {
    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      alert("Please fill in all password fields");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    setModalConfig({
      title: "Update Password",
      message: "Are you sure you want to update your password details?",
      confirmText: "Confirm",
      action: () => {
        setShowConfirmModal(false);
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setPasswordVisibility({
          current: false,
          new: false,
          confirm: false,
        });
        setShowSuccessModal(true);
        setModalConfig({
          title: "Success",
          message: "Your successfully updated your password.",
        });
      },
    });
    setShowConfirmModal(true);
  };

  const handleBankSubmit = (type) => {
    if (type === "update") {
      setModalConfig({
        title: "Update Bank Details",
        message: "Are you sure you want to update your bank details?",
        confirmText: "Confirm",
        action: () => {
          setShowConfirmModal(false);
          setShowSuccessModal(true);
          setModalConfig({
            title: "Bank Details Updated",
            message: "Your bank details have been successfully updated.",
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
          setBankData({
            bankName: "Sterling Bank",
            accountNumber: "9876543567",
            accountName: "SHEIDU SUSAN",
          });
          setShowConfirmModal(false);
        },
      });
    }
    setShowConfirmModal(true);
  };

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "password", label: "Password" },
    { id: "bank", label: "Bank details" },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <Navbar />
      <div className="mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Settings
          </h1>
          <p className="text-gray-600 text-sm">Track your expenses here</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "text-[#4705E3] border-[#4705E3]"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6 bg-white border border-gray-200 p-6 rounded-lg">
            {/* Profile Photo Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {profilePhoto ? (
                    <img 
                      src={profilePhoto} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-500" />
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Susan Sheidu
                  </h3>
                  <p className="text-gray-600 text-sm">susanclothings</p>
                </div>
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  id="profilePhotoInput"
                />
                <label 
                  htmlFor="profilePhotoInput"
                  className="bg-[#4705E3] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Change profile photo
                </label>
              </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other name
                </label>
                <input
                  type="text"
                  value={profileData.otherName}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      otherName: e.target.value,
                    }))
                  }
                  placeholder="Enter other name"
                  className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  value={profileData.phoneNumber}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={profileData.emailAddress}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      emailAddress: e.target.value,
                    }))
                  }
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                onClick={() => handleProfileSubmit("cancel")}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => handleProfileSubmit("save")}
                disabled={!isProfileFormComplete()}
                className={`px-6 py-2 text-sm rounded-lg font-medium transition-colors ${
                  isProfileFormComplete()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Save changes
              </button>
            </div>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === "password" && (
          <div className="space-y-6 bg-white border border-gray-200 p-6 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current password
              </label>
              <div className="relative">
                <input
                  type={passwordVisibility.current ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      currentPassword: e.target.value,
                    }))
                  }
                  placeholder="Enter current password"
                  className="w-full px-3 py-2 pr-10 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {passwordVisibility.current ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New password
              </label>
              <div className="relative">
                <input
                  type={passwordVisibility.new ? "text" : "password"}
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 pr-10 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {passwordVisibility.new ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={passwordVisibility.confirm ? "text" : "password"}
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  placeholder="Confirm password"
                  className="w-full px-3 py-2 pr-10 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {passwordVisibility.confirm ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                onClick={() => {
                  setPasswordData({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                  });
                  setPasswordVisibility({
                    current: false,
                    new: false,
                    confirm: false,
                  });
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Update password
              </button>
            </div>
          </div>
        )}

        {/* Bank Details Tab */}
        {activeTab === "bank" && (
          <div className="space-y-6 bg-white border border-gray-200 p-6 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank name
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Landmark className="w-4 h-4" />
                </div>
                <select
                  value={bankData.bankName}
                  onChange={(e) =>
                    setBankData((prev) => ({ ...prev, bankName: e.target.value }))
                  }
                  className="w-full pl-10 pr-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Sterling Bank">Sterling Bank</option>
                  <option value="Access Bank">Access Bank</option>
                  <option value="GTBank">GTBank</option>
                  <option value="First Bank">First Bank</option>
                  <option value="UBA">UBA</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account number
              </label>
              <input
                type="text"
                value={bankData.accountNumber}
                onChange={(e) =>
                  setBankData((prev) => ({
                    ...prev,
                    accountNumber: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="accountName"
                checked={true}
                readOnly
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="accountName"
                className="text-blue-600 font-medium text-sm"
              >
                {bankData.accountName}
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                onClick={() => handleBankSubmit("cancel")}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => handleBankSubmit("update")}
                className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Update bank details
              </button>
            </div>
          </div>
        )}

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

export default SettingsPage;