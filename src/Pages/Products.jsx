import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  ArrowUp,
  ArrowDown,
  LucideWallet2,
  Box,
  ChevronUp,
  ChevronDown,
  Search,
  Calendar,
  Filter,
  MoreHorizontal,
  DollarSign,
  Users,
  ShoppingBag,
  MoreVertical,
  ColumnsIcon,
} from "lucide-react";
import { StatsCard } from "../components/StatsCard";

const bagIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.85 5H15.1C15.1 3.80653 14.6259 2.66193 13.782 1.81802C12.938 0.974106 11.7934 0.5 10.6 0.5C9.4065 0.5 8.26191 0.974106 7.418 1.81802C6.57408 2.66193 6.09998 3.80653 6.09998 5H2.34998C1.95215 5 1.57062 5.15804 1.28932 5.43934C1.00801 5.72064 0.849976 6.10218 0.849976 6.5V17.75C0.849976 18.1478 1.00801 18.5294 1.28932 18.8107C1.57062 19.092 1.95215 19.25 2.34998 19.25H18.85C19.2478 19.25 19.6293 19.092 19.9106 18.8107C20.1919 18.5294 20.35 18.1478 20.35 17.75V6.5C20.35 6.10218 20.1919 5.72064 19.9106 5.43934C19.6293 5.15804 19.2478 5 18.85 5ZM10.6 2C11.3956 2 12.1587 2.31607 12.7213 2.87868C13.2839 3.44129 13.6 4.20435 13.6 5H7.59998C7.59998 4.20435 7.91605 3.44129 8.47866 2.87868C9.04126 2.31607 9.80433 2 10.6 2ZM18.85 17.75H2.34998V6.5H6.09998V8C6.09998 8.19891 6.17899 8.38968 6.31965 8.53033C6.4603 8.67098 6.65106 8.75 6.84998 8.75C7.04889 8.75 7.23965 8.67098 7.38031 8.53033C7.52096 8.38968 7.59998 8.19891 7.59998 8V6.5H13.6V8C13.6 8.19891 13.679 8.38968 13.8196 8.53033C13.9603 8.67098 14.1511 8.75 14.35 8.75C14.5489 8.75 14.7397 8.67098 14.8803 8.53033C15.021 8.38968 15.1 8.19891 15.1 8V6.5H18.85V17.75Z"
      fill="white"
    />
  </svg>
);

const AvailabilityToggle = ({ status }) => {
  const [enabled, setEnabled] = useState(status === "In Stock");

  return (
    <>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
          enabled ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>

      <span
        className={`text-xs font-medium ${
          enabled ? "text-[#027A48]" : "text-[#B42318]"
        }`}
      >
        {enabled ? "Enabled" : "Disabled"}
      </span>
    </>
  );
};

const ProductsTable = () => {
  const [productData, setProductData] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      // .then((data) => console.log(data.products))
      .then((data) => setProductData(data.products));
  }, []);

  console.log(productData);
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left">
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              <div className="flex items-center gap-2">
                ACTION
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              <div className="flex items-center gap-2">
                PRODUCT IMAGE
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-2">
              <div className="flex items-center gap-2">
                PRODUCT NAME
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              IN STOCK
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                PRICE
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-2">
              <div className="flex items-center gap-2">
                STATUS
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productData &&
            productData.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <img src={productData.images} alt="" />
                </td>
                <td className="px-6 py-4 text-xs text-gray-900">
                  {product.title}
                </td>
                <td className="px-6 py-4 text-xs text-gray-900">
                  {product.stock === "unlimited"
                    ? "unlimited"
                    : `${product.stock} in-stock`}
                </td>
                <td className="px-6 py-4 text-xs text-gray-900">
                  ₦{product.price}
                </td>
                <td className="px-6 py-4 text-xs">
                  <AvailabilityToggle status={product.availabilityStatus} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const CategoriesTable = () => {
  return <h1>Categories</h1>;
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <Navbar />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
              <p className="text-sm text-gray-500">23 products</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 border border-blue-600 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <ArrowUp className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-600">Export CSV</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <span className="mr-2">+</span>
                {activeTab === "products" ? "Add a product" : "Add a category"}
              </button>
            </div>
          </div>
          {/* StatsCards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard
              icon={LucideWallet2}
              title="Total inventory value"
              value="₦90,200.00"
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#6E90C7]"
            />
            <StatsCard
              icon={Box}
              title="Products sold"
              value="4"
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#B867BA]"
            />
            <StatsCard
              icon={bagIcon}
              title="Out of stock"
              value="2"
              change={+45}
              period="vs 7 days ago"
              color="bg-[#4A8F5E]"
            />
          </div>

          <section className="p-4">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-4 space-x-4">
              <button
                onClick={() => setActiveTab("products")}
                className={`pb-2 text-sm font-medium ${
                  activeTab === "products"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("categories")}
                className={`pb-2 text-sm font-medium ${
                  activeTab === "categories"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500"
                }`}
              >
                Categories
              </button>
            </div>

            {/* Filter Box */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search for user name, ID etc.."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      <Calendar className="w-4 h-4 mr-2" />
                      Select Date
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab content */}
            {activeTab === "products" ? <ProductsTable /> : <CategoriesTable />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
