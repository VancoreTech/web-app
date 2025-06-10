import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, LucideWallet2, Box, Users2, Command, ArrowUpToLine, ListFilter, MoreVertical} from 'lucide-react';
import Navbar from '../components/Navbar';
import DateSelector from '../components/DateSelector';
import { useDateSelection } from '../hooks/UseDateSelection';
import { ordersData } from '../data/data';
import { StatsCard } from '../components/StatsCard';
import Pagination from '../components/Pagination';

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
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Use the custom hook for date selection
  const dateSelection = useDateSelection();

  // Filter and paginate orders
  const filteredOrders = useMemo(() => {
    return ordersData.filter(order => 
      order.orderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredOrders.length / entriesPerPage);
  const indexOfFirstProduct = (currentPage - 1) * entriesPerPage;
  const indexOfLastProduct = indexOfFirstProduct + entriesPerPage;
  const currentOrders = filteredOrders.slice(
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
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
              <p className="text-sm text-gray-500">{filteredOrders.length} orders</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 border border-blue-600 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <ArrowUpToLine className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-600">Export CSV</span>
              </button>
              <button onClick={() => navigate('/dashboard/create-order')} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <span className="mr-2">+</span>
                Create an order
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={LucideWallet2}
              title="Amount owed"
              value="₦0.00"
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#6E90C7]"
            />
            <StatsCard
              icon={Box}
              title="Total orders"
              value={filteredOrders.length}
              change={45}
              period="vs 7 days ago"
              color="bg-[#B867BA]"
            />
            <StatsCard
              icon={Users2}
              title="Completed orders"
              value="14"
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#A4845D]"
            />
            <StatsCard
              icon={Command}
              title="Unpaid orders"
              value="6"
              change={45}
              period="vs 7 days ago"
              color="bg-[#307F9A]"
            />
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
                      placeholder="Search for user name, ID etc.."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                    />
                  </div>
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

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input type="checkbox" className="rounded border-gray-300" />
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.orderId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.orderName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.date}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          order.payment === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          • {order.payment}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          • {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {ordersData && (
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
                indexOfLastProduct={indexOfLastProduct}
                totalEntries={filteredOrders.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;