import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, FileUpIcon } from "lucide-react";
// import arrows from "../assets/arrows.png";

const arrows = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.1571 13.2106L4.50006 18.8676L3.08606 17.4536L8.03606 12.5036L3.08606 7.55365L4.50006 6.13965L10.1571 11.7966C10.3445 11.9842 10.4498 12.2385 10.4498 12.5036C10.4498 12.7688 10.3445 13.0231 10.1571 13.2106Z"
      fill="#0A6DEE"
      fill-opacity="0.36"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.1571 13.2106L10.5001 18.8676L9.08606 17.4536L14.0361 12.5036L9.08606 7.55365L10.5001 6.13965L16.1571 11.7966C16.3445 11.9842 16.4498 12.2385 16.4498 12.5036C16.4498 12.7688 16.3445 13.0231 16.1571 13.2106Z"
      fill="#0A6DEE"
      fill-opacity="0.8"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.1571 13.2106L16.5001 18.8676L15.0861 17.4536L20.0361 12.5036L15.0861 7.55365L16.5001 6.13965L22.1571 11.7966C22.3445 11.9842 22.4498 12.2385 22.4498 12.5036C22.4498 12.7688 22.3445 13.0231 22.1571 13.2106Z"
      fill="#0A6DEE"
    />
  </svg>
);

const ImageUpload = () => {
  const fileInputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileClick = () => fileInputRef.current.click();

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    console.log("Dropped files:", files);
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
        onClick={handleFileClick}
        className="bg-[#ECEFF3] text-xs text-blue-900 font-medium py-3 px-5 rounded-full hover:bg-gray-200 transition"
      >
        Upload an image
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => console.log(e.target.files)}
        className="hidden"
        multiple
        accept="image/*"
      />
    </div>
  );
};

function CreateProduct() {
  return (
    <div>
      <Navbar />

      <div className="p-10">
        <Link
          to="/dashboard/products"
          className="bg-white flex items-center content-center gap-2 text-[#344054] text-sm rounded-md  w-24 px-4 py-2 mb-4"
        >
          <ArrowLeft /> Back
        </Link>

        <h2 className="text-[#101828] font-semibold text-3xl">Add a Product</h2>

        <div className="bg-white rounded-[10px] py-5 px-7 mt-10">
          <h3 className="text-[#0a6dee] flex items-center gap-2 mb-6">
            {arrows}
            Product image
          </h3>

          <ImageUpload />

          <h3 className="text-[#0a6dee] flex items-center gap-2 mb-6">
            {arrows}
            Product Details
          </h3>

          <fieldset>
            <label htmlFor="category">Category</label>

            <div className="relative inline-block w-full">
              <select
                name="category"
                id="category"
                className="w-full bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              >
                <option value="">Select a category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
                <option value="">Category 4</option>
                <option value="">Category 5</option>
              </select>

              <ChevronDown className="absolute inset-y-0 top-7 right-4 pointer-events-none" />
            </div>
          </fieldset>

          <div className="flex mt-5 justify-between">
            <div className="flex flex-col w-6/12 mr-3 gap-0">
              <label htmlFor="product-name" className="-mb-2">
                Product name
              </label>

              <input
                type="text"
                name="product-name"
                id="product-name"
                placeholder="Enter product name"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              />
            </div>

            <div className="flex flex-col w-6/12">
              <label htmlFor="pricing" className="-mb-2">
                Pricing
              </label>

              <input
                type="text"
                name="pricing"
                id="pricing"
                placeholder="Enter amount"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              />
            </div>
          </div>

          <div className="flex mt-5 justify-between">
            <div className="flex flex-col mr-3 w-6/12">
              <label htmlFor="discount-price" className="-mb-2">
                Discounted price(optional)
              </label>

              <input
                type="text"
                name="discount-price"
                id="discount-price"
                placeholder="Enter discounted amount"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              />
            </div>

            <div className="flex flex-col w-6/12">
              <label htmlFor="cost-price" className="-mb-2">
                Cost price
              </label>

              <input
                type="text"
                name="cost-price"
                id="cost-price"
                placeholder="Enter cost price"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="description">Product description</label>

            <textarea name="description" id="description">
              Enter product description
            </textarea>
          </div>

          <fieldset>
            <label htmlFor="stock-quantity">Stock quantity</label>

            <input
              type="text"
              name="stock-quantity"
              id="stock-quantity"
              placeholder="Enter stock quantity"
            />

            <p>Is the stock quantity limited?</p>

            <div>
              <input type="radio" name="yes" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>

            <div>
              <input type="radio" name="no" id="no" />
              <label htmlFor="no">No</label>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <label htmlFor="max-limit">Maximum order limit(optional)</label>

              <input
                type="text"
                name="max-limit"
                id="max-limit"
                placeholder="Enter maximum order limit"
                className="bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="min-limit">Minimum order limit(optional)</label>

              <input
                type="text"
                name="min-limit"
                id="min-limit"
                placeholder="Enter minimum order limit"
                className="bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-3 text-[#B5B4B4]"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
