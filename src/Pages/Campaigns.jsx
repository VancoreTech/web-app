import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  ListFilter,
  MoreVertical,
  ArrowDownIcon,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import Pagination from "../components/Pagination";
import More from "../Modal/More";
import { campaignsData } from "../data/data";

export const ArrowupDown = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.39043 13.512C8.19027 13.7622 7.80973 13.7622 7.60957 13.512L4.64988 9.81235C4.38797 9.48497 4.62106 9 5.04031 9H10.9597C11.3789 9 11.612 9.48497 11.3501 9.81235L8.39043 13.512Z"
        fill="#8A919F"
      />
      <path
        d="M8.39043 2.48804C8.19027 2.23784 7.80973 2.23784 7.60957 2.48804L4.64988 6.18765C4.38797 6.51503 4.62106 7 5.04031 7H10.9597C11.3789 7 11.612 6.51503 11.3501 6.18765L8.39043 2.48804Z"
        fill="#8A919F"
      />
    </svg>
  );
};

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("All");
  const [orderStatus, setOrderStatus] = useState("All");
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const filterDropdownRef = useRef(null);
  const dropDownRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  // const [categories, setCategories] = useState([]);
  const [tempCategoryFilter, setTempCategoryFilter] = useState([]);
  const [appliedCategoryFilter, setAppliedCategoryFilter] = useState([]);

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
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setShowFilter(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dateSelection = useDateSelection();

  const displayedCampaigns = campaignsData.filter((campaign) =>
    campaign.campaignName.includes(searchTerm)
  );

  const totalPages = Math.ceil(displayedCampaigns.length / entriesPerPage);
  const indexOfFirstProduct = (currentPage - 1) * entriesPerPage;
  const indexOfLastProduct = indexOfFirstProduct + entriesPerPage;
  const currentCampaigns = displayedCampaigns.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <Navbar />

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Campaigns
              </h1>
              <p className="text-sm text-gray-500">
                Set up shipping rates and tax rules in one place for accurate
                order totals.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate("/dashboard/create-campaign")}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                <span className="mr-2">+</span>
                Create campaigns
              </button>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for campaign name, ID etc.."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative" ref={filterDropdownRef}>
                    <button
                      onClick={() => setShowFilter(!showFilter)}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <ListFilter className="w-4 h-4 mr-2" />
                      Filter
                      {(paymentStatus !== "All" || orderStatus !== "All") && (
                        <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </button>

                    {showFilter && (
                      <div className="bg-slate-100 flex text-left text-sm flex-col absolute z-50 top-10 pb-4 rounded-md w-56 shadow-md">
                        <div className="flex items-center mt-2 mb-5 pl-4">
                          <ListFilter className="w-4 h-4 mr-2" />
                          <p>Filter</p>
                        </div>

                        <p className="flex items-center text-[#0A6DEE] text-sm font-semibold border-b border-[#EBEBEB] pl-4">
                          <ArrowDownIcon className="w-5" />
                          By category name
                        </p>

                        <div className="flex flex-col items-start w-full">
                          {["All", "Ongoing", "Completed"].map((status) => {
                            const isSelected = tempCategoryFilter.includes(
                              status.toLowerCase()
                            );

                            return (
                              <button
                                key={status}
                                onClick={() => {
                                  setSelectedFilter(status.toLowerCase());
                                  handleCategorySelect(status.toLowerCase());
                                }}
                                className="border-b border-[#EBEBEB] w-full text-left pl-4 py-2 flex gap-2 items-center"
                              >
                                {status}
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
                    )}
                  </div>
                  <DateSelector {...dateSelection} />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        ACTION
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        Date Active
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        Campaign name
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        End Date
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        No of conversions
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        STATUS
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentCampaigns.map((campaign, index) => (
                    <tr key={index} className="hover:bg-gray-50">
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
                            <More
                              destinations={[
                                "/dashboard/order-details",
                                "/dashboard/orders",
                                "/dashboard/orders",
                              ]}
                            />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 text-xs">
                        {campaign.dateActive}
                      </td>
                      <td className="px-6 py-4 text-gray-900 text-xs">
                        {campaign.campaignName}
                      </td>

                      <td className="px-6 py-4 text-gray-900 text-xs">
                        {campaign.endDate}
                      </td>
                      <td className="px-6 py-4 text-xs">
                        <span
                          className={
                            "inline-flex px-2 py-1 text-xs font-medium rounded-full "
                          }
                        >
                          {campaign.conversions}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs">
                        <span
                          className={`inline-flex  items-center gap-1 px-3 py-2 text-xs font-medium rounded-full ${
                            campaign.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-[#F4EDFF] text-[#5704E3]"
                          }`}
                        >
                          {campaign.status === "Ongoing" ? (
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="3" cy="3" r="3" fill="#5704E3" />
                            </svg>
                          ) : (
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="3" cy="3" r="3" fill="#027A48" />
                            </svg>
                          )}
                          {campaign.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {showMore && <More />}
            </div>

            {/* Pagination */}
            {campaignsData && (
              <Pagination
                currentPage={currentPage}
                // totalPages={totalPages}
                onPageChange={setCurrentPage}
                entriesPerPage={entriesPerPage}
                setEntriesPerPage={(value) => {
                  setEntriesPerPage(value);
                  setCurrentPage(1);
                }}
                indexOfFirstProduct={indexOfFirstProduct}
                indexOfLastProduct={indexOfLastProduct}
                totalEntries={campaignsData.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
