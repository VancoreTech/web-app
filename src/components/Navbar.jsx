import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="px-8 py-4 flex justify-between items-center bg-[#F9FAFB]">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm capitalize text-gray-400">
        <span className="mr-2 text-gray-400">/</span>
        {paths.length === 0 ? (
          <span className="text-gray-900 font-medium">Home</span>
        ) : (
          paths.map((segment, index) => (
            <span key={index} className="flex items-center">
              <span
                className={`${
                  index === paths.length - 1
                    ? "text-gray-900 font-medium"
                    : ""
                }`}
              >
                {segment}
              </span>
              {index < paths.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </span>
          ))
        )}
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
  );
};

export default Navbar;
