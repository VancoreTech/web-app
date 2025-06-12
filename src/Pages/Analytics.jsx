import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { StatsCard } from "../components/StatsCard";
import {
  Box,
  Calendar,
  ChevronDown,
  Command,
  LucideWallet2,
  Users2,
} from "lucide-react";
import graph from "../assets/graph.svg";

const bagIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.85 5H15.1C15.1 3.80653 14.6259 2.66193 13.782 1.81802C12.938 0.974106 11.7934 0.5 10.6 0.5C9.4065 0.5 8.26191 0.974106 7.418 1.81802C6.57408 2.66193 6.09998 3.80653 6.09998 5H2.34998C1.95215 5 1.57062 5.15804 1.28932 5.43934C1.00801 5.72064 0.849976 6.10218 0.849976 6.5V17.75C0.849976 18.1478 1.00801 18.5294 1.28932 18.8107C1.57062 19.092 1.95215 19.25 2.34998 19.25H18.85C19.2478 19.25 19.6293 19.092 19.9106 18.8107C20.1919 18.5294 20.35 18.1478 20.35 17.75V6.5C20.35 6.10218 20.1919 5.72064 19.9106 5.43934C19.6293 5.15804 19.2478 5 18.85 5ZM10.6 2C11.3956 2 12.1587 2.31607 12.7213 2.87868C13.2839 3.44129 13.6 4.20435 13.6 5H7.59998C7.59998 4.20435 7.91605 3.44129 8.47866 2.87868C9.04126 2.31607 9.80433 2 10.6 2ZM18.85 17.75H2.34998V6.5H6.09998V8C6.09998 8.19891 6.17899 8.38968 6.31965 8.53033C6.4603 8.67098 6.65106 8.75 6.84998 8.75C7.04889 8.75 7.23965 8.67098 7.38031 8.53033C7.52096 8.38968 7.59998 8.19891 7.59998 8V6.5H13.6V8C13.6 8.19891 13.679 8.38968 13.8196 8.53033C13.9603 8.67098 14.1511 8.75 14.35 8.75C14.5489 8.75 14.7397 8.67098 14.8803 8.53033C15.021 8.38968 15.1 8.19891 15.1 8V6.5H18.85V17.75Z"
      fill="white"
    />
  </svg>
);

function Analytics() {
  const dateOptions = [
    { label: "Last 7 days", value: 7 },
    { label: "Last 30 days", value: 30 },
    { label: "Last 90 days", value: 90 },
    { label: "Last 365 days", value: 365 },
    { label: "All time", value: "all" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(dateOptions[0]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="bg-[#FAFAFA] flex-1 overflow-y-auto">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Analytics</h2>
        <p className="text-[#666667] font-light text-sm">
          Set up shipping rates and tax rules in one place for accurate order
          totals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 pt-10">
          <StatsCard
            icon={LucideWallet2}
            title="Total revenue"
            value="₦230,000.00"
            change={-24.5}
            period="vs 7 days ago"
            color="bg-[#6E90C7]"
          />

          <StatsCard
            icon={Box}
            title="Total orders"
            value="222"
            change={+45}
            period="vs 7 days ago"
            color="bg-[#B867BA]"
          />
          <StatsCard
            icon={Users2}
            title="Total customers"
            value="140"
            change={-24.5}
            period="vs 7 days ago"
            color="bg-[#A4845D]"
          />
          <StatsCard
            icon={Command}
            title="Conversion rate"
            value="60%"
            change={+45}
            period="vs 7 days ago"
            color="bg-[#307F9A]"
          />
        </div>

        {/* Graph box */}
        <div
          style={{ boxShadow: "1px 2px 6px 0px #00000026" }}
          className="bg-white py-6 pl-6  rounded-lg"
        >
          <div className="flex justify-between mr-5">
            <div>
              <h3 className="text-[#101828] font-semibold text-xl mb-2">
                Sales overview
              </h3>
              <p className="text-[#667085] text-sm">{selectedOption.label}</p>
            </div>

            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-live="polite"
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Calendar /> <span>{selectedOption.label}</span>
                  <ChevronDown
                    className={`-mr-1  h-5 w-5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
            {isOpen && (
              <div
                className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {dateOptions.map((option) => (
                    <a
                      key={option.value}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleOptionClick(option);
                      }}
                      className={`block px-4 py-2 text-sm ${
                        selectedOption.value === option.value
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }
                `}
                      role="menuitem"
                      tabIndex="-1"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <img
            src={graph}
            alt={`Graph of sales overview`}
            className="block ml-auto"
          />
        </div>

        <div className=" mt-5 min-h-auto flex items-center justify-center gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 w-full min-w-5xl border border-gray-200">
            <div className="flex justify-between w-full mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Top 5 customers
                </h2>
                <p className="text-sm text-gray-500 mb-6">Last 7 days</p>
              </div>

              <div className="relative text-left">
                <button
                  type="button"
                  className="inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  // onClick={() => setIsOpen(!isOpen)}
                >
                  <Calendar /> <span>Last 7 days</span>
                  <ChevronDown
                    // className={`-mr-1  h-5 w-5 transition-transform duration-200 ${
                    //   isOpen ? "rotate-180" : ""
                    // }`}
                    className="-mr-1 h-5 w-5 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>

            <div className="space-y-7">
              <div className="flex gp-3 items-center text-sm mb-1">
                <span className="text-gray-800 ">Susan Sheidu </span>
                <div
                  className=" h-4 rounded-r-full ml-9 mr-2"
                  style={{
                    width: "60%",
                    background:
                      "linear-gradient(90deg, rgba(123, 168, 0, 0.4) 0%, #7BA800 100%)",
                  }}
                ></div>
                <span className="font-medium text-gray-900">₦16,800.00</span>
              </div>

              <div className="flex  items-center text-sm mb-1">
                <span className="text-gray-800">Temitope Alli </span>
                <div
                  className=" h-4 rounded-r-full ml-9 mr-2"
                  style={{
                    width: "55%",
                    background:
                      "linear-gradient(90deg, rgba(123, 168, 0, 0.4) 0%, #7BA800 100%)",
                  }}
                ></div>
                <span className="font-medium text-gray-900">₦16,800.00</span>
              </div>

              <div className="flex  items-center text-sm mb-1">
                <span className="text-gray-800">Danisa Duchess </span>
                <div
                  className=" h-4 rounded-r-full ml-5 mr-2"
                  style={{
                    width: "40%",
                    background:
                      "linear-gradient(90deg, rgba(123, 168, 0, 0.4) 0%, #7BA800 100%)",
                  }}
                ></div>
                <span className="font-medium text-gray-900">₦13,00.00</span>
              </div>

              <div className="flex  items-center text-sm mb-1">
                <span className="text-gray-800 mr-4">Babalola Koladey </span>
                <div
                  className=" h-4 rounded-r-full -ml-1 mr-2"
                  style={{
                    width: "25%",
                    background:
                      "linear-gradient(90deg, rgba(123, 168, 0, 0.4) 0%, #7BA800 100%)",
                  }}
                ></div>
                <span className="font-medium text-gray-900">₦9,750.00</span>
              </div>

              <div className="flex  items-center text-sm mb-1">
                <span className="text-gray-800 mr-4">Fisola Adeyemi</span>
                <div
                  className=" h-4 rounded-r-full ml-2 mr-2"
                  style={{
                    width: "15%",
                    background:
                      "linear-gradient(90deg, rgba(123, 168, 0, 0.4) 0%, #7BA800 100%)",
                  }}
                ></div>
                <span className="font-medium text-gray-900">₦6,000.00</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 w-4/5 max-w-lg border border-gray-200">
            <div className="flex justify-between w-full mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Best selling products
                </h2>
                <p className="text-sm text-gray-500 mb-6">Last 7 days</p>
              </div>

              <div className="relative text-left">
                <button
                  type="button"
                  className="inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  // onClick={() => setIsOpen(!isOpen)}
                >
                  <Calendar /> <span>Last 7 days</span>
                  <ChevronDown
                    // className={`-mr-1  h-5 w-5 transition-transform duration-200 ${
                    //   isOpen ? "rotate-180" : ""
                    // }`}
                    className={
                      "-mr-1  h-5 w-5 transition-transform duration-200"
                    }
                  />
                </button>
              </div>
            </div>
            <div className="w-full flex h-1.5 rounded-full overflow-hidden mb-6">
              <div
                className="bg-[#62B2FD] rounded-full"
                style={{ width: "40%" }}
              ></div>
              <div
                className="bg-[#F99BAB] rounded-full"
                style={{ width: "25%" }}
              ></div>
              <div
                className="bg-[#9F97F7] rounded-full"
                style={{ width: "20%" }}
              ></div>
              <div
                className="bg-[#FFD49B] rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center text-sm">
                <span className="w-3 h-2 rounded-full bg-[#62B2FD] mr-2 flex-shrink-0"></span>
                <span className="text-gray-800">Thread Muse</span>
                <span className="text-gray-500 ml-1">(231 Pieces Sold)</span>
              </div>

              <div className="flex items-center text-sm">
                <span className="w-3 h-2 rounded-full bg-[#F99BAB] mr-2 flex-shrink-0"></span>
                <span className="text-gray-800">Thrift Wears</span>
                <span className="text-gray-500 ml-1">(178 Pieces Sold)</span>
              </div>

              <div className="flex items-center text-sm">
                <span className="w-3 h-2 rounded-full bg-[#9F97F7] mr-2 flex-shrink-0"></span>
                <span className="text-gray-800">Flip Flops</span>
                <span className="text-gray-500 ml-1">(120 Pieces Sold)</span>
              </div>

              <div className="flex items-center text-sm">
                <span className="w-3 h-2 rounded-full bg-[#FFD49B] mr-2 flex-shrink-0"></span>
                <span className="text-gray-800">Sweat Pants</span>
                <span className="text-gray-500 ml-1">(99 Pieces Sold)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
