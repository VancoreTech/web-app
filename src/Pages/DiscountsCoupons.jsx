import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import {
  ArrowUp,
  Search,
  MoreVertical,
  ListFilter,
  ArrowDownIcon,
  Check,
} from "lucide-react";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import Pagination from "../components/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import More, { MorewButtons } from "../Modal/More";
import { discountsData, couponsData } from "../data/data";

// Coupons Table Data

const DiscountsTable = ({
  openDropdownIndex,
  setOpenDropdownIndex,
  dropDownRef,
}) => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full ">
        <thead className="bg-gray-50 uppercase">
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
                Date created
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-2">
              <div className="flex items-center gap-2">
                Description
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              Discount Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                Discounts
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                Products
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
        <tbody className="bg-white divide-y text-xs divide-gray-200">
          {discountsData ? (
            discountsData.map((discount, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className="relative inline-block"
                      ref={openDropdownIndex === index ? dropDownRef : null}
                    >
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
                        <MorewButtons
                          actions={["View details", "Deactivate", "Trash"]}
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 ">{discount.dateCreated}</td>
                  <td className="px-6 py-4 text-gray-900">
                    {discount.description}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {discount.discountType}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {discount.discounts}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {discount.products}
                  </td>

                  <td className="px-6 py-4 text-gray-900">
                    <span
                      className={` py-2 px-4 rounded-2xl ${
                        discount.status === "Active"
                          ? "bg-[#ECFDF3] text-[#027A48]"
                          : "bg-[#FEF3F2] text-[#B42318]"
                      }`}
                    >
                      {discount.status}
                    </span>
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

const CouponsTable = ({
  openDropdownIndex,
  setOpenDropdownIndex,
  dropDownRef,
  filter,
  setFilter,
}) => {
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
                Date created
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              Coupon Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-2">
              <div className="flex items-center gap-2">
                Description
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                  <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                </svg>
              </div>
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                Coupon code
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
        <tbody className="bg-white divide-y text-xs divide-gray-200">
          {couponsData &&
            couponsData.map((coupon, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className="relative inline-block"
                      ref={openDropdownIndex === index ? dropDownRef : null}
                    >
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
                        <MorewButtons
                          actions={["View Details", "Deactivate", "Trash"]}
                        />
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4">{coupon.dateCreated}</td>

                  <td className="px-6 py-4 text-xs text-gray-900">
                    {coupon.couponType}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-900">
                    {coupon.description}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-900">
                    {coupon.couponCode}
                  </td>

                  <td className="px-6 py-4 text-xs text-gray-900">
                    <span
                      className={` py-2 px-4 rounded-2xl ${
                        coupon.status === "Active"
                          ? "bg-[#ECFDF3] text-[#027A48]"
                          : "bg-[#FEF3F2] text-[#B42318]"
                      }`}
                    >
                      {coupon.status}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

function DiscountsCoupons() {
  const [activeTab, setActiveTab] = useState("discounts");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const dateSelection = useDateSelection();

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropDownRef = useRef(null);
  const [filter, setFilter] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [tempCategoryFilter, setTempCategoryFilter] = useState([]);
  const [appliedCategoryFilter, setAppliedCategoryFilter] = useState([]);

  const categoryFilter = searchParams.get("category");

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
    <div className="flex h-screen  overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <Navbar />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Discount & Coupons
              </h1>
              <p className="text-sm text-gray-500">23 products</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to={
                  activeTab === "discounts"
                    ? "/dashboard/create-discount"
                    : "/dashboard/create-coupon"
                }
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                <span className="mr-2">+</span>
                {activeTab === "discounts"
                  ? "Create new discount"
                  : "Create new coupon"}
              </Link>
            </div>
          </div>
        </div>

        <section className="p-4">
          <div className="flex border-gray-200 mb-4 space-x-4">
            <button
              onClick={() => setActiveTab("discounts")}
              className={`pb-2 text-sm font-medium ${
                activeTab === "discounts"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              Discounts
            </button>
            <button
              onClick={() => setActiveTab("coupons")}
              className={`pb-2 text-sm font-medium ${
                activeTab === "coupons"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              Coupons
            </button>
          </div>
        </section>

        <div className="bg-white mx-6 rounded-lg border border-gray-200 ">
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

                {activeTab === "discounts"
                  ? showFilter && (
                      <div className="bg-slate-100 flex gap-5 text-left text-sm flex-col absolute z-50 top-10 pb-4  w-[95%] rounded-md">
                        <div className="flex items-center mt-2 pl-4">
                          <ListFilter className="w-4 h-4 mr-2" />
                          <p>Filter</p>
                        </div>

                        <div>
                          {/* const isSelected = filter.includes(
                              category.toLowerCase()
                            ); */}
                          <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                            <ArrowDownIcon className="w-5" />
                            By discount type
                          </p>
                          <button
                            onClick={() => {
                              // setSelectedFilter(category.toLowerCase());
                              handleCategorySelect(category.toLowerCase());
                            }}
                            className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center"
                          >
                            Fixed
                            {isSelected && (
                              <Check className="w-4 h-4 text-green-600" />
                            )}
                          </button>
                          <button
                            onClick={() => {
                              // setSelectedFilter(category.toLowerCase());
                              handleCategorySelect(category.toLowerCase());
                            }}
                            className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center"
                          >
                            Percentage
                            {isSelected && (
                              <Check className="w-4 h-4 text-green-600" />
                            )}
                          </button>
                        </div>
                        <div className="">
                          {/* const isSelected = filter.includes(
                              category.toLowerCase()
                            ); */}
                          <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                            <ArrowDownIcon className="w-5" />
                            By status
                          </p>
                          <button
                            onClick={() => {
                              // setSelectedFilter(category.toLowerCase());
                              handleCategorySelect(category.toLowerCase());
                            }}
                            className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center"
                          >
                            Active
                            {isSelected && (
                              <Check className="w-4 h-4 text-green-600" />
                            )}
                          </button>
                          <button
                            onClick={() => {
                              // setSelectedFilter(category.toLowerCase());
                              handleCategorySelect(category.toLowerCase());
                            }}
                            className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center"
                          >
                            Inactive
                            {isSelected && (
                              <Check className="w-4 h-4 text-green-600" />
                            )}
                          </button>
                        </div>

                        <div className=" px-2">
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
                  : activeTab === "coupons"
                  ? showFilter && (
                      <div className="bg-slate-100  flex gap-5 text-sm flex-col absolute z-50 top-10 pb-4  w-[95%] rounded-md">
                        <div className="flex items-center mt-2 mb-5 pl-4">
                          <ListFilter className="w-4 h-4 mr-2" />
                          <p>Filter</p>
                        </div>

                        <div className="flex flex-col items-start w-full">
                          <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                            <ArrowDownIcon className="w-5" />
                            By status
                          </p>
                          <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                            All
                          </button>
                          <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                            Active
                            {/* {isSelected && (
                                <Check className="w-4 h-4 text-green-600" />
                              )} */}
                          </button>
                          <button className=" border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                            Inactive
                          </button>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                            <ArrowDownIcon className="w-5" />
                            By status
                          </p>
                          <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                            All
                          </button>
                          <button className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                            Active
                            {/* {isSelected && (
                                <Check className="w-4 h-4 text-green-600" />
                              )} */}
                          </button>
                          <button className=" border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center">
                            Inactive
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
          {activeTab === "discounts" ? (
            <DiscountsTable
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              showMore={showMore}
              setShowMore={setShowMore}
              openDropdownIndex={openDropdownIndex}
              setOpenDropdownIndex={setOpenDropdownIndex}
              dropDownRef={dropDownRef}
            />
          ) : (
            <CouponsTable
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
              dropDownRef={dropDownRef}
            />
          )}

          {/* Pagination */}
          {discountsData && (
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
  );
}

export default DiscountsCoupons;
