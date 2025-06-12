import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData, recentOrders } from "../data/data";
import {
  ChevronDown,
  Calendar,
  EyeOff,
  Wallet,
  Plus,
  Users2,
  Box,
  Command,
  PencilLine,
  ShoppingBag,
  Copy,
  Share2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import bg from "../assets/wallet-bg.png";
import { StatsCard } from "../components/StatsCard";
import { ArrowupDown } from "./Orders";
import dashboardwallet1 from "../assets/dashboardwallet1.svg";

const walletIcon2 = () => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 3H2.25C2.05109 3 1.86032 2.92098 1.71967 2.78033C1.57902 2.63968 1.5 2.44891 1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H15C15.1989 1.5 15.3897 1.42098 15.5303 1.28033C15.671 1.13968 15.75 0.948912 15.75 0.75C15.75 0.551088 15.671 0.360322 15.5303 0.21967C15.3897 0.0790178 15.1989 0 15 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V14.25C0 14.8467 0.237053 15.419 0.65901 15.841C1.08097 16.2629 1.65326 16.5 2.25 16.5H17.25C17.6478 16.5 18.0294 16.342 18.3107 16.0607C18.592 15.7794 18.75 15.3978 18.75 15V4.5C18.75 4.10218 18.592 3.72064 18.3107 3.43934C18.0294 3.15804 17.6478 3 17.25 3ZM17.25 15H2.25C2.05109 15 1.86032 14.921 1.71967 14.7803C1.57902 14.6397 1.5 14.4489 1.5 14.25V4.37156C1.74082 4.45693 1.9945 4.50037 2.25 4.5H17.25V15ZM12.75 9.375C12.75 9.1525 12.816 8.93499 12.9396 8.74998C13.0632 8.56498 13.2389 8.42078 13.4445 8.33564C13.65 8.25049 13.8762 8.22821 14.0945 8.27162C14.3127 8.31502 14.5132 8.42217 14.6705 8.5795C14.8278 8.73684 14.935 8.93729 14.9784 9.15552C15.0218 9.37375 14.9995 9.59995 14.9144 9.80552C14.8292 10.0111 14.685 10.1868 14.5 10.3104C14.315 10.434 14.0975 10.5 13.875 10.5C13.5766 10.5 13.2905 10.3815 13.0795 10.1705C12.8685 9.95952 12.75 9.67337 12.75 9.375Z"
        fill="white"
      />
    </svg>
  );
};
const WalletIcon3 = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.924 11.7502H18.23C16.806 11.7502 15.749 12.8092 15.749 14.0002C15.749 15.1912 16.806 16.2502 18.229 16.2502H20.947C21.153 16.2372 21.242 16.0982 21.249 16.0142V11.9862C21.242 11.9022 21.153 11.7632 20.947 11.7512L20.924 11.7502ZM20.85 10.2502C20.9167 10.2495 20.98 10.2508 21.04 10.2542C21.91 10.3072 22.681 10.9642 22.746 11.8822C22.75 11.9422 22.75 12.0072 22.75 12.0672V15.9332C22.75 15.9932 22.75 16.0582 22.746 16.1182C22.681 17.0362 21.91 17.6932 21.039 17.7472C20.9797 17.7498 20.9163 17.7508 20.849 17.7502H18.231C16.086 17.7502 14.25 16.1222 14.25 14.0002C14.25 11.8782 16.086 10.2502 18.23 10.2502H20.85Z"
        fill="white"
      />
      <path
        d="M19 14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15C17.7348 15 17.4804 14.8946 17.2929 14.7071C17.1054 14.5196 17 14.2652 17 14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.85 10.25C20.9167 10.2494 20.98 10.2507 21.04 10.254C21.265 10.267 21.483 10.321 21.685 10.41C21.578 8.80402 21.283 7.56603 20.359 6.64103C19.61 5.89302 18.661 5.56103 17.489 5.40303L17.447 5.39803L17.415 5.37503L13.679 2.89803C13.0308 2.47547 12.2738 2.25049 11.5 2.25049C10.7262 2.25049 9.96918 2.47547 9.321 2.89803L5.586 5.37503L5.553 5.39803L5.511 5.40303C4.339 5.56103 3.39 5.89302 2.641 6.64103C1.893 7.39003 1.561 8.33903 1.403 9.51102C1.25 10.651 1.25 12.106 1.25 13.944V14.056C1.25 15.894 1.25 17.35 1.403 18.489C1.561 19.661 1.893 20.61 2.641 21.359C3.39 22.107 4.339 22.439 5.511 22.597C6.651 22.75 8.106 22.75 9.944 22.75H13.056C14.894 22.75 16.35 22.75 17.489 22.597C18.661 22.439 19.61 22.107 20.359 21.359C21.283 20.434 21.578 19.196 21.685 17.589C21.4817 17.6797 21.2663 17.7324 21.039 17.747C20.9797 17.7497 20.9163 17.7507 20.849 17.75H20.168C20.054 19.092 19.797 19.8 19.298 20.298C18.875 20.721 18.295 20.975 17.289 21.11C16.262 21.248 14.907 21.25 13 21.25H10C8.093 21.25 6.739 21.248 5.71 21.11C4.705 20.975 4.125 20.721 3.702 20.298C3.279 19.875 3.025 19.295 2.89 18.289C2.752 17.262 2.75 15.907 2.75 14C2.75 12.093 2.752 10.739 2.89 9.71003C3.025 8.70503 3.279 8.12503 3.702 7.70203C4.125 7.27903 4.705 7.02503 5.711 6.89003C6.739 6.75203 8.093 6.75003 10 6.75003H13C14.907 6.75003 16.262 6.75203 17.29 6.89003C18.295 7.02503 18.875 7.27903 19.298 7.70203C19.797 8.20003 20.054 8.90903 20.168 10.25H20.85ZM9.944 5.25003H13.056C13.5727 5.25003 14.0593 5.25102 14.516 5.25303L12.85 4.14803C12.05 3.61803 10.95 3.61803 10.15 4.14803L8.483 5.25303C8.94033 5.25036 9.427 5.24936 9.943 5.25003"
        fill="white"
      />
      <path
        d="M6 9.25C5.80109 9.25 5.61032 9.32902 5.46967 9.46967C5.32902 9.61032 5.25 9.80109 5.25 10C5.25 10.1989 5.32902 10.3897 5.46967 10.5303C5.61032 10.671 5.80109 10.75 6 10.75H10C10.1989 10.75 10.3897 10.671 10.5303 10.5303C10.671 10.3897 10.75 10.1989 10.75 10C10.75 9.80109 10.671 9.61032 10.5303 9.46967C10.3897 9.32902 10.1989 9.25 10 9.25H6Z"
        fill="white"
      />
      <path
        d="M19 14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15C17.7348 15 17.4804 14.8946 17.2929 14.7071C17.1054 14.5196 17 14.2652 17 14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14Z"
        fill="white"
      />
    </svg>
  );
};
const ShoppingBagIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.25 5H14.5C14.5 3.80653 14.0259 2.66193 13.182 1.81802C12.3381 0.974106 11.1935 0.5 10 0.5C8.80653 0.5 7.66193 0.974106 6.81802 1.81802C5.97411 2.66193 5.5 3.80653 5.5 5H1.75C1.35218 5 0.970644 5.15804 0.68934 5.43934C0.408035 5.72064 0.25 6.10218 0.25 6.5V17.75C0.25 18.1478 0.408035 18.5294 0.68934 18.8107C0.970644 19.092 1.35218 19.25 1.75 19.25H18.25C18.6478 19.25 19.0294 19.092 19.3107 18.8107C19.592 18.5294 19.75 18.1478 19.75 17.75V6.5C19.75 6.10218 19.592 5.72064 19.3107 5.43934C19.0294 5.15804 18.6478 5 18.25 5ZM10 2C10.7956 2 11.5587 2.31607 12.1213 2.87868C12.6839 3.44129 13 4.20435 13 5H7C7 4.20435 7.31607 3.44129 7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2ZM18.25 17.75H1.75V6.5H5.5V8C5.5 8.19891 5.57902 8.38968 5.71967 8.53033C5.86032 8.67098 6.05109 8.75 6.25 8.75C6.44891 8.75 6.63968 8.67098 6.78033 8.53033C6.92098 8.38968 7 8.19891 7 8V6.5H13V8C13 8.19891 13.079 8.38968 13.2197 8.53033C13.3603 8.67098 13.5511 8.75 13.75 8.75C13.9489 8.75 14.1397 8.67098 14.2803 8.53033C14.421 8.38968 14.5 8.19891 14.5 8V6.5H18.25V17.75Z"
        fill="white"
      />
    </svg>
  );
};
const MoneyWaveIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8975 5.62487C22.7895 5.55748 22.6662 5.51868 22.5391 5.51212C22.412 5.50556 22.2853 5.53146 22.1709 5.58737C18.1462 7.55612 15.2719 6.63362 12.2334 5.6605C9.04594 4.63956 5.74125 3.58487 1.17563 5.81425C1.04806 5.87544 0.940404 5.97146 0.865091 6.09124C0.789777 6.21101 0.749878 6.34964 0.75 6.49112V17.7346C0.749982 17.8618 0.782343 17.987 0.844035 18.0983C0.905728 18.2096 0.994725 18.3033 1.10265 18.3708C1.21058 18.4382 1.33388 18.477 1.46096 18.4836C1.58804 18.4903 1.71471 18.4645 1.82906 18.4086C5.85375 16.4399 8.72812 17.3624 11.7712 18.3355C13.575 18.9121 15.4125 19.4999 17.49 19.4999C19.0922 19.4999 20.8397 19.1511 22.8253 18.1817C22.9514 18.1202 23.0577 18.0244 23.1322 17.9054C23.2066 17.7865 23.2461 17.649 23.2463 17.5086V6.26518C23.2474 6.1376 23.2159 6.01184 23.1549 5.8998C23.0939 5.78775 23.0053 5.69313 22.8975 5.62487ZM21.75 17.0314C17.9438 18.7349 15.1641 17.8461 12.2288 16.9077C10.425 16.3311 8.5875 15.7433 6.51 15.7433C5.05041 15.7504 3.60567 16.0368 2.25375 16.5871V6.96831C6.06 5.26487 8.83969 6.15362 11.775 7.09206C14.7103 8.0305 17.7319 8.99987 21.75 7.41456V17.0314ZM12 8.99987C11.4067 8.99987 10.8266 9.17582 10.3333 9.50546C9.83994 9.83511 9.45542 10.3036 9.22836 10.8518C9.0013 11.4 8.94189 12.0032 9.05764 12.5851C9.1734 13.1671 9.45912 13.7016 9.87868 14.1212C10.2982 14.5407 10.8328 14.8265 11.4147 14.9422C11.9967 15.058 12.5999 14.9986 13.1481 14.7715C13.6962 14.5444 14.1648 14.1599 14.4944 13.6666C14.8241 13.1732 15 12.5932 15 11.9999C15 11.2042 14.6839 10.4412 14.1213 9.87855C13.5587 9.31594 12.7956 8.99987 12 8.99987ZM12 13.4999C11.7033 13.4999 11.4133 13.4119 11.1666 13.2471C10.92 13.0823 10.7277 12.848 10.6142 12.5739C10.5006 12.2998 10.4709 11.9982 10.5288 11.7072C10.5867 11.4163 10.7296 11.149 10.9393 10.9392C11.1491 10.7294 11.4164 10.5866 11.7074 10.5287C11.9983 10.4708 12.2999 10.5005 12.574 10.6141C12.8481 10.7276 13.0824 10.9198 13.2472 11.1665C13.412 11.4132 13.5 11.7032 13.5 11.9999C13.5 12.3977 13.342 12.7792 13.0607 13.0605C12.7794 13.3418 12.3978 13.4999 12 13.4999ZM5.25 8.99987V13.4999C5.25 13.6988 5.17098 13.8896 5.03033 14.0302C4.88968 14.1709 4.69891 14.2499 4.5 14.2499C4.30109 14.2499 4.11032 14.1709 3.96967 14.0302C3.82902 13.8896 3.75 13.6988 3.75 13.4999V8.99987C3.75 8.80096 3.82902 8.61019 3.96967 8.46954C4.11032 8.32889 4.30109 8.24987 4.5 8.24987C4.69891 8.24987 4.88968 8.32889 5.03033 8.46954C5.17098 8.61019 5.25 8.80096 5.25 8.99987ZM18.75 14.9999V10.4999C18.75 10.301 18.829 10.1102 18.9697 9.96954C19.1103 9.82889 19.3011 9.74987 19.5 9.74987C19.6989 9.74987 19.8897 9.82889 20.0303 9.96954C20.171 10.1102 20.25 10.301 20.25 10.4999V14.9999C20.25 15.1988 20.171 15.3896 20.0303 15.5302C19.8897 15.6709 19.6989 15.7499 19.5 15.7499C19.3011 15.7499 19.1103 15.6709 18.9697 15.5302C18.829 15.3896 18.75 15.1988 18.75 14.9999Z"
        fill="white"
      />
    </svg>
  );
};
const MoneySpreadIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12.5C11.0717 12.5 10.1815 12.8687 9.52513 13.5251C8.86875 14.1815 8.5 15.0717 8.5 16C8.5 16.9283 8.86875 17.8185 9.52513 18.4749C10.1815 19.1313 11.0717 19.5 12 19.5C12.9283 19.5 13.8185 19.1313 14.4749 18.4749C15.1313 17.8185 15.5 16.9283 15.5 16C15.5 15.0717 15.1313 14.1815 14.4749 13.5251C13.8185 12.8687 12.9283 12.5 12 12.5ZM10.5 16C10.5 15.6022 10.658 15.2206 10.9393 14.9393C11.2206 14.658 11.6022 14.5 12 14.5C12.3978 14.5 12.7794 14.658 13.0607 14.9393C13.342 15.2206 13.5 15.6022 13.5 16C13.5 16.3978 13.342 16.7794 13.0607 17.0607C12.7794 17.342 12.3978 17.5 12 17.5C11.6022 17.5 11.2206 17.342 10.9393 17.0607C10.658 16.7794 10.5 16.3978 10.5 16Z"
        fill="white"
      />
      <path
        d="M17.526 5.11618L14.347 0.65918L2.658 9.99718L2.01 9.99018V10.0002H1.5V22.0002H22.5V10.0002H21.538L19.624 4.40118L17.526 5.11618ZM19.425 10.0002H9.397L16.866 7.45418L18.388 6.96718L19.425 10.0002ZM15.55 5.79018L7.84 8.41818L13.946 3.54018L15.55 5.79018ZM3.5 18.1692V13.8292C3.92218 13.6802 4.30565 13.4386 4.62231 13.1221C4.93896 12.8056 5.18077 12.4223 5.33 12.0002H18.67C18.8191 12.4225 19.0609 12.806 19.3775 13.1227C19.6942 13.4393 20.0777 13.6811 20.5 13.8302V18.1702C20.0777 18.3193 19.6942 18.561 19.3775 18.8777C19.0609 19.1944 18.8191 19.5779 18.67 20.0002H5.332C5.18218 19.5779 4.93996 19.1943 4.62302 18.8775C4.30607 18.5608 3.9224 18.3188 3.5 18.1692Z"
        fill="white"
      />
    </svg>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="bg-white border-0 rounded-2xl p-5 shadow-lg"
        style={{ boxShadow: "0 2px 16px rgba(0, 0, 0, 0.12)" }}
      >
        <p className="text-[#7C7C7C] font-light text-base mb-3 text-center">
          {label} 00:00
        </p>
        <div className="flex items-center gap-4">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="inline-block w-4 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-900 font-medium text-sm">
                ₦{entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  const [dateRange] = useState("Last 7 days");
  const [period] = useState("24/01/2024 - 24/02/2024");
  const [showBalance, setShowBalance] = useState(false);
  const balance = "₦2,535,500";

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        {/* Top Navigation Bar */}
        <Navbar />

        {/* Registration Progress Banner */}
        <div className="mx-8 mb-6 p-6 rounded-lg bg-[#0A0B1E] text-white">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">
                Finalize your registration process
              </h2>
              <p className="text-gray-400 text-sm">
                Finish setting up your account and take full control of your
                business
              </p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow-sm">
              <Wallet className="inline-block align-middle w-4 h-4" />
              <span className="text-sm">Next step: Add payment method</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-[50%] flex gap-1 mt-4">
            <div className="h-1 w-1/5 rounded bg-[#0066FF]"></div>
            <div className="h-1 w-1/5 rounded bg-[#0066FF]"></div>
            <div className="h-1 w-1/5 rounded bg-[#E5E5EF]"></div>
            <div className="h-1 w-1/5 rounded bg-[#E5E5EF]"></div>
            <div className="h-1 w-1/5 rounded bg-[#E5E5EF]"></div>
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
                <Calendar className="w-4 h-4 mr-2" />
                Last 7 days
                <ChevronDown className="w-4 h-4 ml-2 " />
              </button>
              <button className="flex items-center border border-gray-200 bg-white px-4 py-2 rounded-lg text-gray-700 text-sm font-medium shadow-sm focus:outline-none">
                <Calendar className="w-4 h-4 mr-2" />
                24/01/2024 - 24/02/2024
              </button>
            </div>
          </div>

          {/* Purple Banner Section */}
          <div className="flex gap-6 mb-8">
            {/* Wallet Card */}
            <div
              className="rounded-2xl pt-14 pb-1 w-[40%] px-6 text-white relative"
              style={{
                backgroundImage: `linear-gradient(135deg, #5704E3 0%, #0A6DEE 100%), url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mb-4">
                {/* SVG Icon */}
                <div className=" mb-5 border-white border-solid border-[0.7px] rounded-2xl px-2 py-3.5 w-1/6 flex items-center justify-center">
                  <img src={dashboardwallet1} alt="" />

                  {/* <LucideWallet className="w-10" /> */}
                </div>
                <span className="text-lg font-medium ">Wallet balance</span>
              </div>
              <div className="flex items-center justify-between -mt-3">
                <div className="flex items-center">
                  <span className="text-2xl tracking-widest font-mono">
                    {showBalance ? balance : "**********"}
                  </span>
                  <EyeOff
                    className="w-5 h-5 ml-2 text-white/70 cursor-pointer"
                    onClick={() => setShowBalance(!showBalance)}
                  />
                </div>
                <button className="bg-white text-[#5704E3] font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition flex items-center gap-2">
                  <Plus className="inline-block align-middle w-4 h-4" />
                  <span className="text-sm">Fund wallet</span>
                </button>
              </div>
            </div>
            {/* Promo Card with Carousel Dots in Parent Div */}
            <div className="flex flex-col w-[60%]" style={{ height: "100%" }}>
              <div
                className="flex-1 rounded-2xl px-6 pt-6 relative flex flex-row items-center min-h-[180px] border border-gray-200"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #5704E3 100%)",
                  height: "100%",
                }}
              >
                <div className="flex flex-col justify-center items-start w-[60%] h-full text-left ">
                  <h2 className="text-lg font-base text-gray-900 mb-2">
                    Grow your business faster with{" "}
                    <span className="text-[#5704E3] font-semibold italic">
                      Vancore
                    </span>
                  </h2>
                  <p className="text-sm text-gray-600">
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
            <StatsCard
              icon={ShoppingBagIcon}
              title="Orders"
              value={2}
              // value={filteredCustomers.length}
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#06A433]"
            />
            <StatsCard
              icon={Users2}
              title="Total customers"
              value={4}
              // value={filteredCustomers.length}
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#CE7507]"
            />
            <StatsCard
              icon={Box}
              title="Products sold"
              value={2}
              // value={filteredCustomers.length}
              change={45}
              period="vs 7 days ago"
              color="bg-[#A907AB]"
            />
            <StatsCard
              icon={Command}
              title="Website visits"
              value={3}
              // value={filteredCustomers.length}
              change={45}
              period="vs 7 days ago"
              color="bg-[#0B89B3]"
            />
            <StatsCard
              icon={walletIcon2}
              title="Total sales"
              value={`${showBalance ? "1,500,000" : "******"}`}
              // value={filteredCustomers.length}
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#0B49AC]"
            />
            <StatsCard
              icon={MoneyWaveIcon}
              title="Total settled"
              value={`${showBalance ? "750,000" : "******"}`}
              // value={filteredCustomers.length}
              change={-24.5}
              period="vs 7 days ago"
              color="bg-[#06AB64]"
            />
            <StatsCard
              icon={MoneySpreadIcon}
              title="Total owed"
              value={`${showBalance ? "300,000" : "******"}`}
              // value={filteredCustomers.length}
              change={45}
              period="vs 7 days ago"
              color="bg-[#B81E06]"
            />
            <StatsCard
              icon={WalletIcon3}
              title="Offline sales"
              value={`${showBalance ? "600,000" : "******"}`}
              // value={filteredCustomers.length}
              change={45}
              period="vs 7 days ago"
              color="bg-[#63AE01]"
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-8 bg-white border border-[#E3E0E0] rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Quick actions</h2>
            <div className="grid grid-cols-4 gap-4">
              {/* Create new order */}
              <button className="flex items-center w-full bg-[#F8FDFF] hover:bg-[#e3f8ff] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4 bg-[#E3F8FF] rounded-full p-2">
                  <ShoppingBag className="w-4 h-4 text-[#06799F]" />
                </span>
                <span className="text-sm font-medium text-gray-900">
                  Create new order
                </span>
              </button>
              {/* Add a new product */}
              <button className="flex items-center w-full bg-[#FFF8F7] hover:bg-[#fee3df] transition rounded-2xl px-6 py-2 shadow-sm">
                <span className="mr-4 rounded-full p-2 bg-[#FEE3DF] ">
                  <Box className="w-4 h-4 text-[#D92208]" />
                </span>
                <span className="text-sm font-medium text-gray-900">
                  Add a new product
                </span>
              </button>
              {/* Add a new customer */}
              <button className="flex items-center w-full bg-[#FEFFEA] hover:bg-[#fafdbe] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4 rounded-full p-2 bg-[#FAFDBE]">
                  <Users2 className="w-4 h-4 text-[#8C9205]" />
                </span>
                <span className="text-sm font-medium text-gray-900">
                  Add a new customer
                </span>
              </button>
              {/* Edit items */}
              <button className="flex items-center w-full bg-[#F6FFF6] hover:bg-[#dcffd9] transition rounded-2xl px-6 py-3 shadow-sm">
                <span className="mr-4 rounded-full p-2 bg-[#DCFFD9]">
                  <PencilLine className="w-4 h-4 text-[#19C00B]" />
                </span>
                <span className="text-sm font-medium text-gray-900">
                  Edit items
                </span>
              </button>
            </div>
          </div>

          {/* Sales Overview */}
          <div className="mb-8 bg-white border border-[#E3E0E0] rounded-2xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-base text-gray-900 mb-1">
                  Sales overview
                </h2>
                <div className="text-gray-400 text-sm font-normal">
                  Last year
                </div>
              </div>
              <div className="flex items-center gap-8">
                {/* Legend */}
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-2 rounded-full"
                      style={{ background: "#9027FD" }}
                    ></span>
                    <span className="text-[#7C7C7C] text-sm font-medium">
                      Online sales
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-2 rounded-full"
                      style={{ background: "#0A6DEE" }}
                    ></span>
                    <span className="text-[#7C7C7C] text-sm font-medium">
                      Offline sales
                    </span>
                  </span>
                </div>
                {/* Date Selector */}
                <button className="flex items-center border border-[#E3E0E0] bg-white px-5 py-2 rounded-lg text-gray-700 text-sm font-medium shadow-sm ml-2">
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
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="onlineSales"
                  stroke="#9027FD"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 7 }}
                  name="Online sales"
                />
                <Line
                  type="monotone"
                  dataKey="offlineSales"
                  stroke="#0A6DEE"
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
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  Recent orders
                </h2>
                <div className="text-gray-400 text-sm font-normal">
                  See all your recent orders here
                </div>
              </div>
              <button className="flex items-center border border-[#E3E0E0] bg-white px-4 py-2 rounded-lg text-gray-700 text-sm shadow-sm">
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
                        <ArrowupDown />
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      ORDER NAME{" "}
                      <span className="inline-block align-middle ml-1">
                        <ArrowupDown />
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      AMOUNT{" "}
                      <span className="inline-block align-middle ml-1">
                        <ArrowupDown />
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      DATE{" "}
                      <span className="inline-block align-middle ml-1">
                        <ArrowupDown />
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      PAYMENT{" "}
                      <span className="inline-block align-middle ml-1">
                        <ArrowupDown />
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      SHIPPING{" "}
                      <span className="inline-block align-middle ml-1">
                        <ArrowupDown />
                      </span>
                    </th>
                    <th className="py-3 pr-4 font-semibold">
                      STATUS{" "}
                      <span className="inline-block align-middle ml-1">
                        <ArrowupDown />
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
                      <td className="py-4 pr-4 font-mono text-gray-600 text-sm  align-middle">
                        {order.orderId}
                      </td>
                      <td className="py-4 pr-4 text-gray-600 text-sm  align-middle">
                        {order.orderName}
                      </td>
                      <td className="py-4 pr-4 text-gray-900 text-sm font-base align-middle">
                        {order.amount}
                      </td>
                      <td className="py-4 pr-4 text-gray-600 text-sm align-middle">
                        {order.date}
                      </td>
                      <td className="py-4 pr-4 align-middle">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm  ${
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
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-base bg-[#FFF6E7] text-[#E2A500]">
                          <span className="w-2 h-2 rounded-full bg-[#E2A500]"></span>
                          {order.shipping}
                        </span>
                      </td>
                      <td className="py-4 pr-4 align-middle">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-base bg-[#E7FAF0] text-[#1BA97A]">
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
            <div className="flex items-center text-[#0A6DEE] pb-4 space-x-1 cursor-pointer">
              <h1 className="text-lg font-medium">See all earnings</h1>
              <ChevronRight className="w-4 h-4" />
            </div>
            <div
              className="rounded-xl border border-[#E3E0E0] p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, #D9A2EA 0%, #B230D9 100%)",
              }}
            >
              {/*Referral code*/}
              <div className="z-10 flex-1">
                <div className="text-white text-sm mb-4">
                  Share your referral code
                </div>
                <div className="flex items-center mb-4 gap-3">
                  <span className="text-xl md:text-xl font-semibold text-white break-all">
                    susansheiduref453727/vancore
                  </span>
                  <Copy className="text-white bg-[#FFFFFF33] rounded-lg p-2 cursor-pointer w-8 h-8" />
                  <Share2 className="text-white bg-[#FFFFFF33] rounded-lg p-2 cursor-pointer w-8 h-8" />
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
                <div className="text-lg font-base mb-1">How to earn</div>
                <div className="text-gray-500 text-base">
                  Refer your friends and earn using your referral code.
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-20">
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
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14410"
                          x1="31.7675"
                          y1="4.20801"
                          x2="31.7675"
                          y2="23.5104"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1707_14410"
                          x1="22.4991"
                          y1="13.8584"
                          x2="22.4991"
                          y2="32.3907"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1 text-sm">
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
                      strokeWidth="1.15833"
                      strokeLinecap="round"
                      strokeDasharray="3.47 3.47"
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
                        <stop stopColor="#1C2C48" stopOpacity="0" />
                        <stop offset="1" stopColor="#096CED" />
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
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14419"
                          x1="23.1667"
                          y1="36.0986"
                          x2="23.1667"
                          y2="39.8053"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1 text-sm">
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
                      strokeWidth="1.15833"
                      strokeLinecap="round"
                      strokeDasharray="3.47 3.47"
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
                        <stop stopColor="#1C2C48" stopOpacity="0" />
                        <stop offset="1" stopColor="#096CED" />
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
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14426"
                          x1="17.0294"
                          y1="17.5879"
                          x2="17.0294"
                          y2="39.8046"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1707_14426"
                          x1="32.7936"
                          y1="36.0986"
                          x2="32.7936"
                          y2="41.6586"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1707_14426"
                          x1="40.2068"
                          y1="15.7119"
                          x2="40.2068"
                          y2="21.2719"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1707_14426"
                          x1="6.84707"
                          y1="12.0039"
                          x2="6.84707"
                          y2="17.5639"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1707_14426"
                          x1="27.2332"
                          y1="2.7373"
                          x2="27.2332"
                          y2="8.29728"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1707_14426"
                          x1="15.1868"
                          y1="4.5918"
                          x2="15.1868"
                          y2="17.5651"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1707_14426"
                          x1="34.6468"
                          y1="23.125"
                          x2="34.6468"
                          y2="34.245"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1 text-sm">
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
