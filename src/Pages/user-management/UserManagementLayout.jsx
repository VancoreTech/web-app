import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

function UserManagementLayout() {
  return (
    <div className="">
      <Navbar />

      <div className="p-6"> </div>
    </div>
  );
}

export default UserManagementLayout;
