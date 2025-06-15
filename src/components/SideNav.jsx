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
  Store,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const StoreIcon = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4374 4.42188C17.3189 4.28883 17.1735 4.18243 17.0108 4.10971C16.8481 4.03699 16.6719 3.9996 16.4937 4H12.7499C12.7499 3.00544 12.3548 2.05161 11.6516 1.34835C10.9483 0.645088 9.99448 0.25 8.99992 0.25C8.00536 0.25 7.05153 0.645088 6.34827 1.34835C5.64501 2.05161 5.24992 3.00544 5.24992 4H1.50617C1.32903 4.00048 1.15398 4.0383 0.992443 4.11099C0.830905 4.18368 0.686507 4.28961 0.56867 4.42188C0.451817 4.55365 0.364129 4.70862 0.311352 4.87665C0.258574 5.04467 0.2419 5.22195 0.26242 5.39687L1.37648 14.7719C1.41262 15.0773 1.5601 15.3587 1.79072 15.5623C2.02134 15.7658 2.31891 15.8771 2.62648 15.875H15.3804C15.688 15.8771 15.9855 15.7658 16.2161 15.5623C16.4468 15.3587 16.5943 15.0773 16.6304 14.7719L17.7444 5.39687C17.7649 5.2219 17.7481 5.04458 17.6952 4.87656C17.6422 4.70853 17.5544 4.55358 17.4374 4.42188ZM8.99992 1.5C9.66296 1.5 10.2988 1.76339 10.7677 2.23223C11.2365 2.70107 11.4999 3.33696 11.4999 4H6.49992C6.49992 3.33696 6.76331 2.70107 7.23215 2.23223C7.70099 1.76339 8.33688 1.5 8.99992 1.5ZM15.3874 14.625C15.3852 14.6258 15.3827 14.6258 15.3804 14.625H2.6132L1.50617 5.25H5.24992V7.125C5.24992 7.29076 5.31577 7.44973 5.43298 7.56694C5.55019 7.68415 5.70916 7.75 5.87492 7.75C6.04068 7.75 6.19965 7.68415 6.31686 7.56694C6.43407 7.44973 6.49992 7.29076 6.49992 7.125V5.25H11.4999V7.125C11.4999 7.29076 11.5658 7.44973 11.683 7.56694C11.8002 7.68415 11.9592 7.75 12.1249 7.75C12.2907 7.75 12.4497 7.68415 12.5669 7.56694C12.6841 7.44973 12.7499 7.29076 12.7499 7.125V5.25H16.4999L15.3874 14.625Z"
        fill="white"
      />
    </svg>
  );
};

const SideNav = () => {
  const location = useLocation();
  const [storesExpanded, setStoresExpanded] = useState(true);

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

  const [openDropdown, setOpenDropdown] = useState(null);

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
      return next;
    });
  };

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
      subPaths: ["/dashboard/create-order", "/dashboard/order-details"],
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

  const storeSubmenuItems = [
    {
      label: "Store information",
      path: "/dashboard/store-information",
    },
    {
      label: "Store customization",
      path: "/dashboard/store-customization",
    },
    {
      label: "Referrals",
      path: "/dashboard/referrals",
    },
    {
      label: "Subscription",
      path: "/dashboard/subscription",
    },
    {
      label: "Shipping & Tax",
      path: "/dashboard/shipping-tax",
    },
    {
      label: "Expenses",
      path: "/dashboard/expenses",
    },
    {
      label: "Domains",
      path: "/dashboard/domains",
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="w-72 h-screen bg-[#01042D] text-white p-4 flex flex-col fixed overflow-y-auto custom-scrollbar">
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

      <div className="flex-1">
        <h2 className="text-sm text-gray-400 mb-2">Quick links</h2>
        <nav className="space-y-3 text-xs">
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

      {/* Other Section */}
      <div className="mt-2">
        <h2 className="text-sm text-gray-400 mb-2">Other</h2>

        {/* Stores Menu with Submenu */}
        <div className="space-y-2">
          <button
            onClick={() => setStoresExpanded(!storesExpanded)}
            className="flex items-center justify-between w-full px-3 py-1.5 text-gray-500 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <StoreIcon className="w-5 h-5" />
              <span style={{ fontSize: "14px" }}>Stores</span>
            </div>
            {storesExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {/* Stores Submenu */}
          {storesExpanded && (
            <div className="ml-8 space-y-1">
              {storeSubmenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`block px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    item.isActive || location.pathname === item.path
                      ? "bg-white/10 text-white border-l-4 border-white"
                      : "text-gray-500 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
