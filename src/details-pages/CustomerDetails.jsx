import React, { useState, useMemo } from "react";
import {
  ArrowLeft,
  Search,
  Edit,
  User,
  ListFilter,
  MoreVertical,
  Users2,
  UserCircle,
} from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import DateSelector from "../components/DateSelector";
import { useDateSelection } from "../hooks/UseDateSelection";
import Pagination from "../components/Pagination";
import { ordersData } from "../data/data";
import { ArrowupDown } from "../Pages/Orders";

const CustomerDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const dateSelection = useDateSelection();

  // Get customer data from navigation state (from CreateCustomer page or EditCustomer page)
  const customerFormData = location.state?.customerData;

  // Use form data if available, otherwise fallback to dummy data
  const customerData = customerFormData ? {
    name: `${customerFormData.firstName} ${customerFormData.lastName}`,
    avatar: <UserCircle className="w-20 h-20 text-[#444444CC]" />,
    activeStatus: "Active: 17 days ago", 
    lastOrder: "23-09-2023 16:19:05", 
    totalAmountSpent: "₦96,300.00", 
    totalOrders: 30, 
    totalOrderValue: "₦96,300.00", 
    address: customerFormData.address,
    mobileNumber: customerFormData.phone,
    email: customerFormData.email,
    billingAddress: customerFormData.sameAsShipping 
      ? `${customerFormData.shippingAddress}, ${customerFormData.city}, ${customerFormData.state}, ${customerFormData.country}${customerFormData.zipCode ? ', ' + customerFormData.zipCode : ''}`
      : `${customerFormData.billingAddress || ''}, ${customerFormData.billingCity || ''}, ${customerFormData.billingState || ''}, ${customerFormData.billingCountry || ''}${customerFormData.billingZipCode ? ', ' + customerFormData.billingZipCode : ''}`,
    shippingAddress: `${customerFormData.shippingAddress}, ${customerFormData.city}, ${customerFormData.state}, ${customerFormData.country}${customerFormData.zipCode ? ', ' + customerFormData.zipCode : ''}`,
  } : {
    // Fallback dummy data when no form data is available
    name: "Susan Sheidu",
    avatar: <UserCircle className="w-20 h-20 text-[#444444CC]" />,
    activeStatus: "Active: 17 days ago",
    lastOrder: "23-09-2023 16:19:05",
    totalAmountSpent: "₦96,300.00",
    totalOrders: 30,
    totalOrderValue: "₦96,300.00",
    address: "29a Berkley Street, Lagos Island, Lagos.",
    mobileNumber: "07090392819",
    email: "susansheidu@gmail.com",
    billingAddress: "29a Berkley Street, Lagos Island, Lagos.",
    shippingAddress: "29a Berkley Street, Lagos Island, Lagos.",
  };

  const customerGroups = [
    {
      id: 1,
      name: "Clothings group",
      icon: <Users2 className="w-5 h-5 text-[#0A6DEE]" />,
      dateAdded: "13-01-2025",
      totalCustomers: 12,
      color: "blue",
    },
    {
      id: 2,
      name: "Trade fair",
      icon: <Users2 className="w-5 h-5 text-[#5704E3]" />,
      dateAdded: "01-04-2025",
      totalCustomers: 6,
      color: "purple",
    },
    {
      id: 3,
      name: "Thrift wears",
      icon: <Users2 className="w-5 h-5 text-[#0A6DEE]" />,
      dateAdded: "13-11-2025",
      totalCustomers: 8,
      color: "green",
    },
  ];

  // Enhanced filter function with better field matching and error handling
  const filteredOrders = useMemo(() => {
    if (!searchTerm.trim()) {
      return ordersData || [];
    }

    const searchTermLower = searchTerm.toLowerCase().trim();

    return (ordersData || []).filter((order) => {
      // Handle potential undefined values and ensure string conversion
      const orderId = (order.orderId || order.orderNo || order.id || "")
        .toString()
        .toLowerCase();
      const orderName = (
        order.orderName ||
        order.name ||
        order.productName ||
        ""
      )
        .toString()
        .toLowerCase();
      const amount = (order.amount || order.price || order.total || "")
        .toString()
        .toLowerCase();
      const status = (order.status || "").toString().toLowerCase();
      const date = (order.date || order.createdAt || "")
        .toString()
        .toLowerCase();
      const payment = (order.payment || order.paymentStatus || "")
        .toString()
        .toLowerCase();

      return (
        orderId.includes(searchTermLower) ||
        orderName.includes(searchTermLower) ||
        amount.includes(searchTermLower) ||
        status.includes(searchTermLower) ||
        date.includes(searchTermLower) ||
        payment.includes(searchTermLower)
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
            <Link to="/dashboard/create-customer">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            </Link>
          </div>
          <Link 
            to={`/dashboard/edit-customer`}
            state={{ customerData: customerFormData }}
          >
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              <Edit className="h-4 w-4" />
              Edit details
            </button>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">
          Customer details
        </h1>

        {/* Customer Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-10 shadow-sm">
          <div className="flex flex-row items-start gap-6">
            <div className=" flex items-center justify-center flex-shrink-0">
              {customerData.avatar}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {customerData.name}
                </h2>
                <span className="inline-flex items-center border border-[#32D583] px-4 py-2 rounded-lg text-xs font-medium bg-[#ECFDF3] text-green-800">
                  {customerData.activeStatus}
                </span>
              </div>

              <div className="grid grid-rows-4 gap-5 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last order</p>
                  <p className="font-base text-gray-700">
                    {customerData.lastOrder}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Total amount spent
                  </p>
                  <p className="font-base text-gray-700">
                    {customerData.totalAmountSpent}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total orders</p>
                  <p className="font-base text-gray-700">
                    {customerData.totalOrders}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Total order value
                  </p>
                  <p className="font-base text-gray-700">
                    {customerData.totalOrderValue}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-4 gap-5 w-[50%] border-l-2 border-gray-200 pl-14">
              <div>
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="font-base text-gray-700">
                  {customerData.address}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Mobile Number</p>
                <p className="font-base text-gray-700">
                  {customerData.mobileNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email Address</p>
                <p className="font-base text-gray-700">{customerData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Billing address</p>
                <p className="font-base text-gray-700">
                  {customerData.billingAddress}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Shipping address</p>
                <p className="font-base text-gray-700">
                  {customerData.shippingAddress}
                </p>
              </div>
            </div>
          </div>
          {/* Customer Groups */}
          <div className="space-y-4 mt-10">
            <h3 className="text-lg font-semibold">Customer group list</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customerGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex  gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        group.color === "blue"
                          ? "bg-[#0A6DEE14]"
                          : group.color === "purple"
                          ? "bg-[#5704E314]"
                          : "bg-[#0FB33814]"
                      }`}
                    >
                      <span className="text-sm">{group.icon}</span>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <h4
                        className={`font-medium ${
                          group.color === "blue"
                            ? "text-[#0A6DEE]"
                            : group.color === "purple"
                            ? "text-[#5704E3]"
                            : "text-[#0FB338]"
                        }`}
                      >
                        {group.name}
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>Date added: {group.dateAdded}</p>
                        <p>Total no of customers: {group.totalCustomers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Order history</h3>

          <div className="bg-white rounded-lg ">
            {/* Search and Filters */}
            <div className="p-4 border rounded-t-lg border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for order no, name, amount..."
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
                      <th className="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          ACTION
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          ORDER NO.
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          ORDER NAME
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          AMOUNT
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          DATE
                          <ArrowupDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          PAYMENT
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
                  <tbody className="bg-white rounded-b-lg border border-gray-200 divide-y divide-gray-200">
                    {currentOrders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {order.orderId || order.orderNo || order.id || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {order.orderName ||
                            order.name ||
                            order.productName ||
                            "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {order.amount || order.price || order.total || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {order.date || order.createdAt || "N/A"}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              (order.payment || order.paymentStatus) === "Paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            • {order.payment || order.paymentStatus || "N/A"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            • {order.status || "N/A"}
                          </span>
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

export default CustomerDetails;