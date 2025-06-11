import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

const EditGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupFormData = location.state?.groupData;
  const [formData, setFormData] = useState({
    groupName: "",
    customer: "",
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showCancelSuccessModal, setShowCancelSuccessModal] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Check if form is valid for proceed button
  const isProceedDisabled =
  !formData.groupName || !formData.customer;

  const handleCancel = () => {
    setShowCancelConfirmModal(true);
  };

  const handleProceed = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmCustomer = () => {
    setShowConfirmModal(false);
    // Add your customer update logic here
    console.log("Customer updated:", formData);
    setShowSuccessModal(true);
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    // Pass the updated customer data back to the Customer Details page
    navigate("/dashboard/customer-group-details", {
      state: { groupData: formData },
    });
  };

  const handleConfirmCancel = () => {
    setShowCancelConfirmModal(false);
    setShowCancelSuccessModal(true);
  };

  const handleCancelCancelConfirm = () => {
    setShowCancelConfirmModal(false);
  };

  const handleCancelSuccessDone = () => {
    setShowCancelSuccessModal(false);
    navigate("/dashboard/customer-group-details", {
      state: { groupData: groupFormData },
    });
  };

  // Add a check to handle case where no customer data is provided
  if (!groupFormData) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Navbar />
        <div className="mx-auto space-y-6 ">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/customer-group-details">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <p className="text-center text-gray-500">
              No Group data found. Please go back and select a Group to edit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <div className=" mx-auto p-6">
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/customer-group-details"
            state={{ groupData: groupFormData }}
          >
            <button
              onClick={() => navigate("/dashboard/customer-group-details")}
              className="flex items-center mb-4 gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Edit group
        </h1>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <form className="p-6 space-y-8">
            {/* Order details section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-lg">≫</span>
                <h2 className="font-medium">Details</h2>
              </div>
              <div className="space-y-4">
                {/* Group Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="groupName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Group name
                  </label>
                  <input
                    type="text"
                    id="groupName"
                    value={formData.groupName}
                    onChange={(e) =>
                      handleInputChange("groupName", e.target.value)
                    }
                    className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter group name"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between">
                      <label
                        htmlFor="customer"
                        className="text-sm font-medium text-gray-700"
                      >
                        Customer
                      </label>
                      <button
                        type="button"
                        className="text-blue-600 hover:text-blue-800 font-medium ml-4"
                      >
                        New group
                      </button>
                    </div>

                    <div className="relative">
                      <select
                        id="customer"
                        value={formData.customer}
                        onChange={(e) =>
                          handleInputChange("customer", e.target.value)
                        }
                        className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select customer</option>
                        <option value="customer1">Customer 1</option>
                        <option value="customer2">Customer 2</option>
                        <option value="customer3">Customer 3</option>
                        <option value="customer4">Customer 4</option>
                        <option value="customer5">Customer 5</option>
                        <option value="customer6">Customer 6</option>
                        <option value="customer7">Customer 7</option>
                        <option value="customer8">Customer 8</option>
                        <option value="customer9">Customer 9</option>
                        <option value="customer10">Customer 10</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Action buttons */}
          <div className=" px-6 py-4 flex justify-end gap-3">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed}
              disabled={isProceedDisabled}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isProceedDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Save changes
            </button>

            <ConfirmModal
              isOpen={showConfirmModal}
              title="Confirm action"
              message="Are you sure you want to save the changes made to the customer group?"
              onConfirm={handleConfirmCustomer}
              onCancel={handleCancelConfirm}
            />

            <SuccessModal
              isOpen={showSuccessModal}
              title="Success"
              message="You have successfully saved the changes made to the customer group."
              onDone={handleSuccessDone}
            />

            <ConfirmModal
              isOpen={showCancelConfirmModal}
              title="Confirm action"
              message="Are you sure you want to trash this customer group?"
              onConfirm={handleConfirmCancel}
              onCancel={handleCancelCancelConfirm}
            />

            <SuccessModal
              isOpen={showCancelSuccessModal}
              title="Success"
              message="You have successfully trashed this customer group."
              onDone={handleCancelSuccessDone}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGroup;
