import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Calendar,
  Plus,
  Upload,
  Users2,
  Newspaper,
  MoreVertical,
  ListFilter,
} from "lucide-react";
import { Link } from "react-router-dom";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import { customersData, customerGroupData, customerSubscribersData } from "../data/data";
import { StatsCard } from "../components/StatsCard";
import Pagination from "../components/Pagination";
import { ArrowupDown } from "./Orders";
import Navbar from "../components/Navbar";

const groupIcon = () => {
  return (
    <svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1104_20608)">
        <rect x="6.29999" y="2" width="48" height="48" rx="24" fill="#82B004" />
      </g>
      <path
        d="M29.9334 25.535C31.7334 25.535 33.1334 24.0684 33.1334 22.2684C33.1334 20.4684 31.6667 19.0684 29.8667 19.0684C28.0667 19.0684 26.6667 20.535 26.6667 22.2684C26.6667 24.0684 28.1334 25.535 29.9334 25.535ZM29.8667 20.4017C29.9334 20.4017 29.9334 20.4017 29.8667 20.4017C30.9334 20.4017 31.8 21.2684 31.8 22.335C31.8 23.4017 30.9334 24.2017 29.8667 24.2017C28.8 24.2017 28 23.335 28 22.335C28 21.2684 28.8667 20.4017 29.8667 20.4017Z"
        fill="white"
      />
      <path
        d="M39.8 25.1326C38.5333 23.9993 36.8667 23.3993 35.1333 23.466H34.6C34.4667 23.9993 34.2667 24.466 34 24.866C34.4 24.7993 34.7333 24.7993 35.1333 24.7993C36.4 24.7326 37.6667 25.1326 38.6667 25.866V30.666H40V25.3326L39.8 25.1326Z"
        fill="white"
      />
      <path
        d="M33.6 19.2005C33.9334 18.4005 34.8667 18.0005 35.7334 18.3339C36.5334 18.6672 36.9334 19.6005 36.6 20.4672C36.3334 21.0672 35.7334 21.4672 35.1334 21.4672C35 21.4672 34.8 21.4672 34.6667 21.4005C34.7334 21.7339 34.7334 22.0672 34.7334 22.3339V22.7339C34.8667 22.7339 35 22.8005 35.1334 22.8005C36.8 22.8005 38.1334 21.4672 38.1334 19.8672C38.1334 18.2005 36.8 16.8672 35.2 16.8672C34.1334 16.8672 33.2 17.4005 32.6667 18.3339C33 18.5339 33.3334 18.8005 33.6 19.2005Z"
        fill="white"
      />
      <path
        d="M26 24.9343C25.7333 24.5343 25.5333 24.0677 25.4 23.5343H24.8667C23.1333 23.4677 21.4667 24.0677 20.2 25.1343L20 25.3343V30.6677H21.3333V25.8677C22.4 25.1343 23.6 24.7343 24.8667 24.801C25.2667 24.801 25.6667 24.8677 26 24.9343Z"
        fill="white"
      />
      <path
        d="M24.8667 22.7321C25 22.7321 25.1333 22.7321 25.2667 22.6655V22.2655C25.2667 21.9321 25.2667 21.5988 25.3333 21.3321C25.2 21.3988 25 21.3988 24.8667 21.3988C24 21.3988 23.2667 20.6655 23.2667 19.7988C23.2667 18.9321 24 18.1988 24.8667 18.1988C25.5333 18.1988 26.1333 18.5988 26.4 19.1988C26.6667 18.8655 27.0667 18.5321 27.4 18.2655C26.5333 16.8655 24.7333 16.3988 23.3333 17.2655C21.9333 18.1321 21.4667 19.9321 22.3333 21.3321C22.8667 22.1988 23.8 22.7321 24.8667 22.7321Z"
        fill="white"
      />
      <path
        d="M35.4 29.1343L35.2667 28.9343C33.9334 27.4676 32.0667 26.601 30.0667 26.6676C28.0667 26.601 26.1334 27.4676 24.8 28.9343L24.6667 29.1343V34.201C24.6667 34.801 25.1334 35.3343 25.8 35.3343H34.3334C34.9334 35.3343 35.4667 34.801 35.4667 34.201V29.1343H35.4ZM34.0667 34.001H26V29.601C27.0667 28.5343 28.5334 28.001 30.0667 28.001C31.5334 27.9343 33 28.5343 34.0667 29.601V34.001Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_dd_1104_20608"
          x="0.299988"
          y="0"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1104_20608"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1104_20608"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1104_20608"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1104_20608"
            result="effect2_dropShadow_1104_20608"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1104_20608"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("customers");
  const dateSelection = useDateSelection();

  const getCurrentData = () => {
    switch (activeTab) {
      case "groups":
        return customerGroupData;
      case "subscribers":
        return customerSubscribersData;
      default:
        return customersData;
    }
  };

  const filteredData = useMemo(() => {
    const currentData = getCurrentData();
    if (!searchTerm.trim()) {
      return currentData;
    }

    return currentData.filter((item) => {
      const searchLower = searchTerm.toLowerCase();
      if (activeTab === "customers") {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.email.toLowerCase().includes(searchLower) ||
          item.phone.toLowerCase().includes(searchLower) ||
          item.id.toString().toLowerCase().includes(searchLower)
        );
      } else if (activeTab === "groups") {
        return (
          item.groupName.toLowerCase().includes(searchLower) ||
          item.id.toString().toLowerCase().includes(searchLower)
        );
      } else if (activeTab === "subscribers") {
        return (
          item.email.toLowerCase().includes(searchLower) ||
          item.id.toString().toLowerCase().includes(searchLower)
        );
      }
      return false;
    });
  }, [searchTerm, activeTab]);

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const indexOfFirstProduct = (currentPage - 1) * entriesPerPage;
  const indexOfLastProduct = indexOfFirstProduct + entriesPerPage;
  const currentItems = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm("");
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const renderTableHeaders = () => {
    const baseHeaders = (
      <>
        <th className="text-left p-4">
          <input type="checkbox" className="rounded" />
        </th>
        <th className="text-left p-4 font-medium text-xs text-gray-700">
          <div className="flex items-center gap-2">
            ACTION
            <ArrowupDown className="h-4 w-4" />
          </div>
        </th>
      </>
    );

    if (activeTab === "groups") {
      return (
        <>
          {baseHeaders}
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              GROUP NAME
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              NO. OF CUSTOMERS
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              DATE ADDED
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
        </>
      );
    } else if (activeTab === "subscribers") {
      return (
        <>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              DATE ADDED
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              EMAIL ADDRESS
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
        </>
      );
    } else {
      return (
        <>
          {baseHeaders}
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              NAME
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              EMAIL ADDRESS
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              PHONE NUMBER
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
          <th className="text-left p-4 font-medium text-xs text-gray-700">
            <div className="flex items-center gap-2">
              DATE ADDED
              <ArrowupDown className="h-4 w-4" />
            </div>
          </th>
        </>
      );
    }
  };

  const renderTableRows = () => {
    return currentItems.map((item) => {
      const baseCells = (
        <>
          <td className="p-4">
            <input type="checkbox" className="rounded" />
          </td>
          <td className="p-4">
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
              <MoreVertical className="h-4 w-4" />
            </button>
          </td>
        </>
      );

      if (activeTab === "groups") {
        return (
          <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
            {baseCells}
            <td className="p-4">
              <Link to={``} className="hover:text-blue-600 transition-colors">
                {item.groupName}
              </Link>
            </td>
            <td className="p-4 text-gray-600">{item.customerCount}</td>
            <td className="p-4 text-gray-600">{item.dateAdded}</td>
          </tr>
        );
      } else if (activeTab === "subscribers") {
        return (
          <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="p-4 text-gray-600">{item.dateAdded}</td>
            <td className="p-4 text-gray-600">{item.email}</td>
          </tr>
        );
      } else {
        return (
          <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
            {baseCells}
            <td className="p-4">
              <Link to={``} className="hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            </td>
            <td className="p-4 text-gray-600">{item.email}</td>
            <td className="p-4 text-gray-600">{item.phone}</td>
            <td className="p-4 text-gray-600">{item.dateAdded}</td>
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
          No {activeTab} found
        </h3>
        <p className="text-gray-500 mb-4">
          {searchTerm 
            ? `No ${activeTab} match your search for "${searchTerm}"`
            : `No ${activeTab} available`
          }
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

  return (
    <div className="pb-10 bg-[#F9FAFB]">
      <div className="mx-auto space-y-6">
        <Navbar />
        {/* Header */}
        <div className="flex items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
            <p className="text-sm text-gray-600">
              {filteredData.length} {activeTab}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-blue-600 rounded-md hover:bg-gray-50 transition-colors">
              <Upload className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600">Export CSV</span>
            </button>
            <Link to="/dashboard/create-customer">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                Add new customer
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <StatsCard
            icon={Users2}
            title="Total customers"
            value={customersData.length}
            change={-24.5}
            period="vs 7 days ago"
            color="bg-[#A4845D]"
          />

          <StatsCard
            icon={groupIcon}
            title="Customer group"
            value={customerGroupData.length}
            change={-24.5}
            period="vs 7 days ago"
            color="bg-[#82B004]"
          />

          <StatsCard
            icon={Newspaper}
            title="Newsletter subscribers"
            value={customerSubscribersData.length}
            change={45}
            period="vs 7 days ago"
            color="bg-[#E36308]"
          />
        </div>

        {/* Tabs */}
        <div className="border-gray-200 px-6">
          <div className="flex gap-8">
            <button
              onClick={() => handleTabChange("customers")}
              className={`pb-2 font-medium ${
                activeTab === "customers"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Customers
            </button>
            <button
              onClick={() => handleTabChange("groups")}
              className={`pb-2 font-medium ${
                activeTab === "groups"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Groups
            </button>
            <button
              onClick={() => handleTabChange("subscribers")}
              className={`pb-2 font-medium ${
                activeTab === "subscribers"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Subscribers
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
                    placeholder={`Search for ${activeTab}...`}
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
                    {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} found
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <ListFilter className="h-4 w-4" />
                  Filter
                </button>
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
                indexOfLastProduct={Math.min(indexOfLastProduct, filteredData.length)}
                totalEntries={filteredData.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;