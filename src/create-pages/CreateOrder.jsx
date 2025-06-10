import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import ProductSelectionModal from "../Modal/ProductSelectionModal";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

const CreateOrder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customer: "",
    salesChannel: "",
    orderDate: "",
    paymentMethod: "",
    paymentStatus: "",
    additionalNotes: "",
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showCancelSuccessModal, setShowCancelSuccessModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [tempSelectedProducts, setTempSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=20"
      );
      const data = await response.json();
      const transformedProducts = data.map((item, index) => ({
        id: item.id,
        name: `Thread muse ${index + 1}`,
        price: 3200.0,
        image: `https://picsum.photos/60/60?random=${item.id}`,
        inStock:
          index === 4
            ? "Out of stock"
            : Math.random() > 0.5
            ? "Unlimited"
            : `${Math.floor(Math.random() * 20) + 1} in-stock`,
      }));
      setProducts(transformedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      const fallbackProducts = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Thread muse ${index + 1}`,
        price: 3200.0,
        image: `https://picsum.photos/60/60?random=${index + 1}`,
        inStock:
          index === 4
            ? "Out of stock"
            : Math.random() > 0.5
            ? "Unlimited"
            : `${Math.floor(Math.random() * 20) + 1} in-stock`,
      }));
      setProducts(fallbackProducts);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/60x60/8B4513/FFFFFF?text=TM`;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelectProduct = () => {
    setTempSelectedProducts([...selectedProducts]);
    setShowProductModal(true);
  };

  const handleProductSelection = (product) => {
    setTempSelectedProducts((prev) => {
      const isSelected = prev.find((p) => p.id === product.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleProductModalProceed = () => {
    setSelectedProducts(tempSelectedProducts);
    setShowProductModal(false);
    setSearchTerm("");
  };

  const handleProductModalCancel = () => {
    setTempSelectedProducts(selectedProducts);
    setShowProductModal(false);
    setSearchTerm("");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCancel = () => {
    const hasFormData = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    if (hasFormData) {
      setShowCancelConfirmModal(true);
    } else {
      navigate("/dashboard/orders");
    }
  };

  const handleProceed = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmOrder = () => {
    console.log("Order created successfully", {
      ...formData,
      selectedProducts,
    });
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/order-details", {
      state: {
        orderData: formData,
        selectedProducts: selectedProducts,
      },
    });
  };

  const handleConfirmCancel = () => {
    console.log("Order creation cancelled");
    setShowCancelConfirmModal(false);
    setShowCancelSuccessModal(true);
  };

  const handleCancelCancelConfirm = () => {
    setShowCancelConfirmModal(false);
  };

  const handleCancelSuccessDone = () => {
    setShowCancelSuccessModal(false);
    navigate("/dashboard/orders");
  };

  const isFormValid = () => {
    const requiredFields = [
      "customer",
      "salesChannel",
      "orderDate",
      "paymentMethod",
      "paymentStatus",
    ];
    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const isProceedDisabled = !isFormValid();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <Navbar />
        <div className="p-6">
          {/* Header */}
          <div className="mb-8 ">
            <button
              onClick={() => navigate("/dashboard/orders")}
              className="flex items-center gap-2 px-3 py-2 mb-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">
              Create an order
            </h1>
          </div>

          <div className="w-full border border-[#E3E0E0] p-6 rounded-lg bg-white">
            {/* Order Details Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-blue-600 text-lg font-medium mr-2">
                  ≫
                </span>
                <h2 className="text-lg font-medium text-blue-600">
                  Order details
                </h2>
              </div>

              <div className="space-y-6">
                {/* Customer */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer
                  </label>
                  <div className="relative">
                    <select
                      value={formData.customer}
                      onChange={(e) =>
                        handleInputChange("customer", e.target.value)
                      }
                      className="w-full px-4 py-3 border rounded-lg text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        backgroundColor: "#F6F8FA",
                        borderColor: "#DFE1E7",
                      }}
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
                    <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Sales Channel and Order Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sales channel
                    </label>
                    <div className="relative">
                      <select
                        value={formData.salesChannel}
                        onChange={(e) =>
                          handleInputChange("salesChannel", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-lg text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          backgroundColor: "#F6F8FA",
                          borderColor: "#DFE1E7",
                        }}
                      >
                        <option value="">Select sales channel</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order date
                    </label>
                    <input
                      type="date"
                      value={formData.orderDate}
                      onChange={(e) =>
                        handleInputChange("orderDate", e.target.value)
                      }
                      placeholder="Enter order date"
                      className="w-full px-4 py-3 border rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        backgroundColor: "#F6F8FA",
                        borderColor: "#DFE1E7",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-blue-600 text-lg font-medium mr-2">
                  ≫
                </span>
                <h2 className="text-lg font-medium text-blue-600">
                  Product details
                </h2>
              </div>

              <button
                onClick={handleSelectProduct}
                className="px-6 py-4 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors mb-4"
              >
                Select a product
              </button>

              {/* Selected Products Display */}
              {selectedProducts.length > 0 && (
                <div className="mt-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-3">
                      Selected Products:
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded border">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="w-12 p-3 text-left">
                              <input type="checkbox" className="w-4 h-4" />
                            </th>
                            <th className="text-left p-3 text-sm font-medium text-gray-700">
                              PRODUCT IMAGE
                            </th>
                            <th className="text-left p-3 text-sm font-medium text-gray-700">
                              PRODUCT NAME
                            </th>
                            <th className="text-left p-3 text-sm font-medium text-gray-700">
                              IN STOCK
                            </th>
                            <th className="text-left p-3 text-sm font-medium text-gray-700">
                              PRICE
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedProducts.map((product) => (
                            <tr
                              key={product.id}
                              className="border-b hover:bg-gray-50"
                            >
                              <td className="p-3">
                                <input
                                  type="checkbox"
                                  checked
                                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                              </td>
                              <td className="p-3">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-12 h-12 rounded border"
                                  onError={handleImageError}
                                />
                              </td>
                              <td className="p-3 text-gray-900">
                                {product.name}
                              </td>
                              <td className="p-3">
                                <span
                                  className={`px-2 py-1 rounded text-xs ${
                                    product.inStock === "Out of stock"
                                      ? "bg-red-100 text-red-800"
                                      : product.inStock === "Unlimited"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {product.inStock}
                                </span>
                              </td>
                              <td className="p-3 text-gray-900">
                                ₦{product.price.toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-blue-600 text-lg font-medium mr-2">
                  ≫
                </span>
                <h2 className="text-lg font-medium text-blue-600">Payment</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment method
                    </label>
                    <div className="relative">
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) =>
                          handleInputChange("paymentMethod", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-lg text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          backgroundColor: "#F6F8FA",
                          borderColor: "#DFE1E7",
                        }}
                      >
                        <option value="">Select payment method</option>
                        <option value="card">Credit Card</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="cash">Cash</option>
                      </select>
                      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment status
                    </label>
                    <div className="relative">
                      <select
                        value={formData.paymentStatus}
                        onChange={(e) =>
                          handleInputChange("paymentStatus", e.target.value)
                        }
                        className="w-full px-4 py-3 border rounded-lg text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          backgroundColor: "#F6F8FA",
                          borderColor: "#DFE1E7",
                        }}
                      >
                        <option value="">Select payment status</option>
                        <option value="paid">Paid</option>
                        <option value="unpaid">Unpaid</option>
                        <option value="pending">Pending</option>
                      </select>
                      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional notes(optional)
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) =>
                      handleInputChange("additionalNotes", e.target.value)
                    }
                    placeholder="Enter an additional note"
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      backgroundColor: "#F6F8FA",
                      borderColor: "#DFE1E7",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end space-x-4 pt-6">
              <button
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                disabled={isProceedDisabled}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  isProceedDisabled
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>

        {/* Product Selection Modal */}
        <ProductSelectionModal
          isOpen={showProductModal}
          products={products}
          tempSelectedProducts={tempSelectedProducts}
          searchTerm={searchTerm}
          loading={loading}
          onClose={handleProductModalCancel}
          onProductSelection={handleProductSelection}
          onSearchChange={setSearchTerm}
          onProceed={handleProductModalProceed}
          onImageError={handleImageError}
        />

        {/* Confirm Order Modal */}
        <ConfirmModal
          isOpen={showConfirmModal}
          title="Confirm action"
          message="Are you sure you want to create this order?"
          onConfirm={handleConfirmOrder}
          onCancel={handleCancelConfirm}
        />

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          title="Success"
          message="You have successfully created this order."
          onDone={handleSuccessDone}
        />

        {/* Cancel Confirm Modal */}
        <ConfirmModal
          isOpen={showCancelConfirmModal}
          title="Confirm action"
          message="Are you sure you want to trash this order?"
          onConfirm={handleConfirmCancel}
          onCancel={handleCancelCancelConfirm}
        />

        {/* Cancel Success Modal */}
        <SuccessModal
          isOpen={showCancelSuccessModal}
          title="Success"
          message="You have successfully trashed this order."
          onDone={handleCancelSuccessDone}
        />
      </div>
    </div>
  );
};

export default CreateOrder;
