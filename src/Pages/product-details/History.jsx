import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaFilter, FaCalendarAlt } from "react-icons/fa";
import {
  Search,
  Filter,
  Calendar,
  FilterIcon,
  FilterX,
  ListFilter,
  ListFilterIcon,
} from "lucide-react";

const data = [
  {
    date: "12-09-2025",
    source: "Modification",
    activity: "Added to product quantity",
    before: 10,
    quantity: 3,
    after: 13,
  },
  {
    date: "12-09-2025",
    source: "Modification",
    activity: "Added to product quantity",
    before: 13,
    quantity: 3,
    after: 3,
  },
  {
    date: "12-09-2025",
    source: "Modification",
    activity: "Removed from product quantity",
    before: 16,
    quantity: 2,
    after: 14,
  },
  {
    date: "12-09-2025",
    source: "Modification",
    activity: "Added to product quantity",
    before: 14,
    quantity: 5,
    after: 19,
  },
  {
    date: "12-09-2025",
    source: "Modification",
    activity: "Added to product quantity",
    before: 19,
    quantity: 1,
    after: 20,
  },
];

function History() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="relative w-full md:w-6/12">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for user name, ID etc.."
            className="w-full pl-10 pr-4 py-2 border rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            <ListFilter className="w-4 h-4 " />
            Filter
          </button>
          <button className="flex items-center gap-1 border px-2 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            <Calendar className="h-4" />
            Select Date
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-separate border-spacing-y-2">
          <thead className="bg-[#F9FAFB] border-y border-[#E9EDF5]">
            <tr className="text-gray-500 uppercase  text-sm ">
              <th className="px-4 py-5">
                <div className="flex items-center gap-2">
                  DATE
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                    <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                  </svg>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center gap-2">
                  SOURCE
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                    <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                  </svg>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center gap-2">
                  Activity
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                    <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                  </svg>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center gap-2">
                  Quantity before
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                    <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                  </svg>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center gap-2">
                  Quantity
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                    <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                  </svg>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center gap-2">
                  Quantity after
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M5 0L0 5H10L5 0Z" fill="#98A2B3" />
                    <path d="M5 16L10 11H0L5 16Z" fill="#98A2B3" />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="bg-white px-10  text-sm hover:bg-gray-50 rounded-xl shadow-sm border-t-2 border-[#E9EDF5]"
              >
                <td className="px-4 py-5">{row.date}</td>
                <td className="px-4 py-3">{row.source}</td>
                <td className="px-4 py-3">{row.activity}</td>
                <td className="px-4 py-3">{row.before}</td>
                <td className="px-4 py-3">{row.quantity}</td>
                <td className="px-4 py-3">{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-6 text-sm text-gray-500">
        <span>Showing 1-10 of 100 entries</span>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>entries</span>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">
            &lt;
          </button>
          <button className="px-3 py-1 border rounded bg-gray-200 text-black font-semibold">
            1
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;
