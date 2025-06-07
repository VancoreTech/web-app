import React, { useState } from "react";
import SideNav from "../components/SideNav";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { statsData, salesData, recentOrders } from "../data/dashboardData";
import { ChevronDown, Bell, Calendar, EyeOff } from "lucide-react";

const Dashboard = () => {
  const [dateRange] = useState("Last 7 days");
  const [period] = useState("24/01/2024 - 24/02/2024");

  const StatCard = ({ svg, label, value, change, period }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[180px] border border-[#E3E0E0]">
      <div className="flex items-center mb-4">
        <span className="inline-block mr-3">{svg}</span>
        <span className="text-gray-500 text-base font-medium">{label}</span>
      </div>
      <div className="mb-2">
        <span className="text-2xl font-bold text-black">{value}</span>
      </div>
      <div className="flex items-center text-sm">
        {change < 0 ? (
          <span className="flex items-center text-[#E23A3A] font-semibold mr-1">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 12V4M8 4L4 8M8 4l4 4"
                stroke="#E23A3A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {Math.abs(change)}%
          </span>
        ) : (
          <span className="flex items-center text-[#06A433] font-semibold mr-1">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 4v8m0-8l4 4M8 4L4 8"
                stroke="#06A433"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {Math.abs(change)}%
          </span>
        )}
        <span className="text-gray-500 font-normal ml-1">vs 7 days ago</span>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* <SideNav /> */}
      <div className="flex-1 overflow-y-auto ml- bg-[#F9FAFB]">
        {/* Top Navigation Bar */}
        <div className="px-8 py-4 flex justify-between items-center bg-[#F9FAFB]">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm">
            <span className="text-gray-400">Pages</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-500" />
            </button>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Susan"
              alt="Susan Sheidu"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                Susan Sheidu
              </div>
              <div className="text-xs text-gray-500">susanstore.vancore</div>
            </div>
            <button className="ml-2">
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Registration Progress Banner */}
        <div className="mx-8 mb-6 p-6 rounded-lg bg-[#0A0B1E] text-white">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">
                Finalize your registration process
              </h2>
              <p className="text-gray-400 text-sm">
                Finish setting up your account and take full control of your
                business
              </p>
            </div>
            <button className="flex items-center gap-2 bg-white text-[#5704E3] font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
              <span className="inline-block align-middle">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99956 2.5C7.99956 1.94688 7.55268 1.5 6.99956 1.5C6.44643 1.5 5.99956 1.94688 5.99956 2.5V7H1.49956C0.946433 7 0.499557 7.44688 0.499557 8C0.499557 8.55313 0.946433 9 1.49956 9H5.99956V13.5C5.99956 14.0531 6.44643 14.5 6.99956 14.5C7.55268 14.5 7.99956 14.0531 7.99956 13.5V9H12.4996C13.0527 9 13.4996 8.55313 13.4996 8C13.4996 7.44688 13.0527 7 12.4996 7H7.99956V2.5Z"
                    fill="#5704E3"
                  />
                </svg>
              </span>
              <span>Fund wallet</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-[50%] flex gap-1 mt-4">
            <div className="h-1 w-1/5 rounded bg-[#0066FF]"></div>
            <div className="h-1 w-1/5 rounded bg-[#0066FF]"></div>
            <div className="h-1 w-1/5 rounded bg-gray-600"></div>
            <div className="h-1 w-1/5 rounded bg-gray-600"></div>
            <div className="h-1 w-1/5 rounded bg-gray-600"></div>
          </div>
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold mb-0">Welcome, Susan</h1>
              <p className="text-sm text-gray-500 mt-1">
                Here is how your business has been doing lately
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center border border-gray-200 bg-white px-4 py-2 rounded-lg text-gray-700 text-sm font-medium shadow-sm focus:outline-none">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                Last 7 days
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </button>
              <button className="flex items-center border border-gray-200 bg-white px-4 py-2 rounded-lg text-gray-700 text-sm font-medium shadow-sm focus:outline-none">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                24/01/2024 - 24/02/2024
              </button>
            </div>
          </div>

          {/* Purple Banner Section */}
          <div className="flex gap-6 mb-8">
            {/* Wallet Card */}
            <div
              className="rounded-2xl pt-14 pb-1 px-6 text-white relative"
              style={{
                background: "linear-gradient(135deg, #5704E3 0%, #0A6DEE 100%)",
                width: "40%",
              }}
            >
              <div className="mb-4">
                {/* SVG Icon */}
                <span className="block mb-2">
                  <svg
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.25"
                      width="44.5"
                      height="44.5"
                      rx="13.75"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.0833 19.6695C30.0361 19.6667 29.9858 19.6656 29.9325 19.6662H27.8283C26.105 19.6662 24.6308 21.0228 24.6308 22.7912C24.6308 24.5595 26.1058 25.9162 27.8283 25.9162H29.9325C29.9858 25.9167 30.0364 25.9156 30.0841 25.9128C30.4383 25.8915 30.7727 25.7421 31.0249 25.4925C31.2771 25.2429 31.4299 24.9101 31.455 24.5562C31.4583 24.5062 31.4583 24.452 31.4583 24.402V21.1803C31.4583 21.1303 31.4583 21.0762 31.455 21.0262C31.4299 20.6722 31.2771 20.3394 31.0249 20.0898C30.7727 19.8402 30.4375 19.6908 30.0833 19.6695ZM27.6441 23.6245C28.0875 23.6245 28.4466 23.2512 28.4466 22.7912C28.4466 22.3312 28.0875 21.9578 27.6441 21.9578C27.2 21.9578 26.8408 22.3312 26.8408 22.7912C26.8408 23.2512 27.2 23.6245 27.6441 23.6245Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.9316 27.1667C29.9604 27.1655 29.989 27.1712 30.0153 27.1832C30.0415 27.1952 30.0645 27.2132 30.0824 27.2358C30.1004 27.2583 30.1127 27.2848 30.1185 27.3131C30.1243 27.3413 30.1234 27.3705 30.1157 27.3983C29.9491 27.9917 29.6832 28.4983 29.2574 28.9233C28.6332 29.5483 27.8424 29.8242 26.8657 29.9558C25.9157 30.0833 24.7032 30.0833 23.1716 30.0833H21.4116C19.8799 30.0833 18.6666 30.0833 17.7174 29.9558C16.7407 29.8242 15.9499 29.5475 15.3257 28.9242C14.7024 28.3 14.4257 27.5092 14.2941 26.5325C14.1666 25.5825 14.1666 24.37 14.1666 22.8383V22.745C14.1666 21.2133 14.1666 20 14.2941 19.05C14.4257 18.0733 14.7024 17.2825 15.3257 16.6583C15.9499 16.035 16.7407 15.7583 17.7174 15.6267C18.6674 15.5 19.8799 15.5 21.4116 15.5H23.1716C24.7032 15.5 25.9166 15.5 26.8657 15.6275C27.8424 15.7592 28.6332 16.0358 29.2574 16.6592C29.6832 17.0858 29.9491 17.5917 30.1157 18.185C30.1234 18.2128 30.1243 18.242 30.1185 18.2703C30.1127 18.2985 30.1004 18.325 30.0824 18.3476C30.0645 18.3701 30.0415 18.3882 30.0153 18.4002C29.989 18.4122 29.9604 18.4178 29.9316 18.4167H27.8282C25.4641 18.4167 23.3807 20.2833 23.3807 22.7917C23.3807 25.3 25.4641 27.1667 27.8282 27.1667H29.9316ZM17.2916 18.8333C17.1258 18.8333 16.9668 18.8992 16.8496 19.0164C16.7324 19.1336 16.6666 19.2926 16.6666 19.4583C16.6666 19.6241 16.7324 19.7831 16.8496 19.9003C16.9668 20.0175 17.1258 20.0833 17.2916 20.0833H20.6249C20.7907 20.0833 20.9496 20.0175 21.0668 19.9003C21.184 19.7831 21.2499 19.6241 21.2499 19.4583C21.2499 19.2926 21.184 19.1336 21.0668 19.0164C20.9496 18.8992 20.7907 18.8333 20.6249 18.8333H17.2916Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-lg font-medium">Wallet balance</span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <span className="text-2xl tracking-widest font-mono">
                    ************
                  </span>
                  <EyeOff className="w-5 h-5 ml-2 text-white/70 cursor-pointer" />
                </div>
                <button className="bg-white text-[#5704E3] font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition flex items-center gap-2">
                  <span className="inline-block align-middle">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99956 2.5C7.99956 1.94688 7.55268 1.5 6.99956 1.5C6.44643 1.5 5.99956 1.94688 5.99956 2.5V7H1.49956C0.946433 7 0.499557 7.44688 0.499557 8C0.499557 8.55313 0.946433 9 1.49956 9H5.99956V13.5C5.99956 14.0531 6.44643 14.5 6.99956 14.5C7.55268 14.5 7.99956 14.0531 7.99956 13.5V9H12.4996C13.0527 9 13.4996 8.55313 13.4996 8C13.4996 7.44688 13.0527 7 12.4996 7H7.99956V2.5Z"
                        fill="#5704E3"
                      />
                    </svg>
                  </span>
                  <span>Fund wallet</span>
                </button>
              </div>
            </div>
            {/* Promo Card with Carousel Dots in Parent Div */}
            <div className="flex flex-col" style={{ height: "100%" }}>
              <div
                className="flex-1 rounded-2xl px-6 pt-6 relative flex flex-row items-center min-h-[180px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #5704E3 100%)",
                  height: "100%",
                }}
              >
                <div className="flex flex-col justify-center items-start w-[60%] h-full text-left">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Grow your business faster with{" "}
                    <span className="text-[#5704E3] font-semibold">
                      Vancore
                    </span>
                  </h2>
                  <p className="text-base text-gray-700">
                    Take your business to the next level with powerful tools
                    designed for growth
                  </p>
                </div>
                <div className="flex justify-end items-center w-[40%] h-full">
                  <img
                    src="/promoImage.png"
                    alt="Growth"
                    className="h-48 object-contain mb-0 pb-0"
                  />
                </div>
              </div>
              {/* Carousel Dots below the promo card, outside the border */}
              <div className="flex justify-center mt-2">
                <span className="w-2 h-2 rounded-full bg-[#5704E3] inline-block mx-1"></span>
                <span className="w-2 h-2 rounded-full bg-[#D9D9D9] inline-block mx-1"></span>
                <span className="w-2 h-2 rounded-full bg-[#D9D9D9] inline-block mx-1"></span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <StatCard
              svg={
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7861)">
                    <rect
                      x="6"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#06A433"
                    />
                    <rect
                      x="6.5"
                      y="2.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#E3E0E0"
                    />
                  </g>
                  <path
                    d="M38.25 20H34.5C34.5 18.8065 34.0259 17.6619 33.182 16.818C32.3381 15.9741 31.1935 15.5 30 15.5C28.8065 15.5 27.6619 15.9741 26.818 16.818C25.9741 17.6619 25.5 18.8065 25.5 20H21.75C21.3522 20 20.9706 20.158 20.6893 20.4393C20.408 20.7206 20.25 21.1022 20.25 21.5V32.75C20.25 33.1478 20.408 33.5294 20.6893 33.8107C20.9706 34.092 21.3522 34.25 21.75 34.25H38.25C38.6478 34.25 39.0294 34.092 39.3107 33.8107C39.592 33.5294 39.75 33.1478 39.75 32.75V21.5C39.75 21.1022 39.592 20.7206 39.3107 20.4393C39.0294 20.158 38.6478 20 38.25 20ZM30 17C30.7956 17 31.5587 17.3161 32.1213 17.8787C32.6839 18.4413 33 19.2044 33 20H27C27 19.2044 27.3161 18.4413 27.8787 17.8787C28.4413 17.3161 29.2044 17 30 17ZM38.25 32.75H21.75V21.5H25.5V23C25.5 23.1989 25.579 23.3897 25.7197 23.5303C25.8603 23.671 26.0511 23.75 26.25 23.75C26.4489 23.75 26.6397 23.671 26.7803 23.5303C26.921 23.3897 27 23.1989 27 23V21.5H33V23C33 23.1989 33.079 23.3897 33.2197 23.5303C33.3603 23.671 33.5511 23.75 33.75 23.75C33.9489 23.75 34.1397 23.671 34.2803 23.5303C34.421 23.3897 34.5 23.1989 34.5 23V21.5H38.25V32.75Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7861"
                      x="0"
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
                        result="effect1_dropShadow_3032_7861"
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
                        result="effect1_dropShadow_3032_7861"
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
                        result="effect2_dropShadow_3032_7861"
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
                        in2="effect1_dropShadow_3032_7861"
                        result="effect2_dropShadow_3032_7861"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7861"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Orders"
              value={statsData.orders.value}
              change={statsData.orders.change}
              period={statsData.orders.period}
            />
            <StatCard
              svg={
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7878)">
                    <rect
                      x="6.29999"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#CE7507"
                    />
                    <rect
                      x="6.79999"
                      y="2.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#E3E0E0"
                    />
                  </g>
                  <path
                    d="M28.9922 28.8053C29.9974 28.1361 30.7606 27.1612 31.1688 26.0248C31.5771 24.8883 31.6088 23.6506 31.2592 22.4947C30.9096 21.3389 30.1974 20.3262 29.2278 19.6064C28.2581 18.8867 27.0826 18.498 25.875 18.498C24.6675 18.498 23.492 18.8867 22.5223 19.6064C21.5527 20.3262 20.8404 21.3389 20.4909 22.4947C20.1413 23.6506 20.173 24.8883 20.5813 26.0248C20.9895 27.1612 21.7527 28.1361 22.7579 28.8053C20.9396 29.4755 19.3867 30.7156 18.331 32.3406C18.2755 32.4231 18.237 32.5158 18.2176 32.6133C18.1982 32.7108 18.1985 32.8111 18.2182 32.9085C18.238 33.0059 18.277 33.0984 18.3328 33.1807C18.3886 33.2629 18.4603 33.3332 18.5435 33.3875C18.6268 33.4418 18.72 33.479 18.8177 33.497C18.9155 33.5149 19.0159 33.5133 19.113 33.4921C19.2101 33.4709 19.302 33.4307 19.3834 33.3737C19.4649 33.3167 19.5341 33.244 19.5872 33.16C20.2682 32.1126 21.2001 31.2519 22.2981 30.6561C23.3962 30.0603 24.6257 29.7482 25.875 29.7482C27.1244 29.7482 28.3539 30.0603 29.452 30.6561C30.55 31.2519 31.4819 32.1126 32.1629 33.16C32.2729 33.3235 32.4428 33.4371 32.6359 33.4763C32.829 33.5156 33.0298 33.4772 33.1949 33.3695C33.3599 33.2619 33.476 33.0936 33.5179 32.9011C33.5599 32.7085 33.5244 32.5072 33.4191 32.3406C32.3634 30.7156 30.8105 29.4755 28.9922 28.8053ZM21.75 24.1253C21.75 23.3095 21.992 22.512 22.4452 21.8336C22.8985 21.1552 23.5427 20.6265 24.2965 20.3143C25.0502 20.0021 25.8796 19.9204 26.6798 20.0796C27.48 20.2388 28.215 20.6316 28.7919 21.2085C29.3688 21.7854 29.7616 22.5204 29.9208 23.3206C30.0799 24.1208 29.9983 24.9502 29.686 25.7039C29.3738 26.4576 28.8451 27.1019 28.1668 27.5551C27.4884 28.0084 26.6909 28.2503 25.875 28.2503C24.7814 28.2491 23.7329 27.8141 22.9596 27.0408C22.1863 26.2675 21.7513 25.219 21.75 24.1253ZM41.4507 33.3785C41.2841 33.4871 41.0812 33.5251 40.8865 33.4841C40.6919 33.4432 40.5215 33.3266 40.4129 33.16C39.7327 32.112 38.801 31.2509 37.7027 30.6554C36.6044 30.0598 35.3744 29.7487 34.125 29.7503C33.9261 29.7503 33.7354 29.6713 33.5947 29.5307C33.4541 29.39 33.375 29.1992 33.375 29.0003C33.375 28.8014 33.4541 28.6107 33.5947 28.47C33.7354 28.3293 33.9261 28.2503 34.125 28.2503C34.7325 28.2498 35.3324 28.115 35.8817 27.8557C36.4311 27.5965 36.9164 27.2191 37.303 26.7505C37.6896 26.2819 37.9679 25.7337 38.1181 25.1451C38.2683 24.5565 38.2866 23.942 38.1718 23.3455C38.0569 22.749 37.8117 22.1852 37.4537 21.6944C37.0958 21.2036 36.6338 20.798 36.1008 20.5064C35.5679 20.2149 34.9771 20.0447 34.3708 20.0079C33.7644 19.9711 33.1574 20.0687 32.5932 20.2938C32.5012 20.3335 32.4021 20.3545 32.3019 20.3553C32.2017 20.3562 32.1023 20.3369 32.0096 20.2987C31.917 20.2605 31.8329 20.2041 31.7624 20.1328C31.6919 20.0616 31.6364 19.9769 31.5992 19.8839C31.562 19.7908 31.5438 19.6912 31.5457 19.591C31.5476 19.4908 31.5696 19.392 31.6103 19.3004C31.6511 19.2089 31.7098 19.1264 31.7829 19.0579C31.8561 18.9894 31.9422 18.9362 32.0363 18.9016C33.3277 18.3866 34.764 18.368 36.0682 18.8496C37.3725 19.3311 38.4522 20.2785 39.099 21.5092C39.7459 22.7398 39.9141 24.1664 39.5713 25.5137C39.2284 26.861 38.3987 28.0336 37.2422 28.8053C39.0605 29.4755 40.6134 30.7156 41.6691 32.3406C41.7777 32.5072 41.8158 32.7102 41.7748 32.9048C41.7338 33.0994 41.6172 33.2698 41.4507 33.3785Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7878"
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
                        result="effect1_dropShadow_3032_7878"
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
                        result="effect1_dropShadow_3032_7878"
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
                        result="effect2_dropShadow_3032_7878"
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
                        in2="effect1_dropShadow_3032_7878"
                        result="effect2_dropShadow_3032_7878"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7878"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Customers"
              value={statsData.customers.value}
              change={statsData.customers.change}
              period={statsData.customers.period}
            />
            <StatCard
              svg={
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7895)">
                    <rect
                      x="6.59998"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#A907AB"
                    />
                  </g>
                  <path
                    d="M39.97 20.2017L31.72 15.6876C31.4996 15.5658 31.2518 15.502 31 15.502C30.7482 15.502 30.5004 15.5658 30.28 15.6876L22.03 20.2036C21.7944 20.3325 21.5977 20.5223 21.4605 20.7532C21.3233 20.984 21.2506 21.2475 21.25 21.5161V30.4823C21.2506 30.7509 21.3233 31.0144 21.4605 31.2452C21.5977 31.4761 21.7944 31.6659 22.03 31.7948L30.28 36.3108C30.5004 36.4326 30.7482 36.4965 31 36.4965C31.2518 36.4965 31.4996 36.4326 31.72 36.3108L39.97 31.7948C40.2056 31.6659 40.4023 31.4761 40.5395 31.2452C40.6767 31.0144 40.7494 30.7509 40.75 30.4823V21.517C40.7499 21.248 40.6774 20.9839 40.5402 20.7525C40.403 20.5211 40.206 20.3308 39.97 20.2017ZM31 17.0001L38.5319 21.1251L31 25.2501L23.4681 21.1251L31 17.0001ZM22.75 22.4376L30.25 26.542V34.5848L22.75 30.4833V22.4376ZM31.75 34.5848V26.5458L39.25 22.4376V30.4795L31.75 34.5848Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7895"
                      x="0.599976"
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
                        result="effect1_dropShadow_3032_7895"
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
                        result="effect1_dropShadow_3032_7895"
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
                        result="effect2_dropShadow_3032_7895"
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
                        in2="effect1_dropShadow_3032_7895"
                        result="effect2_dropShadow_3032_7895"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7895"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Products sold"
              value={statsData.productsSold.value}
              change={statsData.productsSold.change}
              period={statsData.productsSold.period}
            />
            <StatCard
              svg={
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7912)">
                    <rect
                      x="6.89996"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#0B89B3"
                    />
                    <rect
                      x="7.39996"
                      y="2.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#E3E0E0"
                    />
                  </g>
                  <path
                    d="M35.875 27.5H34V24.5H35.875C36.5425 24.5 37.195 24.3021 37.7501 23.9312C38.3051 23.5604 38.7376 23.0333 38.9931 22.4166C39.2485 21.7999 39.3154 21.1213 39.1852 20.4666C39.0549 19.8119 38.7335 19.2105 38.2615 18.7385C37.7895 18.2665 37.1881 17.9451 36.5334 17.8149C35.8787 17.6846 35.2001 17.7515 34.5834 18.0069C33.9667 18.2624 33.4396 18.6949 33.0688 19.25C32.6979 19.805 32.5 20.4575 32.5 21.125V23H29.5V21.125C29.5 20.4575 29.3021 19.805 28.9312 19.25C28.5604 18.6949 28.0333 18.2624 27.4166 18.0069C26.7999 17.7515 26.1213 17.6846 25.4666 17.8149C24.8119 17.9451 24.2105 18.2665 23.7385 18.7385C23.2665 19.2105 22.9451 19.8119 22.8149 20.4666C22.6846 21.1213 22.7515 21.7999 23.0069 22.4166C23.2624 23.0333 23.6949 23.5604 24.25 23.9312C24.805 24.3021 25.4575 24.5 26.125 24.5H28V27.5H26.125C25.4575 27.5 24.805 27.6979 24.25 28.0688C23.6949 28.4396 23.2624 28.9667 23.0069 29.5834C22.7515 30.2001 22.6846 30.8787 22.8149 31.5334C22.9451 32.1881 23.2665 32.7895 23.7385 33.2615C24.2105 33.7335 24.8119 34.0549 25.4666 34.1852C26.1213 34.3154 26.7999 34.2485 27.4166 33.9931C28.0333 33.7376 28.5604 33.3051 28.9312 32.7501C29.3021 32.195 29.5 31.5425 29.5 30.875V29H32.5V30.875C32.5 31.2458 32.6979 31.6084 33.0688 31.9167C33.4396 32.225 33.9667 32.4225 34.5834 32.4225C35.2001 32.4225 35.8787 32.225 36.5334 31.9167C37.1881 31.6084 37.7895 31.1315 38.2615 30.5834C38.7335 30.0354 39.0549 29.3568 39.1852 28.6725C39.3154 27.9883 39.2485 27.3097 38.9931 26.655C38.7376 26.0003 38.3051 25.4045 37.7501 24.9325C37.195 24.4605 36.5425 24.1391 35.875 24.0089ZM34 21.125C34 20.7542 34.11 20.3916 34.316 20.0833C34.522 19.775 34.8149 19.5346 35.1575 19.3927C35.5001 19.2508 35.8771 19.2137 36.2408 19.286C36.6045 19.3584 36.9386 19.537 37.2008 19.7992C37.4631 20.0614 37.6416 20.3955 37.714 20.7592C37.7863 21.1229 37.7492 21.4999 37.6073 21.8425C37.4654 22.1851 37.225 22.478 36.9167 22.684C36.6084 22.89 36.2458 23 35.875 23H34V21.125ZM24.25 21.125C24.25 20.6277 24.4475 20.1508 24.7992 19.7992C25.1508 19.4475 25.6277 19.25 26.125 19.25C26.6223 19.25 27.0992 19.4475 27.4508 19.7992C27.8025 20.1508 28 20.6277 28 21.125V23H26.125C25.6277 23 25.1508 22.8025 24.7992 22.4508C24.4475 22.0992 24.25 21.6223 24.25 21.125ZM28 30.875C28 31.2458 27.89 31.6084 27.684 31.9167C27.478 32.225 27.1851 32.4654 26.8425 32.6073C26.4999 32.7492 26.1229 32.7863 25.7592 32.714C25.3955 32.6416 25.0614 32.4631 24.7992 32.2008C24.537 31.9386 24.3584 31.6045 24.286 31.2408C24.2137 30.8771 24.2508 30.5001 24.3927 30.1575C24.5346 29.8149 24.775 29.522 25.0833 29.316C25.3916 29.11 25.7542 29 26.125 29H28V30.875ZM29.5 24.5H32.5V27.5H29.5V24.5ZM35.875 32.75C35.3777 32.75 34.9008 32.5525 34.5492 32.2008C34.1975 31.8492 34 31.3723 34 30.875V29H35.875C36.3723 29 36.8492 29.1975 37.2008 29.5492C37.5525 29.9008 37.75 30.3777 37.75 30.875C37.75 31.3723 37.5525 31.8492 37.2008 32.2008C36.8492 32.5525 36.3723 32.75 35.875 32.75Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7912"
                      x="0.899963"
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
                        result="effect1_dropShadow_3032_7912"
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
                        result="effect1_dropShadow_3032_7912"
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
                        result="effect2_dropShadow_3032_7912"
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
                        in2="effect1_dropShadow_3032_7912"
                        result="effect2_dropShadow_3032_7912"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7912"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Websites visit"
              value={statsData.websitesVisit.value}
              change={statsData.websitesVisit.change}
              period={statsData.websitesVisit.period}
            />
            <StatCard
              svg={
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7930)">
                    <rect
                      x="6"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#0B49AC"
                    />
                    <rect
                      x="6.5"
                      y="2.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#E3E0E0"
                    />
                  </g>
                  <path
                    d="M38.25 20H23.25C23.0511 20 22.8603 19.921 22.7197 19.7803C22.579 19.6397 22.5 19.4489 22.5 19.25C22.5 19.0511 22.579 18.8603 22.7197 18.7197C22.8603 18.579 23.0511 18.5 23.25 18.5H36C36.1989 18.5 36.3897 18.421 36.5303 18.2803C36.671 18.1397 36.75 17.9489 36.75 17.75C36.75 17.5511 36.671 17.3603 36.5303 17.2197C36.3897 17.079 36.1989 17 36 17H23.25C22.6533 17 22.081 17.2371 21.659 17.659C21.2371 18.081 21 18.6533 21 19.25V31.25C21 31.8467 21.2371 32.419 21.659 32.841C22.081 33.2629 22.6533 33.5 23.25 33.5H38.25C38.6478 33.5 39.0294 33.342 39.3107 33.0607C39.592 32.7794 39.75 32.3978 39.75 32V21.5C39.75 21.1022 39.592 20.7206 39.3107 20.4393C39.0294 20.158 38.6478 20 38.25 20ZM38.25 32H23.25C23.0511 32 22.8603 31.921 22.7197 31.7803C22.579 31.6397 22.5 31.4489 22.5 31.25V21.3716C22.7408 21.4569 22.9945 21.5004 23.25 21.5H38.25V32ZM33.75 26.375C33.75 26.1525 33.816 25.935 33.9396 25.75C34.0632 25.565 34.2389 25.4208 34.4445 25.3356C34.65 25.2505 34.8762 25.2282 35.0945 25.2716C35.3127 25.315 35.5132 25.4222 35.6705 25.5795C35.8278 25.7368 35.935 25.9373 35.9784 26.1555C36.0218 26.3738 35.9995 26.6 35.9144 26.8055C35.8292 27.0111 35.685 27.1868 35.5 27.3104C35.315 27.434 35.0975 27.5 34.875 27.5C34.5766 27.5 34.2905 27.3815 34.0795 27.1705C33.8685 26.9595 33.75 26.6734 33.75 26.375Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7930"
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_3032_7930"
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
                        result="effect1_dropShadow_3032_7930"
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
                        result="effect2_dropShadow_3032_7930"
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
                        in2="effect1_dropShadow_3032_7930"
                        result="effect2_dropShadow_3032_7930"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7930"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Total Sales"
              value={statsData.totalSales.value}
              change={statsData.totalSales.change}
              period={statsData.totalSales.period}
            />
            <StatCard
              svg={
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7945)">
                    <rect
                      x="6.29999"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#06AB64"
                    />
                    <rect
                      x="6.79999"
                      y="2.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#E3E0E0"
                    />
                  </g>
                  <path
                    d="M40.8975 19.6249C40.7895 19.5575 40.6662 19.5187 40.5391 19.5121C40.412 19.5056 40.2853 19.5315 40.1709 19.5874C36.1462 21.5561 33.2719 20.6336 30.2334 19.6605C27.0459 18.6396 23.7413 17.5849 19.1756 19.8142C19.0481 19.8754 18.9404 19.9715 18.8651 20.0912C18.7898 20.211 18.7499 20.3496 18.75 20.4911V31.7346C18.75 31.8618 18.7823 31.987 18.844 32.0983C18.9057 32.2096 18.9947 32.3033 19.1027 32.3708C19.2106 32.4382 19.3339 32.477 19.461 32.4836C19.588 32.4903 19.7147 32.4645 19.8291 32.4086C23.8538 30.4399 26.7281 31.3624 29.7712 32.3355C31.575 32.9121 33.4125 33.4999 35.49 33.4999C37.0922 33.4999 38.8397 33.1511 40.8253 32.1817C40.9514 32.1202 41.0577 32.0244 41.1322 31.9054C41.2066 31.7865 41.2461 31.649 41.2463 31.5086V20.2652C41.2474 20.1376 41.2159 20.0118 41.1549 19.8998C41.0939 19.7878 41.0053 19.6931 40.8975 19.6249ZM39.75 31.0314C35.9438 32.7349 33.1641 31.8461 30.2288 30.9077C28.425 30.3311 26.5875 29.7433 24.51 29.7433C23.0504 29.7504 21.6057 30.0368 20.2538 30.5871V20.9683C24.06 19.2649 26.8397 20.1536 29.775 21.0921C32.7103 22.0305 35.7319 22.9999 39.75 21.4146V31.0314ZM30 22.9999C29.4067 22.9999 28.8266 23.1758 28.3333 23.5055C27.8399 23.8351 27.4554 24.3036 27.2284 24.8518C27.0013 25.4 26.9419 26.0032 27.0576 26.5851C27.1734 27.1671 27.4591 27.7016 27.8787 28.1212C28.2982 28.5407 28.8328 28.8265 29.4147 28.9422C29.9967 29.058 30.5999 28.9986 31.1481 28.7715C31.6962 28.5444 32.1648 28.1599 32.4944 27.6666C32.8241 27.1732 33 26.5932 33 25.9999C33 25.2042 32.6839 24.4412 32.1213 23.8786C31.5587 23.3159 30.7956 22.9999 30 22.9999ZM30 27.4999C29.7033 27.4999 29.4133 27.4119 29.1666 27.2471C28.92 27.0823 28.7277 26.848 28.6142 26.5739C28.5006 26.2998 28.4709 25.9982 28.5288 25.7072C28.5867 25.4163 28.7296 25.149 28.9393 24.9392C29.1491 24.7294 29.4164 24.5866 29.7074 24.5287C29.9983 24.4708 30.2999 24.5005 30.574 24.6141C30.8481 24.7276 31.0824 24.9198 31.2472 25.1665C31.412 25.4132 31.5 25.7032 31.5 25.9999C31.5 26.3977 31.342 26.7792 31.0607 27.0605C30.7794 27.3418 30.3978 27.4999 30 27.4999ZM23.25 22.9999V27.4999C23.25 27.6988 23.171 27.8896 23.0303 28.0302C22.8897 28.1709 22.6989 28.2499 22.5 28.2499C22.3011 28.2499 22.1103 28.1709 21.9697 28.0302C21.829 27.8896 21.75 27.6988 21.75 27.4999V22.9999C21.75 22.801 21.829 22.6102 21.9697 22.4695C22.1103 22.3289 22.3011 22.2499 22.5 22.2499C22.6989 22.2499 22.8897 22.3289 23.0303 22.4695C23.171 22.6102 23.25 22.801 23.25 22.9999ZM36.75 28.9999V24.4999C36.75 24.301 36.829 24.1102 36.9697 23.9695C37.1103 23.8289 37.3011 23.7499 37.5 23.7499C37.6989 23.7499 37.8897 23.8289 38.0303 23.9695C38.171 24.1102 38.25 24.301 38.25 24.4999V28.9999C38.25 29.1988 38.171 29.3896 38.0303 29.5302C37.8897 29.6709 37.6989 29.7499 37.5 29.7499C37.3011 29.7499 37.1103 29.6709 36.9697 29.5302C36.829 29.3896 36.75 29.1988 36.75 28.9999Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7945"
                      x="0.299988"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_3032_7945"
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
                        result="effect1_dropShadow_3032_7945"
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
                        result="effect2_dropShadow_3032_7945"
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
                        in2="effect1_dropShadow_3032_7945"
                        result="effect2_dropShadow_3032_7945"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7945"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Total Settled"
              value={statsData.totalSettled.value}
              change={statsData.totalSettled.change}
              period={statsData.totalSettled.period}
            />
            <StatCard
              svg={
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7960)">
                    <rect
                      x="6.59998"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#B81E06"
                    />
                  </g>
                  <path
                    d="M31 26.5C30.0717 26.5 29.1815 26.8687 28.5251 27.5251C27.8687 28.1815 27.5 29.0717 27.5 30C27.5 30.9283 27.8687 31.8185 28.5251 32.4749C29.1815 33.1313 30.0717 33.5 31 33.5C31.9283 33.5 32.8185 33.1313 33.4749 32.4749C34.1313 31.8185 34.5 30.9283 34.5 30C34.5 29.0717 34.1313 28.1815 33.4749 27.5251C32.8185 26.8687 31.9283 26.5 31 26.5ZM29.5 30C29.5 29.6022 29.658 29.2206 29.9393 28.9393C30.2206 28.658 30.6022 28.5 31 28.5C31.3978 28.5 31.7794 28.658 32.0607 28.9393C32.342 29.2206 32.5 29.6022 32.5 30C32.5 30.3978 32.342 30.7794 32.0607 31.0607C31.7794 31.342 31.3978 31.5 31 31.5C30.6022 31.5 30.2206 31.342 29.9393 31.0607C29.658 30.7794 29.5 30.3978 29.5 30Z"
                    fill="white"
                  />
                  <path
                    d="M36.526 19.1162L33.347 14.6592L21.658 23.9972L21.01 23.9902V24.0002H20.5V36.0002H41.5V24.0002H40.538L38.624 18.4012L36.526 19.1162ZM38.425 24.0002H28.397L35.866 21.4542L37.388 20.9672L38.425 24.0002ZM34.55 19.7902L26.84 22.4182L32.946 17.5402L34.55 19.7902ZM22.5 32.1692V27.8292C22.9222 27.6802 23.3057 27.4386 23.6223 27.1221C23.939 26.8056 24.1808 26.4223 24.33 26.0002H37.67C37.8191 26.4225 38.0609 26.806 38.3775 27.1227C38.6942 27.4393 39.0777 27.6811 39.5 27.8302V32.1702C39.0777 32.3193 38.6942 32.561 38.3775 32.8777C38.0609 33.1944 37.8191 33.5779 37.67 34.0002H24.332C24.1822 33.5779 23.94 33.1943 23.623 32.8775C23.3061 32.5608 22.9224 32.3188 22.5 32.1692Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7960"
                      x="0.599976"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_3032_7960"
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
                        result="effect1_dropShadow_3032_7960"
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
                        result="effect2_dropShadow_3032_7960"
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
                        in2="effect1_dropShadow_3032_7960"
                        result="effect2_dropShadow_3032_7960"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7960"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Total Owed"
              value={statsData.totalOwed.value}
              change={statsData.totalOwed.change}
              period={statsData.totalOwed.period}
            />
            <StatCard
              svg={
                <svg
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_3032_7978)">
                    <rect
                      x="6.89996"
                      y="2"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#63AE01"
                    />
                    <rect
                      x="7.39996"
                      y="2.5"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#E3E0E0"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.924 25.7502H37.23C35.806 25.7502 34.749 26.8092 34.749 28.0002C34.749 29.1912 35.806 30.2502 37.229 30.2502H39.947C40.153 30.2372 40.242 30.0982 40.249 30.0142V25.9862C40.242 25.9022 40.153 25.7632 39.947 25.7512L39.924 25.7502ZM39.85 24.2502C39.9167 24.2495 39.98 24.2508 40.04 24.2542C40.91 24.3072 41.681 24.9642 41.746 25.8822C41.75 25.9422 41.75 26.0072 41.75 26.0672V29.9332C41.75 29.9932 41.75 30.0582 41.746 30.1182C41.681 31.0362 40.91 31.6932 40.039 31.7472C39.9797 31.7498 39.9163 31.7508 39.849 31.7502H37.231C35.086 31.7502 33.25 30.1222 33.25 28.0002C33.25 25.8782 35.086 24.2502 37.23 24.2502H39.85Z"
                    fill="white"
                  />
                  <path
                    d="M38 28C38 28.2652 37.8946 28.5196 37.7071 28.7071C37.5196 28.8946 37.2652 29 37 29C36.7348 29 36.4804 28.8946 36.2929 28.7071C36.1054 28.5196 36 28.2652 36 28C36 27.7348 36.1054 27.4804 36.2929 27.2929C36.4804 27.1054 36.7348 27 37 27C37.2652 27 37.5196 27.1054 37.7071 27.2929C37.8946 27.4804 38 27.7348 38 28Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.85 24.25C39.9167 24.2494 39.98 24.2507 40.04 24.254C40.265 24.267 40.483 24.321 40.685 24.41C40.578 22.804 40.283 21.566 39.359 20.641C38.61 19.893 37.661 19.561 36.489 19.403L36.447 19.398L36.415 19.375L32.679 16.898C32.0308 16.4755 31.2738 16.2505 30.5 16.2505C29.7262 16.2505 28.9692 16.4755 28.321 16.898L24.586 19.375L24.553 19.398L24.511 19.403C23.339 19.561 22.39 19.893 21.641 20.641C20.893 21.39 20.561 22.339 20.403 23.511C20.25 24.651 20.25 26.106 20.25 27.944V28.056C20.25 29.894 20.25 31.35 20.403 32.489C20.561 33.661 20.893 34.61 21.641 35.359C22.39 36.107 23.339 36.439 24.511 36.597C25.651 36.75 27.106 36.75 28.944 36.75H32.056C33.894 36.75 35.35 36.75 36.489 36.597C37.661 36.439 38.61 36.107 39.359 35.359C40.283 34.434 40.578 33.196 40.685 31.589C40.4817 31.6797 40.2663 31.7324 40.039 31.747C39.9797 31.7497 39.9163 31.7507 39.849 31.75H39.168C39.054 33.092 38.797 33.8 38.298 34.298C37.875 34.721 37.295 34.975 36.289 35.11C35.262 35.248 33.907 35.25 32 35.25H29C27.093 35.25 25.739 35.248 24.71 35.11C23.705 34.975 23.125 34.721 22.702 34.298C22.279 33.875 22.025 33.295 21.89 32.289C21.752 31.262 21.75 29.907 21.75 28C21.75 26.093 21.752 24.739 21.89 23.71C22.025 22.705 22.279 22.125 22.702 21.702C23.125 21.279 23.705 21.025 24.711 20.89C25.739 20.752 27.093 20.75 29 20.75H32C33.907 20.75 35.262 20.752 36.29 20.89C37.295 21.025 37.875 21.279 38.298 21.702C38.797 22.2 39.054 22.909 39.168 24.25H39.85ZM28.944 19.25H32.056C32.5727 19.25 33.0593 19.251 33.516 19.253L31.85 18.148C31.05 17.618 29.95 17.618 29.15 18.148L27.483 19.253C27.9403 19.2504 28.427 19.2494 28.943 19.25"
                    fill="white"
                  />
                  <path
                    d="M25 23.25C24.8011 23.25 24.6103 23.329 24.4697 23.4697C24.329 23.6103 24.25 23.8011 24.25 24C24.25 24.1989 24.329 24.3897 24.4697 24.5303C24.6103 24.671 24.8011 24.75 25 24.75H29C29.1989 24.75 29.3897 24.671 29.5303 24.5303C29.671 24.3897 29.75 24.1989 29.75 24C29.75 23.8011 29.671 23.6103 29.5303 23.4697C29.3897 23.329 29.1989 23.25 29 23.25H25Z"
                    fill="white"
                  />
                  <path
                    d="M38 28C38 28.2652 37.8946 28.5196 37.7071 28.7071C37.5196 28.8946 37.2652 29 37 29C36.7348 29 36.4804 28.8946 36.2929 28.7071C36.1054 28.5196 36 28.2652 36 28C36 27.7348 36.1054 27.4804 36.2929 27.2929C36.4804 27.1054 36.7348 27 37 27C37.2652 27 37.5196 27.1054 37.7071 27.2929C37.8946 27.4804 38 27.7348 38 28Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_dd_3032_7978"
                      x="0.899963"
                      y="0"
                      width="60"
                      height="60"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_3032_7978"
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
                        result="effect1_dropShadow_3032_7978"
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
                        result="effect2_dropShadow_3032_7978"
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
                        in2="effect1_dropShadow_3032_7978"
                        result="effect2_dropShadow_3032_7978"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3032_7978"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              label="Offline Sales"
              value={statsData.offlineSales.value}
              change={statsData.offlineSales.change}
              period={statsData.offlineSales.period}
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-8 bg-white border border-[#E3E0E0] rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Quick actions</h2>
            <div className="grid grid-cols-4 gap-4">
              {/* Create new order */}
              <button className="flex items-center w-full bg-[#F8FDFF] hover:bg-[#e3f8ff] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4">
                  <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="34"
                      height="34"
                      rx="17"
                      fill="#E3F8FF"
                    />
                    <path
                      d="M22.5 13.5H20C20 12.7044 19.6839 11.9413 19.1213 11.3787C18.5587 10.8161 17.7956 10.5 17 10.5C16.2044 10.5 15.4413 10.8161 14.8787 11.3787C14.3161 11.9413 14 12.7044 14 13.5H11.5C11.2348 13.5 10.9804 13.6054 10.7929 13.7929C10.6054 13.9804 10.5 14.2348 10.5 14.5V22C10.5 22.2652 10.6054 22.5196 10.7929 22.7071C10.9804 22.8946 11.2348 23 11.5 23H22.5C22.7652 23 23.0196 22.8946 23.2071 22.7071C23.3946 22.5196 23.5 22.2652 23.5 22V14.5C23.5 14.2348 23.3946 13.9804 23.2071 13.7929C23.0196 13.6054 22.7652 13.5 22.5 13.5ZM17 11.5C17.5304 11.5 18.0391 11.7107 18.4142 12.0858C18.7893 12.4609 19 12.9696 19 13.5H15C15 12.9696 15.2107 12.4609 15.5858 12.0858C15.9609 11.7107 16.4696 11.5 17 11.5ZM22.5 22H11.5V14.5H14V15.5C14 15.6326 14.0527 15.7598 14.1464 15.8536C14.2402 15.9473 14.3674 16 14.5 16C14.6326 16 14.7598 15.9473 14.8536 15.8536C14.9473 15.7598 15 15.6326 15 15.5V14.5H19V15.5C19 15.6326 19.0527 15.7598 19.1464 15.8536C19.2402 15.9473 19.3674 16 19.5 16C19.6326 16 19.7598 15.9473 19.8536 15.8536C19.9473 15.7598 20 15.6326 20 15.5V14.5H22.5V22Z"
                      fill="#06799F"
                    />
                  </svg>
                </span>
                <span className="text-lg font-medium text-gray-900">
                  Create new order
                </span>
              </button>
              {/* Add a new product */}
              <button className="flex items-center w-full bg-[#FFF8F7] hover:bg-[#fee3df] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4">
                  <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="34"
                      height="34"
                      rx="17"
                      fill="#FEE3DF"
                    />
                    <path
                      d="M22.98 13.6341L17.48 10.6248C17.333 10.5436 17.1679 10.501 17 10.501C16.8321 10.501 16.667 10.5436 16.52 10.6248L11.02 13.6354C10.8629 13.7213 10.7318 13.8479 10.6403 14.0018C10.5489 14.1557 10.5004 14.3313 10.5 14.5104V20.4879C10.5004 20.6669 10.5489 20.8426 10.6403 20.9965C10.7318 21.1504 10.8629 21.277 11.02 21.3629L16.52 24.3735C16.667 24.4547 16.8321 24.4973 17 24.4973C17.1679 24.4973 17.333 24.4547 17.48 24.3735L22.98 21.3629C23.1371 21.277 23.2682 21.1504 23.3597 20.9965C23.4511 20.8426 23.4996 20.6669 23.5 20.4879V14.511C23.4999 14.3317 23.4516 14.1556 23.3601 14.0013C23.2686 13.8471 23.1373 13.7202 22.98 13.6341ZM17 11.4998L22.0212 14.2498L17 16.9998L11.9787 14.2498L17 11.4998ZM11.5 15.1248L16.5 17.861V23.2229L11.5 20.4885V15.1248ZM17.5 23.2229V17.8635L22.5 15.1248V20.486L17.5 23.2229Z"
                      fill="#D92208"
                    />
                  </svg>
                </span>
                <span className="text-lg font-medium text-gray-900">
                  Add a new product
                </span>
              </button>
              {/* Add a new customer */}
              <button className="flex items-center w-full bg-[#FEFFEA] hover:bg-[#fafdbe] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4">
                  <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="34"
                      height="34"
                      rx="17"
                      fill="#FAFDBE"
                    />
                    <path
                      d="M16.3282 19.3701C16.9983 18.9239 17.507 18.274 17.7792 17.5163C18.0514 16.7587 18.0725 15.9336 17.8395 15.163C17.6064 14.3924 17.1316 13.7173 16.4852 13.2374C15.8388 12.7576 15.0551 12.4985 14.25 12.4985C13.445 12.4985 12.6613 12.7576 12.0149 13.2374C11.3685 13.7173 10.8936 14.3924 10.6606 15.163C10.4275 15.9336 10.4487 16.7587 10.7208 17.5163C10.993 18.274 11.5018 18.9239 12.1719 19.3701C10.9597 19.8168 9.92447 20.6436 9.22066 21.7269C9.18367 21.7819 9.15797 21.8437 9.14507 21.9087C9.13217 21.9737 9.13231 22.0406 9.14549 22.1055C9.15868 22.1705 9.18464 22.2321 9.22187 22.287C9.25909 22.3418 9.30684 22.3886 9.36235 22.4248C9.41785 22.461 9.47999 22.4858 9.54516 22.4978C9.61033 22.5098 9.67724 22.5087 9.74198 22.4946C9.80672 22.4805 9.86801 22.4536 9.92229 22.4156C9.97657 22.3776 10.0228 22.3292 10.0582 22.2732C10.5121 21.5749 11.1334 21.0011 11.8654 20.6039C12.5975 20.2067 13.4172 19.9987 14.25 19.9987C15.0829 19.9987 15.9026 20.2067 16.6346 20.6039C17.3667 21.0011 17.9879 21.5749 18.4419 22.2732C18.5152 22.3822 18.6285 22.4579 18.7573 22.4841C18.886 22.5102 19.0199 22.4846 19.1299 22.4129C19.2399 22.3411 19.3173 22.2289 19.3453 22.1005C19.3733 21.9722 19.3496 21.838 19.2794 21.7269C18.5756 20.6436 17.5403 19.8168 16.3282 19.3701ZM11.5 16.2501C11.5 15.7062 11.6613 15.1745 11.9635 14.7222C12.2657 14.27 12.6952 13.9175 13.1977 13.7094C13.7001 13.5012 14.2531 13.4468 14.7865 13.5529C15.32 13.659 15.81 13.9209 16.1946 14.3055C16.5792 14.6901 16.8411 15.1801 16.9472 15.7136C17.0533 16.247 16.9988 16.7999 16.7907 17.3024C16.5826 17.8049 16.2301 18.2344 15.7778 18.5366C15.3256 18.8388 14.7939 19.0001 14.25 19.0001C13.5209 18.9992 12.8219 18.7092 12.3064 18.1937C11.7909 17.6781 11.5009 16.9791 11.5 16.2501ZM24.6338 22.4188C24.5227 22.4912 24.3874 22.5166 24.2577 22.4893C24.1279 22.462 24.0144 22.3842 23.9419 22.2732C23.4885 21.5745 22.8673 21.0005 22.1351 20.6034C21.4029 20.2064 20.583 19.9989 19.75 20.0001C19.6174 20.0001 19.4902 19.9474 19.3965 19.8536C19.3027 19.7598 19.25 19.6327 19.25 19.5001C19.25 19.3674 19.3027 19.2403 19.3965 19.1465C19.4902 19.0527 19.6174 19.0001 19.75 19.0001C20.155 18.9997 20.5549 18.9099 20.9212 18.737C21.2874 18.5642 21.6109 18.3126 21.8687 18.0002C22.1264 17.6878 22.312 17.3223 22.4121 16.9299C22.5122 16.5375 22.5244 16.1278 22.4478 15.7301C22.3713 15.3325 22.2078 14.9566 21.9692 14.6294C21.7305 14.3022 21.4225 14.0318 21.0672 13.8375C20.7119 13.6431 20.3181 13.5296 19.9139 13.5051C19.5096 13.4806 19.105 13.5457 18.7288 13.6957C18.6674 13.7222 18.6014 13.7361 18.5346 13.7367C18.4678 13.7373 18.4015 13.7244 18.3398 13.699C18.278 13.6735 18.222 13.6359 18.175 13.5884C18.128 13.5409 18.091 13.4845 18.0661 13.4224C18.0413 13.3604 18.0292 13.294 18.0305 13.2272C18.0317 13.1604 18.0464 13.0945 18.0736 13.0335C18.1007 12.9724 18.1399 12.9174 18.1886 12.8718C18.2374 12.8261 18.2948 12.7907 18.3575 12.7676C19.2184 12.4242 20.176 12.4119 21.0455 12.7329C21.915 13.0539 22.6348 13.6855 23.066 14.5059C23.4973 15.3264 23.6094 16.2774 23.3808 17.1756C23.1523 18.0739 22.5991 18.8556 21.8282 19.3701C23.0403 19.8168 24.0756 20.6436 24.7794 21.7269C24.8518 21.838 24.8772 21.9733 24.8499 22.103C24.8226 22.2328 24.7448 22.3464 24.6338 22.4188Z"
                      fill="#8C9205"
                    />
                  </svg>
                </span>
                <span className="text-lg font-medium text-gray-900">
                  Add a new customer
                </span>
              </button>
              {/* Edit items */}
              <button className="flex items-center w-full bg-[#F6FFF6] hover:bg-[#dcffd9] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="34"
                      height="34"
                      rx="17"
                      fill="#DCFFD9"
                    />
                    <path
                      d="M20.1427 13.488L21.0774 12.554C21.3252 12.3062 21.6612 12.167 22.0117 12.167C22.3621 12.167 22.6982 12.3062 22.946 12.554C23.1938 12.8018 23.333 13.1379 23.333 13.4883C23.333 13.8388 23.1938 14.1749 22.946 14.4227L22.012 15.3573M20.1427 13.488L14.6534 18.9773C13.9567 19.6747 13.608 20.0227 13.3707 20.4473C13.1334 20.872 12.8947 21.874 12.6667 22.8333C13.6254 22.6053 14.628 22.3667 15.0527 22.1293C15.4774 21.892 15.826 21.5433 16.5227 20.8467L22.012 15.3573M20.1427 13.488L22.012 15.3573M17.3334 22.8333H21.3334"
                      stroke="#19C00B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-lg font-medium text-gray-900">
                  Edit items
                </span>
              </button>
            </div>
          </div>

          {/* Sales Overview */}
          <div className="mb-8 bg-white border border-[#E3E0E0] rounded-2xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  Sales overview
                </h2>
                <div className="text-gray-400 text-base font-normal">
                  Last year
                </div>
              </div>
              <div className="flex items-center gap-8">
                {/* Legend */}
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-2 rounded-full"
                      style={{ background: "#A259FF" }}
                    ></span>
                    <span className="text-[#7C7C7C] text-sm font-medium">
                      Online sales
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-2 rounded-full"
                      style={{ background: "#1B6AFF" }}
                    ></span>
                    <span className="text-[#7C7C7C] text-sm font-medium">
                      Offline sales
                    </span>
                  </span>
                </div>
                {/* Date Selector */}
                <button className="flex items-center border border-[#E3E0E0] bg-white px-5 py-2 rounded-lg text-gray-700 text-base font-medium shadow-sm ml-2">
                  <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                  Last year
                  <ChevronDown className="w-5 h-5 ml-2 text-gray-400" />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart
                data={salesData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#F2F2F2" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 16, fill: "#7C7C7C" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v) => (v >= 1000000 ? `${v / 1000000}m` : v)}
                  tick={{ fontSize: 16, fill: "#7C7C7C" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 6000000]}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    boxShadow: "0 2px 16px #0002",
                    border: "none",
                    fontSize: 18,
                    background: "#fff",
                    padding: 20,
                  }}
                  formatter={(value, name, props) => [
                    `₦${value.toLocaleString()}`,
                    name === "onlineSales" ? "Online sales" : "Offline sales",
                  ]}
                  labelStyle={{
                    color: "#7C7C7C",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                  labelFormatter={(label) => `${label} 00:00`}
                  itemStyle={{ display: "flex", alignItems: "center", gap: 8 }}
                  separator={" "}
                />
                <Line
                  type="monotone"
                  dataKey="onlineSales"
                  stroke="#A259FF"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 7 }}
                  name="Online sales"
                />
                <Line
                  type="monotone"
                  dataKey="offlineSales"
                  stroke="#1B6AFF"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 7 }}
                  name="Offline sales"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Orders */}
          <div className="mb-8 bg-white border border-[#E3E0E0] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  Recent orders
                </h2>
                <div className="text-gray-400 text-base font-normal">
                  See all your recent orders here
                </div>
              </div>
              <button className="flex items-center border border-[#E3E0E0] bg-white px-4 py-2 rounded-lg text-gray-700 text-base font-medium shadow-sm">
                <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                See all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-base">
                <thead>
                  <tr className="text-left text-gray-400 uppercase text-xs border-b border-[#F0F0F0]">
                    <th className="py-3 pr-4 font-semibold">
                      ORDER NO{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      ORDER NAME{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      AMOUNT{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      DATE{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      PAYMENT{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      SHIPPING{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      STATUS{" "}
                      <span className="inline-block align-middle ml-1">
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
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.slice(0, 5).map((order) => (
                    <tr
                      key={order.orderId}
                      className="border-b last:border-0 border-[#F0F0F0]"
                    >
                      <td className="py-4 pr-4 font-mono text-gray-700 align-middle">
                        {order.orderId}
                      </td>
                      <td className="py-4 pr-4 text-gray-700 align-middle">
                        {order.orderName}
                      </td>
                      <td className="py-4 pr-4 text-gray-900 font-semibold align-middle">
                        {order.amount}
                      </td>
                      <td className="py-4 pr-4 text-gray-700 align-middle">
                        {order.date}
                      </td>
                      <td className="py-4 pr-4 align-middle">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                            order.payment === "Paid"
                              ? "bg-[#E7FAF0] text-[#1BA97A]"
                              : "bg-[#FEECEC] text-[#D92208]"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              order.payment === "Paid"
                                ? "bg-[#1BA97A]"
                                : "bg-[#D92208]"
                            }`}
                          ></span>
                          {order.payment}
                        </span>
                      </td>
                      <td className="py-4 pr-4 align-middle">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-[#FFF6E7] text-[#E2A500]">
                          <span className="w-2 h-2 rounded-full bg-[#E2A500]"></span>
                          {order.shipping}
                        </span>
                      </td>
                      <td className="py-4 pr-4 align-middle">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-[#E7FAF0] text-[#1BA97A]">
                          <span className="w-2 h-2 rounded-full bg-[#1BA97A]"></span>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Referral Section */}
          <div className="mb-8 border border-[#E3E0E0] rounded-lg bg-white p-6">
            <div
              className="rounded-xl border border-[#E3E0E0] p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, #D9A2EA 0%, #B230D9 100%)",
              }}
            >
              {/*Referral code*/}
              <div className="z-10 flex-1">
                <div className="text-white text-sm mb-2">
                  Share your referral code
                </div>
                <div className="flex items-center mb-4 gap-3">
                  <span className="text-xl md:text-xl font-bold text-white break-all">
                    susansheiduref453727/vancore
                  </span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 59 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.333984"
                      y="0.858398"
                      width="57.9167"
                      height="57.9167"
                      rx="9.26667"
                      fill="white"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M24.659 25.1834V21.9401C24.659 20.6426 24.659 19.9939 24.9115 19.4983C25.1336 19.0624 25.488 18.708 25.9239 18.4859C26.4195 18.2334 27.0682 18.2334 28.3657 18.2334H37.169C38.4665 18.2334 39.1152 18.2334 39.6108 18.4859C40.0467 18.708 40.4011 19.0624 40.6232 19.4983C40.8757 19.9939 40.8757 20.6426 40.8757 21.9401V30.7434C40.8757 32.0409 40.8757 32.6896 40.6232 33.1851C40.4011 33.6211 40.0467 33.9755 39.6108 34.1976C39.1152 34.4501 38.4665 34.4501 37.169 34.4501H33.9257M21.4157 41.4001H30.219C31.5165 41.4001 32.1652 41.4001 32.6608 41.1476C33.0967 40.9255 33.4511 40.5711 33.6732 40.1351C33.9257 39.6396 33.9257 38.9909 33.9257 37.6934V28.8901C33.9257 27.5926 33.9257 26.9439 33.6732 26.4483C33.4511 26.0124 33.0967 25.658 32.6608 25.4359C32.1652 25.1834 31.5165 25.1834 30.219 25.1834H21.4157C20.1182 25.1834 19.4695 25.1834 18.9739 25.4359C18.538 25.658 18.1836 26.0124 17.9615 26.4483C17.709 26.9439 17.709 27.5926 17.709 28.8901V37.6934C17.709 38.9909 17.709 39.6396 17.9615 40.1351C18.1836 40.5711 18.538 40.9255 18.9739 41.1476C19.4695 41.4001 20.1182 41.4001 21.4157 41.4001Z"
                      stroke="white"
                      stroke-width="1.7375"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 59 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.517517"
                      y="0.858398"
                      width="57.9167"
                      height="57.9167"
                      rx="9.26667"
                      fill="white"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M26.1843 31.2744L32.7771 35.1162M32.7675 24.5175L26.1843 28.3593M38.1634 23.0599C38.1634 24.6592 36.8669 25.9557 35.2675 25.9557C33.6682 25.9557 32.3717 24.6592 32.3717 23.0599C32.3717 21.4606 33.6682 20.1641 35.2675 20.1641C36.8669 20.1641 38.1634 21.4606 38.1634 23.0599ZM26.58 29.8168C26.58 31.4162 25.2835 32.7127 23.6842 32.7127C22.0849 32.7127 20.7884 31.4162 20.7884 29.8168C20.7884 28.2175 22.0849 26.921 23.6842 26.921C25.2835 26.921 26.58 28.2175 26.58 29.8168ZM38.1634 36.5738C38.1634 38.1731 36.8669 39.4696 35.2675 39.4696C33.6682 39.4696 32.3717 38.1731 32.3717 36.5738C32.3717 34.9745 33.6682 33.678 35.2675 33.678C36.8669 33.678 38.1634 34.9745 38.1634 36.5738Z"
                      stroke="white"
                      stroke-width="1.7375"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <img
                src="/coin.png"
                alt="coins"
                className="absolute right-6 bottom-0 h-28 w-auto z-0 pointer-events-none select-none"
                style={{ maxWidth: "140px" }}
              />
            </div>
            {/*How to earn*/}
            <div className="bg-white mt-4 p-6 border border-[#E3E0E0] rounded-lg">
              <div className="mb-6">
                <div className="text-xl font-semibold mb-1">How to earn</div>
                <div className="text-gray-500 text-base">
                  Refer your friends and earn using your referral code.
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="mb-2">
                    {/* Step 1 SVG */}
                    <svg
                      width="45"
                      height="46"
                      viewBox="0 0 45 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8163 34.7424C13.7673 35.7914 11.9344 35.7932 10.8854 34.7405C10.3609 34.2179 10.0718 33.5192 10.0718 32.776C10.0718 32.0328 10.3609 31.336 10.8854 30.8096L19.0456 22.6494C17.9391 22.1212 16.7326 21.8154 15.4705 21.8154C13.2447 21.8154 11.1485 22.6828 9.57322 24.2581L6.95262 26.8787C5.37544 28.454 4.50993 30.5483 4.50993 32.776C4.50993 35.0037 5.37914 37.0998 6.95076 38.6733C8.52609 40.2486 10.6204 41.116 12.8499 41.116C15.0757 41.116 17.1719 40.2486 18.7472 38.6733L21.3678 36.0527C22.945 34.4774 23.8105 32.3831 23.8105 30.1554C23.8105 28.8933 23.5028 27.6868 22.9765 26.5803L14.8163 34.7424Z"
                        fill="url(#paint0_linear_1707_14410)"
                      />
                      <path
                        d="M38.976 6.65069C37.4007 5.07536 35.3064 4.20801 33.0768 4.20801C30.851 4.20801 28.7549 5.07536 27.1796 6.65069L24.559 9.2713C22.9818 10.8466 22.1163 12.9409 22.1163 15.1686C22.1163 16.4307 22.4239 17.6372 22.9503 18.7436L27.0202 14.6737C27.2778 14.4161 31.1105 10.5834 31.1105 10.5834C31.635 10.059 32.3337 9.76984 33.0768 9.76984C33.82 9.76984 34.5169 10.059 35.0432 10.5853C35.5677 11.1079 35.8568 11.8066 35.8568 12.5498C35.8568 13.293 35.5677 13.9899 35.0432 14.5162C35.0432 14.5162 31.2198 18.3396 30.9529 18.6065L26.883 22.6764C27.9895 23.2046 29.196 23.5104 30.4581 23.5104C32.6839 23.5104 34.7801 22.643 36.3554 21.0677L38.976 18.4471C40.5532 16.8718 41.4187 14.7775 41.4187 12.5498C41.4168 10.3203 40.5476 8.22417 38.976 6.65069Z"
                        fill="url(#paint1_linear_1707_14410)"
                      />
                      <g opacity="0.35">
                        <path
                          d="M16.0134 32.3907C15.3017 32.3907 14.5901 32.1202 14.047 31.5771C12.961 30.4911 12.961 28.7323 14.047 27.6462L27.0203 14.6729C28.1064 13.5869 29.8652 13.5869 30.9512 14.6729C32.0373 15.759 32.0373 17.5178 30.9512 18.6038L17.9779 31.5771C17.4368 32.1202 16.7251 32.3907 16.0134 32.3907Z"
                          fill="url(#paint2_linear_1707_14410)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1707_14410"
                          x1="14.1602"
                          y1="21.8154"
                          x2="14.1602"
                          y2="41.116"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14410"
                          x1="31.7675"
                          y1="4.20801"
                          x2="31.7675"
                          y2="23.5104"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1707_14410"
                          x1="22.4991"
                          y1="13.8584"
                          x2="22.4991"
                          y2="32.3907"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1">
                    Invite your friend to join Vancore using your referral code
                  </div>
                </div>
                {/* Connecting SVG after Step 1 */}
                <span className="hidden md:block">
                  <svg
                    width="131"
                    height="23"
                    viewBox="0 0 131 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.662537 22.2988C33.675 -1.888 85.2209 -10.573 129.817 22.2989"
                      stroke="url(#paint0_linear_1707_14436)"
                      stroke-width="1.15833"
                      stroke-linecap="round"
                      stroke-dasharray="3.47 3.47"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1707_14436"
                        x1="12.825"
                        y1="7.2361"
                        x2="128.658"
                        y2="7.2361"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#1C2C48" stop-opacity="0" />
                        <stop offset="1" stop-color="#096CED" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="mb-2">
                    {/* Step 2 SVG */}
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M30.58 43.5105H15.7534C12.6825 43.5105 10.1935 41.0215 10.1935 37.9505V8.29728C10.1935 5.22632 12.6825 2.7373 15.7534 2.7373H30.58C33.651 2.7373 36.14 5.22632 36.14 8.29728V37.9505C36.14 41.0215 33.651 43.5105 30.58 43.5105Z"
                        fill="url(#paint0_linear_1707_14419)"
                      />
                      <path
                        d="M26.8733 36.0986C26.5286 36.0986 19.8047 36.0986 19.46 36.0986C18.437 36.0986 17.6067 36.9289 17.6067 37.952C17.6067 38.975 18.437 39.8053 19.46 39.8053C19.8047 39.8053 26.5286 39.8053 26.8733 39.8053C27.8964 39.8053 28.7266 38.975 28.7266 37.952C28.7266 36.9289 27.8964 36.0986 26.8733 36.0986Z"
                        fill="url(#paint1_linear_1707_14419)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1707_14419"
                          x1="23.1667"
                          y1="2.7373"
                          x2="23.1667"
                          y2="43.5105"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14419"
                          x1="23.1667"
                          y1="36.0986"
                          x2="23.1667"
                          y2="39.8053"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1">
                    Your friend signs up using your referral code
                  </div>
                </div>
                {/* Connecting SVG after Step 2 */}
                <span className="hidden md:block">
                  <svg
                    width="132"
                    height="23"
                    viewBox="0 0 132 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.46667 0.846725C34.4792 25.0335 86.025 33.7185 130.621 0.84657"
                      stroke="url(#paint0_linear_1707_14437)"
                      stroke-width="1.15833"
                      stroke-linecap="round"
                      stroke-dasharray="3.47 3.47"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1707_14437"
                        x1="13.6292"
                        y1="15.9094"
                        x2="129.463"
                        y2="15.9094"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#1C2C48" stop-opacity="0" />
                        <stop offset="1" stop-color="#096CED" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="mb-2">
                    {/* Step 3 SVG */}
                    <svg
                      width="45"
                      height="46"
                      viewBox="0 0 45 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.307 19.4184C25.8326 19.4184 25.3581 19.2368 24.9967 18.8754C24.2721 18.1507 24.2721 16.9794 24.9967 16.2548L26.307 14.9445C27.0076 14.2439 27.938 13.8584 28.9276 13.8584H30.0137C30.0137 11.8142 31.6761 10.1518 33.7203 10.1518V8.29845C33.7203 6.25423 35.3828 4.5918 37.427 4.5918H39.2803C40.3034 4.5918 41.1336 5.42023 41.1336 6.44512C41.1336 7.47001 40.3034 8.29845 39.2803 8.29845H37.427V10.1518C37.427 12.196 35.7646 13.8584 33.7203 13.8584C33.7203 15.9026 32.0579 17.5651 30.0137 17.5651H28.9276L27.6173 18.8754C27.2559 19.2368 26.7815 19.4184 26.307 19.4184Z"
                        fill="url(#paint0_linear_1707_14426)"
                      />
                      <path
                        opacity="0.35"
                        d="M27.5948 31.1047L14.6215 18.1314C13.8969 17.4067 12.7256 17.4067 12.0009 18.1314C11.3708 18.7615 11.3226 19.7178 11.7915 20.4369L6.09625 36.0567C5.28449 38.2826 7.44362 40.4417 9.66946 39.63L25.2911 33.9347C25.5969 34.1349 25.9343 34.2683 26.2864 34.2683C26.7608 34.2683 27.2353 34.0867 27.5967 33.7253C28.3176 33.0025 28.3176 31.8293 27.5948 31.1047Z"
                        fill="url(#paint1_linear_1707_14426)"
                      />
                      <path
                        d="M32.7936 41.6586C34.3289 41.6586 35.5736 40.414 35.5736 38.8786C35.5736 37.3433 34.3289 36.0986 32.7936 36.0986C31.2583 36.0986 30.0136 37.3433 30.0136 38.8786C30.0136 40.414 31.2583 41.6586 32.7936 41.6586Z"
                        fill="url(#paint2_linear_1707_14426)"
                      />
                      <path
                        d="M40.2068 21.2719C41.7422 21.2719 42.9868 20.0272 42.9868 18.4919C42.9868 16.9566 41.7422 15.7119 40.2068 15.7119C38.6715 15.7119 37.4268 16.9566 37.4268 18.4919C37.4268 20.0272 38.6715 21.2719 40.2068 21.2719Z"
                        fill="url(#paint3_linear_1707_14426)"
                      />
                      <path
                        d="M6.84707 17.5639C8.38241 17.5639 9.62706 16.3192 9.62706 14.7839C9.62706 13.2485 8.38241 12.0039 6.84707 12.0039C5.31172 12.0039 4.06708 13.2485 4.06708 14.7839C4.06708 16.3192 5.31172 17.5639 6.84707 17.5639Z"
                        fill="url(#paint4_linear_1707_14426)"
                      />
                      <path
                        d="M27.2332 8.29728C28.7686 8.29728 30.0132 7.05264 30.0132 5.51729C30.0132 3.98195 28.7686 2.7373 27.2332 2.7373C25.6979 2.7373 24.4532 3.98195 24.4532 5.51729C24.4532 7.05264 25.6979 8.29728 27.2332 8.29728Z"
                        fill="url(#paint5_linear_1707_14426)"
                      />
                      <path
                        d="M12.405 4.5918C10.8704 4.5918 9.62683 5.83723 9.62683 7.37179C9.62683 8.90634 10.8723 10.1518 12.4068 10.1518H13.8691C15.6205 10.1518 17.0401 11.5714 17.0401 13.3228V15.7118C17.0401 16.7348 17.8704 17.5651 18.8935 17.5651C19.9165 17.5651 20.7468 16.7348 20.7468 15.7118V12.0051C20.7468 7.9111 17.4275 4.5918 13.3335 4.5918H12.405Z"
                        fill="url(#paint6_linear_1707_14426)"
                      />
                      <path
                        d="M41.1334 31.4668C41.1334 33.0014 39.888 34.245 38.3535 34.245C36.8189 34.245 35.5735 32.9995 35.5735 31.465V30.0027C35.5735 28.2513 34.1538 26.8317 32.4024 26.8317H30.0135C28.9904 26.8317 28.1602 26.0014 28.1602 24.9783C28.1602 23.9553 28.9904 23.125 30.0135 23.125H33.7201C37.8141 23.125 41.1334 26.4443 41.1334 30.5383V31.4668Z"
                        fill="url(#paint7_linear_1707_14426)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1707_14426"
                          x1="32.7934"
                          y1="4.5918"
                          x2="32.7934"
                          y2="19.4184"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14426"
                          x1="17.0294"
                          y1="17.5879"
                          x2="17.0294"
                          y2="39.8046"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1707_14426"
                          x1="32.7936"
                          y1="36.0986"
                          x2="32.7936"
                          y2="41.6586"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1707_14426"
                          x1="40.2068"
                          y1="15.7119"
                          x2="40.2068"
                          y2="21.2719"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1707_14426"
                          x1="6.84707"
                          y1="12.0039"
                          x2="6.84707"
                          y2="17.5639"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1707_14426"
                          x1="27.2332"
                          y1="2.7373"
                          x2="27.2332"
                          y2="8.29728"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1707_14426"
                          x1="15.1868"
                          y1="4.5918"
                          x2="15.1868"
                          y2="17.5651"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1707_14426"
                          x1="34.6468"
                          y1="23.125"
                          x2="34.6468"
                          y2="34.245"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B90AEE" />
                          <stop offset="1" stop-color="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1">
                    Your friend completes their sign up successfully
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
