import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  ChevronDown,
  User,
  User2,
} from "lucide-react";

const menuItems = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <User2 className="w-5 h-5" />,
    label: "User management",
    // path: "/dashboard/user-management",
    subLinks: [
      { label: "Roles", path: "/dashboard/roles" },
      { label: "Users", path: "/dashboard/users" },
    ],
    subPaths: ["/dashboard/create-role"],
  },
  {
    icon: <Package className="w-5 h-5" />,
    label: "Products",
    path: "/dashboard/products",
    subPaths: [
      "/dashboard/create-product",
      "/dashboard/product-details",
      "/dashboard/edit-product",
      "/dashboard/create-category",
      "/dashboard/category-details",
      "/dashboard/edit-category",
    ],
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
    subPaths: ["/dashboard/create-campaign"],
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

const SideNav = () => {
  const location = useLocation();

  const isParentActive = (item) => {
    const current = location.pathname;

    if (item.path && current === item.path) return true;

    // if (item.subLinks?.some((sub) => current === sub.path)) return true;

    if (item.subPaths?.some((subPath) => current === subPath)) return true;

    return false;
  };

  const isSubLinkActive = (subItem) => {
    return location.pathname === subItem.path;
  };

  // const isMenuItemActive = (item) => {
  //   if (item.path && location.pathname === item.path) {
  //     return true;
  //   }

  //   if (item.subLinks) {
  //     return item.subLinks.some((sub) => location.pathname === sub.path);
  //   }

  //   if (item.subPaths) {
  //     return item.subPaths.some((p) =>
  //       typeof p === "string"
  //         ? location.pathname === p
  //         : location.pathname === p.path
  //     );
  //   }

  //   return false;
  // };

  // const isDirectlyActive = (item) => {
  //   return item.path && location.pathname === item.path;
  // };

  // const [manuallyActiveItem, setManuallyActiveItem] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);
  // useEffect(() => {
  //   const activeItem = menuItems.find((item) =>
  //     item.subLinks?.some((sub) => sub.path === location.pathname)
  //   );

  //   if (!activeItem || openDropdown != activeItem.label) {
  //     setOpenDropdown(null);
  //     setManuallyActiveItem(null);
  //   }
  // }, [location.pathname]);

  useEffect(() => {
    const parentItem = menuItems.find((item) =>
      item.subLinks?.some((sub) => sub.path === location.pathname)
    );
    if (parentItem) {
      setOpenDropdown(parentItem.label);
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => {
      const next = prev === label ? null : label;
      // setManuallyActiveItem(null);
      return next;
    });
  };

  const activeStyles = {
    backgroundColor: "rgb(255 255 255 / 0.1)",
    color: "white",
    borderLeft: "8px solid white",
  };

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
          {menuItems.map((item, index) => {
            const hasDropdown = item.subLinks && item.subLinks.length > 0;
            const isOpen = openDropdown === item.label;

            return (
              <div key={index}>
                {item.subLinks ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center justify-between w-full text-left pl-3 pr-2 py-1.5 rounded-lg transition-colors ${
                      isParentActive(item)
                        ? "bg-white/10 text-white border-l-8 border-white"
                        : "text-gray-500 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <ChevronDown
                      className={`ml-auto h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    end
                    onClick={() => {
                      if (hasDropdown) toggleDropdown(item.label);
                    }}
                    // isActive={() => isParentActive(item)}
                    // style={}
                    className={`flex items-center space-x-3 px-3 py-1.5 rounded-lg transition-colors ${
                      isParentActive(item)
                        ? "bg-white/10 text-white border-l-8 border-white"
                        : "text-gray-500 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="" style={{ fontSize: "14px" }}>
                      {item.label}
                    </span>
                  </NavLink>
                )}
                {hasDropdown && isOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.subLinks.map((subItem, subIdx) => (
                      <NavLink
                        key={subIdx}
                        to={subItem.path}
                        style={({ isActive }) =>
                          isActive ? activeStyles : null
                        }
                        className={`block text-sm px-3 py-1.5 rounded-md transition-colors ${
                          isSubLinkActive(subItem)
                            ? "text-white bg-white/10 border-l-8 border-white"
                            : "text-gray-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
