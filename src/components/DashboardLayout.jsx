import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <SideNav />
      <main className="flex-1 overflow-y-auto ml-72 bg-[#F5F5F5] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
