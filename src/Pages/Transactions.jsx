import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Search,
  Upload,
  Users2,
  MoreVertical,
  ListFilter,
  Check,
  ChevronDown,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import { transactionHistoryData, settlementHistoryData } from "../data/data";
import { StatsCard } from "../components/StatsCard";
import Pagination from "../components/Pagination";
import { ArrowupDown } from "./Orders";
import Navbar from "../components/Navbar";
import { groupIcon } from "./Customers";
import TransactionDetailsModal from "../Modal/TransactionDetailsModal";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("transaction-history");
  const dateSelection = useDateSelection();

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropDownRef = useRef(null);

  // Filter states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const filterRef = useRef(null);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
      }
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCurrentData = () => {
    switch (activeTab) {
      case "settlement-history":
        return settlementHistoryData;
      default:
        return transactionHistoryData;
    }
  };

  const filteredData = useMemo(() => {
    const currentData = getCurrentData();
    let filtered = currentData;

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((item) => {
        if (activeTab === "transaction-history") {
          return (
            item.orderId.toLowerCase().includes(searchLower) ||
            item.amount.toString().toLowerCase().includes(searchLower) ||
            item.transactionType.toLowerCase().includes(searchLower) ||
            item.status.toLowerCase().includes(searchLower)
          );
        } else {
          return (
            item.settlementId.toLowerCase().includes(searchLower) ||
            item.amount.toString().toLowerCase().includes(searchLower) ||
            item.status.toLowerCase().includes(searchLower)
          );
        }
      });
    }

    // Apply status filter
    if (selectedStatus !== "All") {
      filtered = filtered.filter((item) => item.status === selectedStatus);
    }

    // Apply type filter for transaction history
    if (activeTab === "transaction-history" && selectedType !== "All") {
      filtered = filtered.filter((item) => item.transactionType === selectedType);
    }

    return filtered;
  }, [searchTerm, activeTab, selectedStatus, selectedType]);

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const indexOfFirstProduct = (currentPage - 1) * entriesPerPage;
  const indexOfLastProduct = indexOfFirstProduct + entriesPerPage;
  const currentItems = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm("");
    setSelectedStatus("All");
    setSelectedType("All");
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter functions
  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedStatus("All");
    setSelectedType("All");
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    setIsFilterOpen(false);
    setCurrentPage(1);
  };

  // Modal handlers
  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedStatus, selectedType]);

  const renderTableHeaders = () => {
    if (activeTab === "settlement-history") {
      return (
        <>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              DATE
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              AMOUNT
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              STATUS
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
        </>
      );
    } else {
      return (
        <>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              ACTION
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              DATE
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              ORDER
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              AMOUNT
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              TRANSACTION TYPE
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-[#687182]">
            <div className="flex items-center gap-2">
              STATUS
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
        </>
      );
    }
  };

  const renderTableRows = () => {
    return currentItems.map((item, index) => {
      if (activeTab === "settlement-history") {
        return (
          <tr
            key={item.id}
            className="border-b border-gray-200 hover:bg-gray-50 text-xs"
          >
            <td className="p-4 text-gray-600">{item.date}</td>
            <td className="p-4 text-gray-600">₦{item.amount.toLocaleString()}</td>
            <td className="p-4">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                item.status === "Completed" 
                  ? "bg-green-100 text-green-800" 
                  : item.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}>
                • {item.status}
              </span>
            </td>
          </tr>
        );
      } else {
        return (
          <tr
            key={item.id}
            className="border-b border-gray-200 hover:bg-gray-50 text-xs"
          >
            <td className="p-4">
              <button
                onClick={() => handleViewDetails(item)}
                className="font-semibold hover:text-blue-600 transition-colors text-blue-600"
              >
                view details
              </button>
            </td>
            <td className="p-4 text-gray-600">{item.date}</td>
            <td className="p-4">
              <Link to={``} >
                {item.orderId}
              </Link>
            </td>
            <td className="p-4 text-gray-600">₦{item.amount.toLocaleString()}</td>
            <td className="p-4 text-gray-600">{item.transactionType}</td>
            <td className="p-4">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                item.status === "Completed" 
                  ? "bg-green-100 text-green-800" 
                  : item.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}>
                • {item.status}
              </span>
            </td>
          </tr>
        );
      }
    });
  };

  const renderEmptyState = () => {
    return (
      <div className="px-6 py-12 text-center">
        <div className="text-gray-400 mb-2">
          <Search className="w-12 h-12 mx-auto mb-4" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No {activeTab === "transaction-history" ? "transactions" : "settlements"} found
        </h3>
        <p className="text-gray-500 mb-4">
          {searchTerm
            ? `No ${activeTab === "transaction-history" ? "transactions" : "settlements"} match your search for "${searchTerm}"`
            : `No ${activeTab === "transaction-history" ? "transactions" : "settlements"} available`}
        </p>
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear search
          </button>
        )}
      </div>
    );
  };

  const renderFilterDropdown = () => {
    return (
      <div className="relative" ref={filterRef}>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <ListFilter className="h-4 w-4" />
          Filter
          <ChevronDown className="h-4 w-4" />
        </button>

        {isFilterOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <ListFilter className="h-4 w-4 text-gray-600" />
                <span className="font-medium text-gray-900">Filter</span>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <ChevronDown className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    By status
                  </span>
                </div>

                <div className="space-y-2">
                  {["All", "Completed", "Pending", "Failed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusSelect(status)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>{status}</span>
                      {selectedStatus === status && (
                        <Check className="h-4 w-4 text-green-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === "transaction-history" && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ChevronDown className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">
                      By type
                    </span>
                  </div>

                  <div className="space-y-2">
                    {["All", "Bank transfer", "Card payment", "Online payment"].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleTypeSelect(type)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                      >
                        <span>{type}</span>
                        {selectedType === type && (
                          <Check className="h-4 w-4 text-green-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={handleResetFilters}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reset all
                </button>
                <button
                  onClick={handleApplyFilters}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Calculate stats
  const totalOnlineTransactions = transactionHistoryData
    .filter(t => t.transactionType !== "Bank transfer")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalOfflineTransactions = transactionHistoryData
    .filter(t => t.transactionType === "Bank transfer")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const pendingSettlements = settlementHistoryData
    .filter(s => s.status === "Pending").length;

  return (
    <div className="pb-10 bg-[#F9FAFB]">
      <div className="mx-auto space-y-6">
        <Navbar />
        {/* Header */}
        <div className="flex items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
            <p className="text-sm text-gray-600">
              {filteredData.length} {activeTab === "transaction-history" ? "Transactions" : "Settlements"}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <StatsCard
            icon={Users2}
            title="Total online transactions"
            value={`₦${totalOnlineTransactions.toLocaleString()}`}
            change={-24.5}
            period="vs 7 days ago"
            color="bg-[#A4845D]"
          />

          <StatsCard
            icon={groupIcon}
            title="Total offline transactions"
            value={`₦${totalOfflineTransactions.toLocaleString()}`}
            change={-24.5}
            period="vs 7 days ago"
            color="bg-[#82B004]"
          />

          <StatsCard
            icon={Newspaper}
            title="Pending settlement"
            value={pendingSettlements}
            change={45}
            period="vs 7 days ago"
            color="bg-[#E36308]"
          />
        </div>

        {/* Tabs */}
        <div className="border-gray-200 px-6 pt-6">
          <div className="flex gap-8">
            <button
              onClick={() => handleTabChange("transaction-history")}
              className={`pb-2 font-medium ${
                activeTab === "transaction-history"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Transaction history
            </button>
            <button
              onClick={() => handleTabChange("settlement-history")}
              className={`pb-2 font-medium ${
                activeTab === "settlement-history"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Settlement history
            </button>
          </div>
        </div>

        <div className="px-6 space-y-2">
          {/* Search and Filters */}
          <div className="border border-gray-200 bg-white rounded-lg px-6 py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={`Search for user name, ID etc...`}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>
                {searchTerm && (
                  <div className="text-sm text-gray-600">
                    {filteredData.length} result
                    {filteredData.length !== 1 ? "s" : ""} found
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                {renderFilterDropdown()}
                <DateSelector
                  {...dateSelection}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="">
            <div className="overflow-x-auto">
              {currentItems.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      {renderTableHeaders()}
                    </tr>
                  </thead>
                  <tbody className="bg-white rounded-lg border border-gray-200 shadow-sm">
                    {renderTableRows()}
                  </tbody>
                </table>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  {renderEmptyState()}
                </div>
              )}
            </div>

            {/* Pagination - only show if there are results */}
            {filteredData.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                entriesPerPage={entriesPerPage}
                setEntriesPerPage={(value) => {
                  setEntriesPerPage(value);
                  setCurrentPage(1);
                }}
                indexOfFirstProduct={indexOfFirstProduct}
                indexOfLastProduct={Math.min(
                  indexOfLastProduct,
                  filteredData.length
                )}
                totalEntries={filteredData.length}
              />
            )}
          </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      <TransactionDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        transaction={selectedTransaction}
      />
    </div>
  );
};

export default Transactions;