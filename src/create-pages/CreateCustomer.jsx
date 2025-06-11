import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    additionalNotes: "",
    customer: "",
    shippingAddress: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    billingAddress: "",
    billingCountry: "",
    billingState: "",
    billingCity: "",
    billingZipCode: "",
    sameAsShipping: false,
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

  const handleCancel = () => {
    const hasFormData = Object.values(formData).some((value) => {
      if (typeof value === 'boolean') return false;
      return value.trim() !== "";
    });

    if (hasFormData) {
      setShowCancelConfirmModal(true);
    } else {
      navigate("/dashboard/customers");
    }
  };

  const handleProceed = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmCustomer = () => {
    console.log("Customer created successfully", formData);
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/customer-details", {
      state: {
        customerData: formData
      }
    });
  };

  const handleConfirmCancel = () => {
    console.log("Customer creation cancelled");
    setShowCancelConfirmModal(false);
    setShowCancelSuccessModal(true);
  };

  const handleCancelCancelConfirm = () => {
    setShowCancelConfirmModal(false);
  };

  const handleCancelSuccessDone = () => {
    setShowCancelSuccessModal(false);
    navigate("/dashboard/customers");
  };

  const isFormValid = () => {
    const orderDetailsFields = [
      "firstName",
      "lastName", 
      "email",
      "phone",
      "address",
      "customer"
    ];
    
    const shippingDetailsFields = [
      "shippingAddress",
      "country",
      "state",
      "city"
    ];
    
    // Check if all order details fields are filled
    const orderDetailsValid = orderDetailsFields.every((field) => formData[field].trim() !== "");
    
    // Check if all shipping details fields are filled
    const shippingDetailsValid = shippingDetailsFields.every((field) => formData[field].trim() !== "");
    
    // Check billing address fields only if "same as shipping" is not checked
    let billingDetailsValid = true;
    if (!formData.sameAsShipping) {
      const billingDetailsFields = [
        "billingAddress",
        "billingCountry",
        "billingState",
        "billingCity"
      ];
      billingDetailsValid = billingDetailsFields.every((field) => formData[field].trim() !== "");
    }
    
    return orderDetailsValid && shippingDetailsValid && billingDetailsValid;
  };

  const isProceedDisabled = !isFormValid();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <div className=" mx-auto p-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/dashboard/customers")}
            className="flex items-center mb-4 gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Add new customer
        </h1>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <form className="p-6 space-y-8">
            {/* Order details section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-lg">≫</span>
                <h2 className="font-medium">Order details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional notes (optional)
                </label>
                <textarea
                  id="additionalNotes"
                  placeholder="Enter an additional note"
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    handleInputChange("additionalNotes", e.target.value)
                  }
                  className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between" >
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

            {/* Shipping details section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-lg">≫</span>
                <h2 className="font-medium">Shipping details</h2>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="shippingAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shipping address
                </label>
                <input
                  id="shippingAddress"
                  type="text"
                  placeholder="Enter shipping address"
                  value={formData.shippingAddress}
                  onChange={(e) =>
                    handleInputChange("shippingAddress", e.target.value)
                  }
                  className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select country</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="usa">United States</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select state</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip code (optional)
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    placeholder="Enter zip code"
                    value={formData.zipCode}
                    onChange={(e) =>
                      handleInputChange("zipCode", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Billing Address section */}
            <div className="space-y-6">
              <h2 className="font-medium text-gray-900">Billing Address</h2>

              <div className="flex items-center gap-2">
                <input
                  id="sameAsShipping"
                  type="checkbox"
                  checked={formData.sameAsShipping}
                  onChange={(e) =>
                    handleInputChange("sameAsShipping", e.target.checked)
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="sameAsShipping"
                  className="text-sm text-gray-700"
                >
                  Same as shipping address
                </label>
              </div>

              {!formData.sameAsShipping && (
                <>
                  <div className="space-y-2">
                    <label
                      htmlFor="billingAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Billing address
                    </label>
                    <input
                      id="billingAddress"
                      type="text"
                      placeholder="Enter billing address"
                      value={formData.billingAddress}
                      onChange={(e) =>
                        handleInputChange("billingAddress", e.target.value)
                      }
                      className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="billingCountry"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <div className="relative">
                        <select
                          id="billingCountry"
                          value={formData.billingCountry}
                          onChange={(e) =>
                            handleInputChange("billingCountry", e.target.value)
                          }
                          className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select country</option>
                          <option value="nigeria">Nigeria</option>
                          <option value="usa">United States</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="billingState"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <div className="relative">
                        <select
                          id="billingState"
                          value={formData.billingState}
                          onChange={(e) =>
                            handleInputChange("billingState", e.target.value)
                          }
                          className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select state</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="billingCity"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        id="billingCity"
                        type="text"
                        placeholder="Enter city"
                        value={formData.billingCity}
                        onChange={(e) =>
                          handleInputChange("billingCity", e.target.value)
                        }
                        className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="billingZipCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Zip code (optional)
                      </label>
                      <input
                        id="billingZipCode"
                        type="text"
                        placeholder="Enter zip code"
                        value={formData.billingZipCode}
                        onChange={(e) =>
                          handleInputChange("billingZipCode", e.target.value)
                        }
                        className="w-full px-3 py-2 border bg-[#F6F8FA] border-[#ECEFF3] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </form>

          {/* Action buttons */}
          <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
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
              Proceed
            </button>
          </div>
        </div>

        <ConfirmModal
          isOpen={showConfirmModal}
          title="Confirm action"
          message="Are you sure you want to create this customer?"
          onConfirm={handleConfirmCustomer}
          onCancel={handleCancelConfirm}
        />

        <SuccessModal
          isOpen={showSuccessModal}
          title="Success"
          message="You have successfully created this customer."
          onDone={handleSuccessDone}
        />

        <ConfirmModal
          isOpen={showCancelConfirmModal}
          title="Confirm action"
          message="Are you sure you want to trash this customer?"
          onConfirm={handleConfirmCancel}
          onCancel={handleCancelCancelConfirm}
        />

        <SuccessModal
          isOpen={showCancelSuccessModal}
          title="Success"
          message="You have successfully trashed this customer."
          onDone={handleCancelSuccessDone}
        />
      </div>
    </div>
  );
};

export default CreateCustomer;