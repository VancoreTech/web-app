import React, { useState, useEffect } from "react";
import arrows from "../assets/arrows.svg";
import Navbar from "../components/Navbar";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";
import ProductSelectionModal from "../Modal/ProductSelectionModal";
import { useNavigate } from "react-router-dom";

function EditCategory() {
  const navigate = useNavigate();

  const [showProductModal, setShowProductModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showCancelSuccessModal, setShowCancelSuccessModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [tempSelectedProducts, setTempSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    selectedProducts: selectedProducts,
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      // .then((data) => console.log(data.products))
      .then((data) => setProducts(data.products));
    setLoading(false);
  }, []);

  function addCategory(e) {
    e.preventDefault();
  }

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

  const handleCancel = () => {
    const hasFormData = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    if (hasFormData) {
      setShowCancelConfirmModal(true);
    } else {
      navigate("/dashboard/products");
    }
  };

  const handleConfirm = () => {
    console.log("Category created successfully", {
      ...formData,
    });
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/category-details", {
      state: {
        productData: formData,
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
    navigate("/dashboard/products");
  };
  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 relative ">
        <Link
          to="/dashboard/products"
          //   relative="path"
          className="bg-white flex items-center content-center gap-2 text-[#344054] text-sm rounded-md w-24 px-4 py-2 mb-4"
        >
          <ArrowLeft /> Back
        </Link>

        <h2 className="text-[#101828] font-semibold text-3xl">Edit Category</h2>

        <form
          action=""
          onSubmit={addCategory}
          className="bg-white rounded-[10px] pt-5 pb-10 pl-8 pr-28 mt-10 "
        >
          <h3 className="text-[#0a6dee] flex items-center gap-2 mb-6">
            <img src={arrows} alt="" />
            Category Details
          </h3>

          <div className="flex flex-col mr-3 mb-5">
            <label htmlFor="category-name">Category name</label>

            <input
              type="text"
              name="category-name"
              value={formData.categoryName}
              id="category-name"
              placeholder="Enter category name"
              className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  categoryName: e.target.value,
                }))
              }
            />
          </div>

          <div className=" mb-5">
            <label htmlFor="description">Category description</label>

            <textarea
              name="description"
              id="description"
              value={formData.description}
              className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2 w-full
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
              placeholder="Enter category description"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label htmlFor="selectedProducts" className="">
              Product
            </label>

            <div
              className="w-full border border-input bg-[#ECEFF3] rounded-md px-4 py-2.5 pr-4 shadow-sm flex mt-1 items-center justify-between cursor-pointer text-[#B5B4B4]"
              onClick={() => setShowProductModal(true)}
            >
              <span className="text-[#B5B4B4]">
                {selectedOption || "Select a product"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
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
                              src={product.image || product.images[0]}
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

          <div className="flex justify-end pt-10 pb-2 gap-5">
            <button
              className="bg-white text-black px-12 py-2 text-sm font-semibold rounded-lg border border-[#ECEFF3]"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => setShowConfirmModal(!showConfirmModal)}
              // disabled={isDisabled}
              className="bg-[#0A6DEE] text-white px-12 py-2 text-sm font-semibold rounded-lg"
            >
              Save changes
            </button>
          </div>
        </form>

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
          // onImageError={handleImageError}
        />

        {/* Confirm Modal */}
        <ConfirmModal
          isOpen={showConfirmModal}
          title="Confirm action"
          message="Are you sure you want to create this category?"
          onConfirm={handleConfirm}
          onCancel={handleCancelConfirm}
        />

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          title="Success"
          message="You have successfully created this category."
          onDone={handleSuccessDone}
        />

        {/* Cancel Confirm Modal */}
        <ConfirmModal
          isOpen={showCancelConfirmModal}
          title="Confirm action"
          message="Are you sure you want to trash this product?"
          onConfirm={handleConfirmCancel}
          onCancel={handleCancelCancelConfirm}
        />

        {/* Cancel Success Modal */}
        <SuccessModal
          isOpen={showCancelSuccessModal}
          title="Success"
          message="You have successfully trashed this product."
          onDone={handleCancelSuccessDone}
        />
      </div>
    </div>
  );
}

export default EditCategory;
