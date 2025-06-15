import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ListFilter,
  ArrowDown,
  ArrowLeft,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import { referralHistoryData } from "../data/data";
import Pagination from "../components/Pagination";
import { ArrowupDown } from "../Pages/Orders";


const ReferralHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const navigate = useNavigate();

  const filterDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setShowFilterDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dateSelection = useDateSelection();

  // Filter referral history based on search term and status
  const filteredReferrals = useMemo(() => {
    return referralHistoryData.filter((referral) => {
      const matchesSearch =
        referral.referralName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        referral.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        referral.dateInvited.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === "All" || referral.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const totalPages = Math.ceil(filteredReferrals.length / entriesPerPage);
  const indexOfFirstReferral = (currentPage - 1) * entriesPerPage;
  const indexOfLastReferral = indexOfFirstReferral + entriesPerPage;
  const currentReferrals = filteredReferrals.slice(
    indexOfFirstReferral,
    indexOfLastReferral
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleResetFilters = () => {
    setStatusFilter("All");
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    setShowFilterDropdown(false);
    setCurrentPage(1);
  };

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <Navbar />

        <div className="p-6">
          <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard/referrals")}
            className="flex items-center mb-4 gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Referral history
        </h1>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-7 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for user name, ID etc.."
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
                      onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <ListFilter className="w-4 h-4 mr-2" />
                      Filter
                      {statusFilter !== "All" && (
                        <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </button>

                    {/* Filter Dropdown */}
                    {showFilterDropdown && (
                      <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <div className="p-4">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-900">
                              Filter
                            </span>
                          </div>

                          {/* By status */}
                          <div className="mb-6">
                            <div className="flex items-center mb-3">
                              <ArrowDown className="w-4 h-4 text-blue-600 mr-2" />
                              <span className="text-sm font-medium text-blue-600">
                                By status
                              </span>
                            </div>
                            <div className="ml-6 space-y-3">
                              {["All", "Successful", "Pending"].map((status) => (
                                <label
                                  key={status}
                                  className="flex items-center border-b border-gray-200 pb-2 cursor-pointer"
                                  onClick={() => handleStatusChange(status)}
                                >
                                  <input
                                    type="radio"
                                    name="statusFilter"
                                    value={status}
                                    checked={statusFilter === status}
                                    onChange={() => handleStatusChange(status)}
                                    className="sr-only"
                                  />
                                  <div className="flex items-center">
                                    <span
                                      className={`text-sm ${
                                        statusFilter === status
                                          ? "text-gray-900 font-medium"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      {status}
                                    </span>
                                    {statusFilter === status && (
                                      <svg
                                        className="w-4 h-4 ml-2 text-gray-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    )}
                                  </div>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex justify-between">
                            <button
                              onClick={handleResetFilters}
                              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                              Reset all
                            </button>
                            <button
                              onClick={handleApplyFilters}
                              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <DateSelector {...dateSelection} />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        DATE INVITED
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        REFERRAL NAME
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        PHONE NUMBER
                        <ArrowupDown className="w-4 h-4 ml-1" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        AMOUNT EARNED
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
                  {currentReferrals.map((referral, index) => (
                    <tr key={referral.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 text-sm">
                        {referral.dateInvited}
                      </td>
                      <td className="px-6 py-4 text-gray-900 text-sm">
                        {referral.referralName}
                      </td>
                      <td className="px-6 py-4 text-gray-900 text-sm">
                        {referral.phoneNumber}
                      </td>
                      <td className="px-6 py-4 text-gray-900 text-sm">
                        ₦{referral.amountEarned}.00
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                            referral.status === "Successful"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                              referral.status === "Successful"
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                          ></span>
                          {referral.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {referralHistoryData && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                entriesPerPage={entriesPerPage}
                setEntriesPerPage={(value) => {
                  setEntriesPerPage(value);
                  setCurrentPage(1);
                }}
                indexOfFirstProduct={indexOfFirstReferral}
                indexOfLastProduct={indexOfLastReferral}
                totalEntries={filteredReferrals.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralHistory;