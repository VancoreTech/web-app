import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Calendar, MoreHorizontal, ArrowUpDown, Edit } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CustomerDetails = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const customerGroups = [
    {
      id: 1,
      name: 'Clothings group',
      icon: '👤',
      dateAdded: '13-01-2025',
      totalCustomers: 12,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Trade fair',
      icon: '👤',
      dateAdded: '01-04-2025',
      totalCustomers: 6,
      color: 'purple'
    },
    {
      id: 3,
      name: 'Thrift wears',
      icon: '👤',
      dateAdded: '13-11-2025',
      totalCustomers: 8,
      color: 'green'
    }
  ];

  const orderHistory = [
    { id: '00001', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00002', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00003', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00004', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00005', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00006', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00007', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00008', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00009', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' },
    { id: '00010', name: 'Two piece hoodie', amount: '₦3,200.00', date: '23/09/23, 09:11:04', status: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Navbar />
      <div className=" mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard/customers">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            </Link>
          </div>
          <Link to="/dashboard/edit-customer">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              <Edit className="h-4 w-4" />
              Edit details
            </button>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">Customer details</h1>

        {/* Customer Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Susan Sheidu</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active: 17 days ago
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Last order</p>
                  <p className="font-medium">23-09-2023 16:19:05</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total amount spent</p>
                  <p className="font-medium">₦3,200.00</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total orders</p>
                  <p className="font-medium">1</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total order value</p>
                  <p className="font-medium">₦3,200.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium">29a Berkley Street, Lagos Island, Lagos.</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Mobile Number</p>
              <p className="font-medium">07090392819</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email Address</p>
              <p className="font-medium">susansheidu@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Billing address</p>
              <p className="font-medium">29a Berkley Street, Lagos Island, Lagos.</p>
            </div>
          </div>

          <div className="mt-6">
            <div>
              <p className="text-sm text-gray-600">Shipping address</p>
              <p className="font-medium">29a Berkley Street, Lagos Island, Lagos.</p>
            </div>
          </div>
        </div>

        {/* Customer Groups */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customer group list</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerGroups.map((group) => (
              <div key={group.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    group.color === 'blue' ? 'bg-blue-100' :
                    group.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                  }`}>
                    <span className="text-sm">{group.icon}</span>
                  </div>
                  <h4 className="font-medium text-blue-600">{group.name}</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Date added: {group.dateAdded}</p>
                  <p>Total no of customers: {group.totalCustomers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order History */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Order history</h3>

          {/* Search and Filters */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for user name, ID etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Calendar className="h-4 w-4" />
                Select Date
              </button>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left p-4 font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        ACTION
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        ORDER NO.
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        ORDER NAME
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium text-gray-600">AMOUNT</th>
                    <th className="text-left p-4 font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        DATE
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        STATUS
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-4">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                      <td className="p-4 font-medium">{order.id}</td>
                      <td className="p-4">{order.name}</td>
                      <td className="p-4">{order.amount}</td>
                      <td className="p-4 text-gray-600">{order.date}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          • {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Showing 1-10 of 100 entries
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
                <div className="flex items-center gap-1 ml-4">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    &lt;
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white border border-blue-600 rounded">
                    1
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;