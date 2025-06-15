import React, { useState } from "react";
import Navbar from "../components/Navbar";
import arrows from "../assets/arrows.svg";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

function CreateDiscount() {
  const navigate = useNavigate();
  const [discountType, setDiscountType] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    discountName: "",
    amount: "",
    percentage: "",
    maxDiscount: "",
    products: "",
    startDate: "",
    endDate: "",
  });

  const handleConfirmDiscount = () => {
    console.log("Discount created successfully", {
      ...formData,
      // selectedProducts,
    });
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/discounts", {
      state: {
        discountData: formData,
      },
    });
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const handleProceed = () => {
    setShowConfirmModal(true);
  };

  const handleCancel = () => {
    const hasFormData = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    if (hasFormData) {
      setShowCancelConfirmModal(true);
    } else {
      navigate("/dashboard/discounts");
    }
  };

  function addDiscount(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Navbar />

      <div className="py-10 px-7 relative">
        <Link
          to="/dashboard/discounts"
          className="bg-white flex items-center content-center gap-2 text-[#344054] text-sm rounded-md  w-24 px-4 py-2 mb-4"
        >
          <ArrowLeft /> Back
        </Link>

        <h2 className="text-[#101828] font-semibold text-3xl">
          Create new discount
        </h2>

        <form
          onSubmit={addDiscount}
          className="w-full rounded-xl mx-auto pl-6 py-6  pr-20 mt-8 bg-white shadow-md"
        >
          <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mb-6">
            <img src={arrows} alt="" />
            Discount details
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discount name
            </label>
            <input
              type="text"
              name="discountName"
              value={formData.discountName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  discountName: e.target.value,
                }))
              }
              placeholder="Enter discount name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount type
              </label>
              <select
                name="discountType"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4] bg-[#f6f8fa]"
              >
                <option value="">Select discount type</option>
                <option value="fixed">Fixed discount</option>
                <option value="percentage">Percentage discount</option>
              </select>
            </div>

            {discountType === "fixed" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, amount: e.target.value }))
                  }
                  placeholder="Enter amount"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>
            )}

            {discountType === "percentage" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Percentage discount
                  </label>
                  <input
                    type="number"
                    name="percentage"
                    value={formData.percentage}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        percentage: e.target.value,
                      }))
                    }
                    placeholder="Enter percentage discount"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Max discount amount
                  </label>
                  <input
                    type="number"
                    name="maxDiscount"
                    value={formData.maxDiscount}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        maxDiscount: e.target.value,
                      }))
                    }
                    placeholder="Enter max discount amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                  />
                </div>
              </>
            )}
          </div>

          <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mt-8 mb-5">
            <img src={arrows} alt="" />
            Select products
          </h3>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Products
            </label>
            <select
              name="products"
              value={formData.products}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, products: e.target.value }))
              }
              className="w-full p-3 rounded-md border bg-gray-50"
            >
              <option value="">Select products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
            </select>
          </div>

          <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mt-8 mb-5">
            <img src={arrows} alt="" />
            Discount validity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm mb-1">Start date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    startDate: e.target.value,
                  }))
                }
                className="w-full p-3 rounded-md border bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">End date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, endDate: e.target.value }))
                }
                className="w-full p-3 rounded-md border bg-gray-50"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              type="button"
              className="px-6 py-2 rounded-md border border-gray-300 bg-white text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed}
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>

      <ConfirmModal
        isOpen={showConfirmModal}
        title="Confirm action"
        message="Are you sure you want to create a new discount?"
        onConfirm={handleConfirmDiscount}
        onCancel={handleCancelConfirm}
      />

      <SuccessModal
        isOpen={showSuccessModal}
        title="Success"
        message="You have successfully created a new discount."
        onDone={handleSuccessDone}
      />
    </div>
  );
}

export default CreateDiscount;
