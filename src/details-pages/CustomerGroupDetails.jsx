import {
  ArrowLeft,
  Edit,
  ListFilter,
  Search,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDateSelection } from "../hooks/UseDateSelection";
import DateSelector from "../components/DateSelector";
import Pagination from "../components/Pagination";
import { customersData } from "../data/data";
import { ArrowupDown } from "../Pages/Orders";

const CustomAvatar = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.7776 38.4481C45.7776 38.4481 50.4442 33.5592 50.4442 27.5592C50.4442 21.5592 45.5553 16.8926 39.5553 16.8926C33.5553 16.8926 28.8887 21.7815 28.8887 27.5592C28.8887 33.5592 33.7776 38.4481 39.7776 38.4481ZM39.5553 21.337C39.7776 21.337 39.7776 21.337 39.5553 21.337C43.1109 21.337 45.9998 24.2259 45.9998 27.7815C45.9998 31.337 43.1109 34.0037 39.5553 34.0037C35.9998 34.0037 33.3331 31.1148 33.3331 27.7815C33.3331 24.2259 36.222 21.337 39.5553 21.337Z"
      fill="#696969"
    />
    <path
      d="M72.6673 37.1094C68.4451 33.3316 62.8895 31.3316 57.1118 31.5538H55.334C54.8895 33.3316 54.2229 34.8872 53.334 36.2205C54.6673 35.9983 55.7784 35.9983 57.1118 35.9983C61.334 35.7761 65.5562 37.1094 68.8895 39.5538V55.5538H73.334V37.7761L72.6673 37.1094Z"
      fill="#696969"
    />
    <path
      d="M51.9998 17.3344C53.1109 14.6678 56.222 13.3344 59.1109 14.4455C61.7776 15.5566 63.1109 18.6678 61.9998 21.5566C61.1109 23.5566 59.1109 24.89 57.1109 24.89C56.6665 24.89 55.9998 24.89 55.5553 24.6678C55.7776 25.7789 55.7776 26.89 55.7776 27.7789V29.1122C56.222 29.1122 56.6665 29.3344 57.1109 29.3344C62.6665 29.3344 67.1109 24.89 67.1109 19.5566C67.1109 14.0011 62.6664 9.55664 57.3331 9.55664C53.7776 9.55664 50.6664 11.3344 48.8887 14.4455C49.9998 15.1122 51.1109 16.0011 51.9998 17.3344Z"
      fill="#696969"
    />
    <path
      d="M26.666 36.4451C25.7771 35.1118 25.1105 33.5562 24.666 31.7785H22.8882C17.1105 31.5562 11.5549 33.5562 7.33268 37.1118L6.66602 37.7785V55.5562H11.1105V39.5562C14.666 37.1118 18.666 35.7785 22.8882 36.0007C24.2216 36.0007 25.5549 36.2229 26.666 36.4451Z"
      fill="#696969"
    />
    <path
      d="M22.8886 29.1078C23.333 29.1078 23.7775 29.1078 24.2219 28.8856V27.5522C24.2219 26.4411 24.2219 25.33 24.4441 24.4411C23.9997 24.6633 23.333 24.6633 22.8886 24.6633C19.9997 24.6633 17.5553 22.2189 17.5553 19.33C17.5553 16.4411 19.9997 13.9967 22.8886 13.9967C25.1108 13.9967 27.1108 15.33 27.9997 17.33C28.8886 16.2189 30.2219 15.1078 31.333 14.2189C28.4441 9.55222 22.4441 7.99667 17.7775 10.8856C13.1108 13.7744 11.5553 19.7744 14.4441 24.4411C16.2219 27.33 19.333 29.1078 22.8886 29.1078Z"
      fill="#696969"
    />
    <path
      d="M58.0004 48.2342L57.556 47.5675C53.1115 42.6786 46.8893 39.7897 40.2227 40.012C33.556 39.7897 27.1115 42.6786 22.6671 47.5675L22.2227 48.2342V65.1231C22.2227 67.1231 23.7782 68.9008 26.0004 68.9008H54.4449C56.4449 68.9008 58.2227 67.1231 58.2227 65.1231V48.2342H58.0004ZM53.556 64.4564H26.6671V49.7897C30.2227 46.2342 35.1115 44.4564 40.2227 44.4564C45.1115 44.2342 50.0004 46.2342 53.556 49.7897V64.4564Z"
      fill="#696969"
    />
  </svg>
);

const CustomerGroupDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const dateSelection = useDateSelection();

  const groupFormData = location.state?.groupData;

  const customerGroupData = groupFormData ? {
    name: `${groupFormData.groupName}`,
    avatar: <CustomAvatar />,
    activeStatus: "Active: 17 days ago",
    dateCreated: "13-01-2025",
    noOfCustomers: 10,
    noOfPurchasesMade: 10,
  } : {
    name: "Clothings group",
    avatar: <CustomAvatar />,
    activeStatus: "Active: 17 days ago",
    dateCreated: "13-01-2025 16:19:05",
    noOfCustomers: 4,
    noOfPurchasesMade: 32,
  }

  // Use form data if available, otherwise fallback to dummy data
  const groupData = groupFormData
    ? {
        name: `${groupFormData.groupName}`,
        avatar: <CustomAvatar />,
        activeStatus: "Active: 17 days ago",
        dateCreated: "13-01-2025",
        noOfCustomers: 10,
        noOfPurchasesMade: 10,
      }
    : {
        // Fallback dummy data when no form data is available
        name: "Clothings group",
        avatar: <CustomAvatar />,
        activeStatus: "Active: 17 days ago",
        dateCreated: "13-01-2025 16:19:05",
        noOfCustomers: 4,
        noOfPurchasesMade: 32,
      };

  // Enhanced filter function with better field matching and error handling
  const filteredOrders = useMemo(() => {
    if (!searchTerm.trim()) {
      return customersData || [];
    }

    const searchTermLower = searchTerm.toLowerCase().trim();

    return (customersData || []).filter((customer) => {
      // Handle potential undefined values and ensure string conversion
      const customerId = (customer.id || "")
        .toString()
        .toLowerCase();
      const customerName = (
        customer.name ||
        ""
      )
        .toString()
        .toLowerCase();
      const customerAmount = (customer.email || "")
        .toString()
        .toLowerCase();
      const date = (customer.dateAdded || "")
        .toString()
        .toLowerCase();

      return (
        customerId.includes(searchTermLower) ||
        customerName.includes(searchTermLower) ||
        customerAmount.includes(searchTermLower) ||
        date.includes(searchTermLower)
      );
    });
  }, [searchTerm]);

  // Reset to first page when search term changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredOrders.length / entriesPerPage);
  const indexOfLastProduct = currentPage * entriesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - entriesPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/create-group">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            </Link>
          </div>
          <Link
            to={`/dashboard/edit-group`}
            state={{ groupData: groupFormData }}
          >
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              <Edit className="h-4 w-4" />
              Edit details
            </button>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">
          Customer group details
        </h1>

        {/* Group Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-10 shadow-sm">
          <div className="flex flex-row items-start gap-6">
            <div className=" flex items-center justify-center flex-shrink-0">
              {groupData.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 space-x-10">
                <h2 className="text-xl font-semibold text-gray-900">
                  {groupData.name}
                </h2>
                <span className="inline-flex items-center border border-[#32D583] px-4 py-2 rounded-lg text-xs font-medium bg-[#ECFDF3] text-green-800">
                  {groupData.activeStatus}
                </span>
              </div>

              <div className="grid grid-rows-3 gap-5">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date created</p>
                  <p className="font-base text-gray-700">
                    {groupData.dateCreated}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Total no of customers
                  </p>
                  <p className="font-base text-gray-700">
                    {groupData.noOfCustomers}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Total no of purchases made
                  </p>
                  <p className="font-base text-gray-700">
                    {groupData.noOfPurchasesMade}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Customers */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">All customers</h3>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for full name, email address..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
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
                      {filteredOrders.length} result
                      {filteredOrders.length !== 1 ? "s" : ""} found
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <ListFilter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                  <DateSelector {...dateSelection} />
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              {currentOrders.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          DATE ADDED
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          FULL NAME
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          EMAIL ADDRESS
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentOrders.map((customer, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {customer.dateAdded || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {customer.name || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {customer.email || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="px-6 py-12 text-center">
                  <div className="text-gray-400 mb-2">
                    <Search className="w-12 h-12 mx-auto mb-4" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No orders found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {searchTerm
                      ? `No orders match your search for "${searchTerm}"`
                      : "No orders available for this customer"}
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
              )}
            </div>

            {/* Pagination - only show if there are results */}
            {filteredOrders.length > 0 && (
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
                  filteredOrders.length
                )}
                totalEntries={filteredOrders.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGroupDetails;
