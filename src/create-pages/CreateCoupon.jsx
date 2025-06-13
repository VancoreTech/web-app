import { useEffect, useState } from "react";
import {
  Calendar,
  ChevronDown,
  ShoppingCart,
  Package,
  ArrowLeft,
  X,
} from "lucide-react";
import arrows from "../assets/arrows.svg";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

function CreateCoupon() {
  const [couponType, setCouponType] = useState("cart");
  const [discountType, setDiscountType] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const [showProductModal, setShowProductModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [tempSelectedProducts, setTempSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelSuccessModal, setShowCancelSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: "",
    code: "",
    amount: "",
    minCartValue: "",
    usagePerCustomer: "",
    maxUsage: "",
    startDate: "",
    endDate: "",
    products: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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

  const handleProductDeletion = (product) => {
    setTempSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const confirmProductSelection = () => {
    setSelectedProducts(tempSelectedProducts);
    setSelectedOption(
      tempSelectedProducts.length > 0
        ? `${tempSelectedProducts.length} product(s) selected`
        : null
    );
    setShowProductModal(false);
  };

  const cancelProductSelection = () => {
    setTempSelectedProducts(selectedProducts);
    setShowProductModal(false);
  };

  const handleProceed = () => {
    setShowConfirmModal(true);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/discounts", {
      state: {
        couponData: formData,
        selectedProducts: selectedProducts,
      },
    });
  };

  const handleConfirmCoupon = () => {
    console.log("Coupon created successfully", {
      ...formData,
      selectedProducts,
    });
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
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

  return (
    <div>
      <Navbar />

      <div className="py-10 px-7 relative">
        <Link
          to="/dashboard/products"
          className="bg-white flex items-center content-center gap-2 text-[#344054] text-sm rounded-md  w-24 px-4 py-2 mb-4"
        >
          <ArrowLeft /> Back
        </Link>

        <h2 className="text-[#101828] font-semibold text-3xl">
          Create new coupon
        </h2>

        <form className="w-full rounded-xl mx-auto p-6 mt-8 bg-white shadow-md">
          <div className="mb-8">
            <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mb-6">
              <img src={arrows} alt="" />
              Coupon Details
            </h3>

            <div className="mb-6 mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Coupon type
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCouponType("cart")}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    couponType === "cart"
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 border-gray-300 text-gray-600"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart coupon
                  <div
                    className={`w-4 h-4 rounded-full border-2 ml-2 ${
                      couponType === "cart"
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {couponType === "cart" && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCouponType("product")}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    couponType === "product"
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 border-gray-300 text-gray-600"
                  }`}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Product coupon
                  <div
                    className={`w-4 h-4 rounded-full border-2 ml-2 ${
                      couponType === "product"
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {couponType === "product" && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <span className="w-4 h-4 rounded-full border border-blue-300 bg-blue-50 mr-2 flex items-center justify-center">
                  <span className="text-blue-600 text-xs">i</span>
                </span>
                This coupon will be applied to the{" "}
                {couponType === "cart" ? "cart entirely" : "product"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon description
                </label>
                <input
                  type="text"
                  placeholder="Enter coupon description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon code
                </label>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={formData.code}
                  onChange={(e) => handleInputChange("code", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Discount type
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setDiscountType("fixed")}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    discountType === "fixed"
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 border-gray-300 text-gray-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-2 ${
                      discountType === "fixed"
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {discountType === "fixed" && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  Fixed discount
                </button>

                <button
                  type="button"
                  onClick={() => setDiscountType("percentage")}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    discountType === "percentage"
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 border-gray-300 text-gray-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-2 ${
                      discountType === "percentage"
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {discountType === "percentage" && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  Percentage discount
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={(e) => handleInputChange("amount", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum cart value (optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={formData.minCartValue}
                  onChange={(e) =>
                    handleInputChange("minCartValue", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No of usage per customer
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={formData.usagePerCustomer}
                  onChange={(e) =>
                    handleInputChange("usagePerCustomer", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum coupon usage (optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={formData.maxUsage}
                  onChange={(e) =>
                    handleInputChange("maxUsage", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#B5B4B4]"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mb-6">
              <img src={arrows} alt="" />
              Select Products
            </h3>

            <div>
              <label htmlFor="selectedProducts" className="">
                Products
              </label>

              <div
                className="w-full border border-input bg-[#ECEFF3] rounded-md px-4 py-2.5 pr-4 shadow-sm flex mt-1 items-center justify-between cursor-pointer text-[#B5B4B4]"
                onClick={() => setShowProductModal(true)}
              >
                <span className="text-[#B5B4B4]">
                  {selectedOption || "Select a product"}
                </span>
                <ChevronDown />
              </div>
            </div>

            {tempSelectedProducts.length > 0 && (
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
                        {tempSelectedProducts.map((product) => (
                          <tr
                            key={product.id}
                            className="border-b hover:bg-gray-50"
                          >
                            <td className="p-3">
                              <input
                                type="checkbox"
                                checked
                                onChange={() => handleProductDeletion(product)}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              />
                            </td>
                            <td className="p-3">
                              <img
                                src={product.image || product.images?.[0]}
                                alt={product.name || product.title}
                                className="w-12 h-12 rounded border"
                              />
                            </td>
                            <td className="p-3 text-gray-900">
                              {product.name || product.title}
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
                                {product.inStock
                                  ? product.inStock
                                  : product.stock + " in stock"}{" "}
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

          {showProductModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto m-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Select Products
                  </h3>
                  <button
                    onClick={cancelProductSelection}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border rounded">
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
                      {products.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="p-3">
                            <input
                              type="checkbox"
                              checked={tempSelectedProducts.some(
                                (p) => p.id === product.id
                              )}
                              onChange={() => handleProductSelection(product)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                          </td>
                          <td className="p-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded border"
                            />
                          </td>
                          <td className="p-3 text-gray-900">{product.name}</td>
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

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={cancelProductSelection}
                    className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmProductSelection}
                    className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mb-6">
              <img src={arrows} alt="" />
              Discount Validity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select start date"
                    value={formData.startDate}
                    onChange={(e) =>
                      handleInputChange("startDate", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 placeholder:text-[#B5B4B4]"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select end date"
                    value={formData.endDate}
                    onChange={(e) =>
                      handleInputChange("endDate", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 placeholder:text-[#B5B4B4]"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-10 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleProceed}
              className="px-10 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>

      <ConfirmModal
        isOpen={showConfirmModal}
        title="Confirm action"
        message="Are you sure you want to create a new coupon?"
        onConfirm={handleConfirmCoupon}
        onCancel={handleCancelConfirm}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        title="Success"
        message="You have successfully created a new coupon."
        onDone={handleSuccessDone}
      />

      <ConfirmModal
        isOpen={showCancelConfirmModal}
        title="Confirm action"
        message="Are you sure you want to trash this coupon?"
        onConfirm={handleConfirmCancel}
        onCancel={handleCancelCancelConfirm}
      />

      <SuccessModal
        isOpen={showCancelSuccessModal}
        title="Success"
        message="You have successfully trashed this coupon."
        onDone={handleCancelSuccessDone}
      />
    </div>
  );
}

export default CreateCoupon;
