import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingBag,
  Users2,
  BarChart3,
  MessageSquare,
  Ticket,
  Receipt,
  AppWindow,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react";

const SideNav = () => {
  const location = useLocation(); // Add this line to get the current location

  // Helper function to check if menu item should be active
  const isMenuItemActive = (item) => {
    if (location.pathname === item.path) {
      return true;
    }
    // Check if current path matches any sub-paths
    if (item.subPaths) {
      return item.subPaths.some((subPath) => location.pathname === subPath);
    }
    return false;
  };

  const menuItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "User management",
      path: "/dashboard/user-management",
    },
    {
      icon: <Package className="w-5 h-5" />,
      label: "Products",
      path: "/dashboard/products",
      subPaths: ["/dashboard/create-product", "/dashboard/product-details"],
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "Orders",
      path: "/dashboard/orders",
      subPaths: ["/dashboard/create-order", "/dashboard/order-details"], // Add related paths here
    },
    {
      icon: <Users2 className="w-5 h-5" />,
      label: "Customers",
      path: "/dashboard/customers",
      subPaths: [
        "/dashboard/create-customer",
        "/dashboard/customer-details",
        "/dashboard/edit-customer",
        "/dashboard/create-group",
        "/dashboard/customer-group-details",
        "/dashboard/edit-group",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Analytics",
      path: "/dashboard/analytics",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Campaigns",
      path: "/dashboard/campaigns",
    },
    {
      icon: <Ticket className="w-5 h-5" />,
      label: "Discounts & Coupons",
      path: "/dashboard/discounts",
    },
    {
      icon: <Receipt className="w-5 h-5" />,
      label: "Transactions",
      path: "/dashboard/transactions",
    },
    {
      icon: <AppWindow className="w-5 h-5" />,
      label: "Connected apps",
      path: "/dashboard/connected-apps",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: "Payment methods",
      path: "/dashboard/payment-methods",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help & Support",
      path: "/dashboard/support",
    },
  ];

  return (
    <div className="w-64 h-screen bg-[#01042D] text-white p-4 flex flex-col fixed">
      {/* Logo and Store URL */}
      <div className="mb-4">
        <div className="flex items-center justify-center mb-1">
          <img src="/vancore-logo.png" alt="Vancore" className="h-8 mr-2" />
          <span className="text-white font-semibold">Vancore</span>
        </div>
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          https://susanstore.vancore.com
        </a>
      </div>

      {/* Quick Links Section */}
      <div>
        <h2 className="text-sm text-gray-400 mb-2">Quick links</h2>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-1.5 rounded-lg transition-colors ${
                isMenuItemActive(item)
                  ? "bg-white/10 text-white border-l-8 border-white"
                  : "text-gray-500 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="" style={{ fontSize: "14px" }}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="mt-auto pt-2 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Susan"
              alt="Profile"
              className="w-8 h-8 rounded-full bg-white/10"
            />
            <div>
              <div className="text-sm font-medium">Susan Sheidu</div>
              <div className="text-xs text-gray-400">sheidususan@gmail.com</div>
            </div>
          </div>
          <Link to="/dashboard/settings">
            <button  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SideNav;
