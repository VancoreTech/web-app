import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideNav />

      <main className="ml-64 flex-1 p-4 bg-[#F5F5F5] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
