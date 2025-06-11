import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  ArrowUp,
  LucideWallet2,
  Box,
  Search,
  MoreVertical,
  ListFilter,
  ArrowDownIcon,
  Check,
} from "lucide-react";
import { StatsCard } from "../components/StatsCard";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import Pagination from "../components/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import More from "../Modal/More";

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
      <div className="flex gap-3.5">
        <span
          className={`text-xs font-medium ${
            enabled ? "text-[#027A48]" : "text-[#B42318]"
          }`}
        >
          {enabled ? "Enabled" : "Disabled"}
        </span>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`w-7 h-3.5 flex items-center rounded-full p-1 transition-colors duration-300 ${
            enabled ? "bg-[#169D07]/50" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5  rounded-full shadow-md transform transition-transform duration-300 ${
              enabled ? "translate-x-4" : "-translate-x-3"
            } ${enabled ? "bg-[#169D07]" : "bg-white"}`}
          />
        </button>
      </div>
    </>
  );
};

const ProductsTable = ({
  currentProducts,
  showMore,
  setShowMore,
  openDropdownIndex,
  setOpenDropdownIndex,
}) => {
  return (
    <div className="overflow-x-auto relative inline-block">
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
          {currentProducts ? (
            currentProducts.map((product, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative inline-block">
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() =>
                          setOpenDropdownIndex(
                            openDropdownIndex === index ? null : index
                          )
                        }
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {openDropdownIndex === index && (
                        <More
                          destinations={[
                            "/dashboard/product-details",
                            "/dashboard/edit-product",
                          ]}
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={product.images[0]}
                      alt="Product Image"
                      className="w-12"
                    />
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
              );
            })
          ) : (
            <h2>
              You don't have any products yet. Click creeate a product to get
              started.
            </h2>
          )}
        </tbody>
      </table>
    </div>
  );
};

const CategoriesTable = ({ currentProducts }) => {
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

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-2">
              <div className="flex items-center gap-2">
                CATEGORY NAME
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                DESCRIPTION
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-2">
              <div className="flex items-center gap-2">
                PRODUCTS
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentProducts &&
            currentProducts.map((product, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => setShowMore(!showMore)}
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>

                  <td className="px-6 py-4 text-xs text-gray-900">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-900">
                    {product.title}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-900">
                    {product.stock}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const dateSelection = useDateSelection();

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  // const [categories, setCategories] = useState([]);
  const [tempCategoryFilter, setTempCategoryFilter] = useState([]);
  const [appliedCategoryFilter, setAppliedCategoryFilter] = useState([]);

  const categoryFilter = searchParams.get("category");

  const handleCategorySelect = (category) => {
    if (category === "all") {
      setTempCategoryFilter([]);
      return;
    }
    if (tempCategoryFilter.includes(category)) {
      setTempCategoryFilter((prev) => prev.filter((item) => item !== category));
    } else {
      setTempCategoryFilter((prev) => [...prev, category]);
    }
  };

  const applyFilters = () => {
    setAppliedCategoryFilter([...tempCategoryFilter]);
    setSearchParams({ categories: tempCategoryFilter.join(",") });
  };

  const resetFilters = () => {
    setTempCategoryFilter([]);
    setAppliedCategoryFilter([]);
    setSearchParams("");
  };

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products?limit=100&skip=10&select=images,title,price,stock,availabilityStatus,category"
    )
      .then((res) => res.json())
      // .then((data) => console.log(data.products))
      .then((data) => setProductData(data.products));
  }, []);

  const categories = [
    "All",
    "Furniture",
    "Groceries",
    "Home-decoration",
    "Kitchen-accessories",
    "Laptops",
  ];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage]);

  const filteredProducts = appliedCategoryFilter.length
    ? productData.filter((product) =>
        appliedCategoryFilter.includes(product.category)
      )
    : productData;

  const displayedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProduct = currentPage * entriesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - entriesPerPage;
  const currentProducts = displayedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(displayedProducts.length / entriesPerPage);

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
              <Link
                to={
                  activeTab === "products"
                    ? "/dashboard/create-product"
                    : "/dashboard/create-category"
                }
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                <span className="mr-2">+</span>
                {activeTab === "products" ? "Add a product" : "Add a category"}
              </Link>
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
          </section>

          {/* Filter Box */}
          <div className="bg-white rounded-lg border border-gray-200 ">
            <div className="p-4 border-b border-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085]" />
                    <input
                      type="text"
                      placeholder="Search for user name, ID etc.."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 text-[]"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative inline-block">
                  <div className="flex items-center space-x-3 ">
                    <button
                      onClick={() => setShowFilter(!showFilter)}
                      className="flex items-center  px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <ListFilter className="w-4 h-4 mr-2" />
                      Filter
                    </button>
                    <DateSelector {...dateSelection} />
                  </div>

                  {activeTab === "categories"
                    ? showFilter && (
                        <div className="bg-slate-100 flex text-left text-sm flex-col absolute z-50 top-10 pb-4  w-[95%] rounded-md">
                          <div className="flex items-center mt-2 mb-5 pl-4">
                            <ListFilter className="w-4 h-4 mr-2" />
                            <p>Filter</p>
                          </div>

                          <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                            <ArrowDownIcon className="w-5" />
                            By category name
                          </p>

                          <div className="flex flex-col items-start w-full">
                            {categories.slice(0, 7).map((category) => {
                              const isSelected = tempCategoryFilter.includes(
                                category.toLowerCase()
                              );

                              return (
                                <button
                                  key={category}
                                  onClick={() => {
                                    // setSelectedFilter(category.toLowerCase());
                                    handleCategorySelect(
                                      category.toLowerCase()
                                    );
                                  }}
                                  className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center"
                                >
                                  {category}
                                  {isSelected && (
                                    <Check className="w-4 h-4 text-green-600" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          <div className="mt-3 px-2">
                            <button
                              onClick={resetFilters}
                              className="px-5 py-2 mr-5 bg-white border text-sm border-[#ECEFF3] rounded-md"
                            >
                              Reset All
                            </button>
                            <button
                              onClick={applyFilters}
                              className="bg-[#0A6DEE] px-5 py-2 text-white text-sm rounded-md"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      )
                    : activeTab === "products"
                    ? showFilter && (
                        <div className="bg-slate-100  flex gap-5 text-sm flex-col absolute z-50 top-10 pb-4  w-[95%] rounded-md">
                          <div className="flex items-center mt-2 mb-5 pl-4">
                            <ListFilter className="w-4 h-4 mr-2" />
                            <p>Filter</p>
                          </div>

                          <div className="flex flex-col items-start w-full">
                            <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                              <ArrowDownIcon className="w-5" />
                              By stock
                            </p>
                            <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                              All
                            </button>
                            <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                              Limited{" "}
                              {/* {isSelected && (
                                <Check className="w-4 h-4 text-green-600" />
                              )} */}
                            </button>
                            <button className=" border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                              Unlimited
                            </button>
                          </div>

                          <div>
                            <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                              <ArrowDownIcon className="w-5" />
                              By status
                            </p>
                            <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                              All
                            </button>
                            <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                              Enabled
                            </button>
                            <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                              Disabled
                            </button>
                          </div>

                          <div className="mt-3 px-2">
                            <button
                              onClick={resetFilters}
                              className="px-5 py-2 mr-5 bg-white border text-sm border-[#ECEFF3] rounded-md"
                            >
                              Reset All
                            </button>
                            <button
                              onClick={applyFilters}
                              className="bg-[#0A6DEE] px-5 py-2 text-white text-sm rounded-md"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      )
                    : null}
                </div>
              </div>
            </div>

            {/* Tab content */}
            {activeTab === "products" ? (
              <ProductsTable
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                productData={productData}
                currentProducts={currentProducts}
                showMore={showMore}
                setShowMore={setShowMore}
                openDropdownIndex={openDropdownIndex}
                setOpenDropdownIndex={setOpenDropdownIndex}
              />
            ) : (
              <CategoriesTable
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                // productData={productData}
                // products={productData}
                currentProducts={currentProducts}
                showMore={showMore}
                setShowMore={setShowMore}
                categoryFilter={categoryFilter}
                openDropdownIndex={openDropdownIndex}
                setOpenDropdownIndex={setOpenDropdownIndex}
              />
            )}

            {/* Pagination */}
            {productData && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                entriesPerPage={entriesPerPage}
                setEntriesPerPage={setEntriesPerPage}
                indexOfFirstProduct={indexOfFirstProduct}
                indexOfLastProduct={indexOfLastProduct}
                totalEntries={displayedProducts.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
