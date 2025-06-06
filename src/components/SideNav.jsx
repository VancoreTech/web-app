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
  const location = useLocation();
  const menuItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "User management",
      path: "/user-management",
    },
    {
      icon: <Package className="w-5 h-5" />,
      label: "Products",
      path: "/products",
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "Orders",
      path: "/orders",
    },
    {
      icon: <Users2 className="w-5 h-5" />,
      label: "Customers",
      path: "/customers",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Campaigns",
      path: "/campaigns",
    },
    {
      icon: <Ticket className="w-5 h-5" />,
      label: "Discounts & Coupons",
      path: "/discounts",
    },
    {
      icon: <Receipt className="w-5 h-5" />,
      label: "Transactions",
      path: "/transactions",
    },
    {
      icon: <AppWindow className="w-5 h-5" />,
      label: "Connected apps",
      path: "/connected-apps",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: "Payment methods",
      path: "/payment-methods",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help & Support",
      path: "/support",
    },
  ];

  return (
    <div className="w-64 h-screen bg-[#0A0B1C] text-white p-4 flex flex-col fixed">
      {/* Logo and Store URL */}
      <div className="mb-4">
  <div className="flex items-center justify-center mb-1">
    <img src="/vancore-logo.png" alt="Vancore" className="h-8 mr-2" />
    <span className="text-white font-semibold">Vancore</span>
  </div>
  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
    https://susanstore.vancore.com
  </a>
</div>

      {/* Quick Links Section */}
      <div>
        <h2 className="text-sm text-gray-400 mb-2">Quick links</h2>
        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-1.5 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-500 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
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
          <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
