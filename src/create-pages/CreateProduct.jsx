import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  Delete,
  DeleteIcon,
  FileUpIcon,
  LucideDelete,
  XIcon,
} from "lucide-react";
import arrows from "../assets/arrows.svg";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

const ImageUpload = ({ images, setImages }) => {
  const fileInputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileClick = () => fileInputRef.current.click();

  const isDuplicate = (file, images) =>
    images.some(
      (img) =>
        img.name === file.name &&
        img.size === file.size &&
        img.lastModified === file.lastModified
    );

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    const uniqueFiles = files.filter((file) => !isDuplicate(file, images));
    setImages((prev) => [...prev, ...uniqueFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`border border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center bg-[#FAFAFA] space-y-4 transition mb-12 ${
        isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="flex flex-col items-center space-y-2">
        <FileUpIcon className="h-8 w-8 text-blue-900" />

        <p className="text-sm text-gray-700">
          Drag and drop or choose file to upload
        </p>
        <p className="text-xs text-gray-500">Minimum of 3 images</p>
      </div>

      <button
        type="button"
        onClick={handleFileClick}
        className="bg-[#ECEFF3] text-xs text-blue-900 font-medium py-3 px-5 rounded-full hover:bg-gray-200 transition"
      >
        Upload an image
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          const files = Array.from(e.target.files);
          setImages((prev) => [...prev, ...files]);
        }}
        className="hidden"
        multiple
        accept="image/*"
      />

      {images && (
        <div className="flex flex-wrap items-center gap-2 ">
          {images.map((img, index) => (
            <div key={index} className="relative inline-block">
              <img
                src={URL.createObjectURL(img)}
                alt={`upload-${index}`}
                className="w-20 h-20 border-2 object-cover rounded-lg "
              />

              <XIcon
                className="cursor-pointer absolute top-0 right-0"
                onClick={() => {
                  setImages((prev) => prev.filter((_, i) => i !== index));
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function CreateProduct() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showCancelSuccessModal, setShowCancelSuccessModal] = useState(false);
  const [images, setImages] = useState([]);

  function getImage(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    pricing: "",
    costPrice: "",
    description: "",
    stockQuantity: "",
  });

  const requiredFields = [
    "category",
    "productName",
    "pricing",
    "costPrice",
    "description",
    "stockQuantity",
  ];

  function addProduct(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const product = {
      category: data.get("category"),
      productName: data.get("product-name"),
      pricing: data.get("pricing"),
      discountPrice: data.get("discount-price"),
      costPrice: data.get("cost-price"),
      description: data.get("description"),
      stockQty: data.get("stock-quantity"),
      stockLimited: data.get("stock-limited"),
      maxLimit: data.get("max-limit"),
      minLimit: data.get("min-limit"),
    };

    const fieldsAreFilled = requiredFields.every(
      (field) => product[field]?.trim() !== ""
    );

    const hasEnoughImages = images.length >= 3;

    if (!fieldsAreFilled || !hasEnoughImages) {
      alert(
        "Please fill out all required fields and upload at least 3 images."
      );
      return;
    }

    setFormData(product);
    setShowConfirmModal(true);
  }

  const isDisabled =
    images.length < 3 || requiredFields.some((key) => !formData[key]?.trim());

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

  const handleConfirmProduct = () => {
    console.log("Product created successfully", {
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
    navigate("/dashboard/product-details", {
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

      <div className="p-10 relative">
        <Link
          to="/dashboard/products"
          className="bg-white flex items-center content-center gap-2 text-[#344054] text-sm rounded-md  w-24 px-4 py-2 mb-4"
        >
          <ArrowLeft /> Back
        </Link>

        <h2 className="text-[#101828] font-semibold text-3xl">Add a Product</h2>

        <form
          onSubmit={addProduct}
          className="bg-white rounded-[10px] py-5 pl-8 pr-16 mt-10 "
        >
          <h3 className="text-[#0a6dee] flex items-center gap-2 mb-6">
            <img src={arrows} alt="" />
            Product image
          </h3>

          <ImageUpload images={images} setImages={setImages} />

          <h3 className="text-[#0a6dee] flex items-center gap-2 mb-6">
            <img src={arrows} alt="" />
            Product Details
          </h3>

          <fieldset>
            <label htmlFor="category">Category</label>

            <div className="relative inline-block w-full">
              <select
                name="category"
                id="category"
                value={formData.category}
                className="w-full bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
              >
                <option value="">Select a category</option>
                <option value="one">Category 1</option>
                <option value="two">Category 2</option>
                <option value="three">Category 3</option>
                <option value="four">Category 4</option>
                <option value="five">Category 5</option>
              </select>

              <ChevronDown className="absolute inset-y-0 top-5 right-4 pointer-events-none" />
            </div>
          </fieldset>

          <div className="flex mt-5 justify-between">
            <div className="flex flex-col w-6/12 mr-3 gap-0">
              <label htmlFor="product-name">Product name</label>

              <input
                type="text"
                name="product-name"
                value={formData.productName}
                id="product-name"
                placeholder="Enter product name"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4] "
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    productName: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex flex-col w-6/12 ml-4">
              <label htmlFor="pricing">Pricing</label>

              <input
                type="text"
                name="pricing"
                value={formData.pricing}
                id="pricing"
                placeholder="Enter amount"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, pricing: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex mt-5 mb-5 justify-between">
            <div className="flex flex-col mr-3 w-6/12">
              <label htmlFor="discount-price">Discounted price(optional)</label>

              <input
                type="text"
                name="discount-price"
                id="discount-price"
                value={formData.discountPrice}
                placeholder="Enter discounted amount"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] mt-1 rounded-lg placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    discountPrice: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex flex-col w-1/2 ml-4">
              <label htmlFor="cost-price">Cost price</label>

              <input
                type="text"
                name="cost-price"
                id="cost-price"
                value={formData.costPrice}
                placeholder="Enter cost price"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] mt-1 rounded-lg  placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    costPrice: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="w-full mb-5">
            <label htmlFor="description">Product description</label>

            <textarea
              name="description"
              id="description"
              value={formData.description}
              className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2 w-full
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
              placeholder="Enter product description"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col w-1/2">
              <label htmlFor="stock-quantity">Stock quantity</label>

              <input
                type="text"
                name="stock-quantity"
                id="stock-quantity"
                value={formData.stockQuantity}
                placeholder="Enter stock quantity"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] mt-1 rounded-lg mr-3 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    stockQuantity: e.target.value,
                  }))
                }
              />
            </div>

            <div className="w-1/2 ml-5">
              <p>Is the stock quantity limited?</p>
              <div className="flex justify-between gap-3">
                <div
                  className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2 w-1/2
                  border-[#EBEBEB] mt-1 rounded-lg placeholder:text-[#B5B4B4]"
                >
                  <input
                    type="radio"
                    name="stockLimited"
                    id="yes"
                    value="yes"
                    className="mr-1 accent-[#0A6DEE]"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>

                <div
                  className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2 w-1/2
                  border-[#EBEBEB] mt-1 rounded-lg  placeholder:text-[#B5B4B4]"
                >
                  <input
                    type="radio"
                    name="stockLimited"
                    id="no"
                    value="no"
                    className="mr-1"
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-5 mb-5 justify-between">
            <div className="flex flex-col w-[48%] mr-">
              <label htmlFor="max-limit">Maximum order limit(optional)</label>

              <input
                type="text"
                name="max-limit"
                id="max-limit"
                value={formData.maxLimit}
                placeholder="Enter maximum order limit"
                className="bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, maxLimit: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col w-[49%]">
              <label htmlFor="min-limit">Minimum order limit(optional)</label>

              <input
                type="text"
                name="min-limit"
                id="min-limit"
                value={formData.minLimit}
                placeholder="Enter minimum order limit"
                className="bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, minLimit: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end py-2 gap-5">
            <button
              className="bg-white text-black px-12 py-2 text-sm font-semibold rounded-lg border border-[#ECEFF3]"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => setShowConfirmModal(!showConfirmModal)}
              disabled={isDisabled}
              className="bg-[#0A6DEE] text-white px-12 py-2 text-sm font-semibold rounded-lg"
            >
              Proceed
            </button>
          </div>

          {/* Confirm Modal */}
          <ConfirmModal
            isOpen={showConfirmModal}
            title="Confirm action"
            message="Are you sure you want to create this product?"
            onConfirm={handleConfirmProduct}
            onCancel={handleCancelConfirm}
          />

          {/* Success Modal */}
          <SuccessModal
            isOpen={showSuccessModal}
            title="Success"
            message="You have successfully created this product."
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
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
