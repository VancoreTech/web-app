import React from "react";
import productimage from "../../assets/productimage.svg";
import Navbar from "../../components/Navbar";
import { ArrowLeft, Calendar } from "lucide-react";
import dot from "../../assets/dot.svg";
import { Link, NavLink, Outlet } from "react-router-dom";

const activeStyles = {
  color: "#4705E3",
  textDecoration: "underline",
  textDecorationColor: "#4705E3",
};

function ProductLayout() {
  return (
    <div>
      <Navbar />

      <div className="py-10 px-7">
        <Link
          to="/dashboard/products"
          className="bg-white flex items-center content-center gap-2 text-[#344054] text-sm rounded-md  w-24 px-4 py-2 mb-4"
        >
          <ArrowLeft /> Back
        </Link>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <h2 className="text-[#101828] font-semibold text-3xl">
              Thread Muse
            </h2>
            <span className="inline-flex gap-1 items-center rounded-2xl px-2 py-1 text-sm text-[#027A48] bg-[#ECFDF3]">
              <img src={dot} alt="" /> Published
            </span>
          </div>

          <button className="flex bg-white items-center gap-1 rounded-lg px-3 py-2 border border-[#D0D5DD]">
            <Calendar />
            Select Date
          </button>
        </div>

        {/* <div className="bg-[#E9EBFC] mt-5 rounded w-full pt-4 -pb-2"> */}
        <img src={productimage} alt="Product Image" className="my-6" />
        {/* </div> */}
      </div>

      <div className="flex justify-evenly w-4/5">
        <NavLink
          //   className="text-[#475467]"
          className={({ isActive }) =>
            ` relative px-2 pb-2 text-sm capitalize ${
              isActive
                ? "text-[#4705E3] after:content-[''] after:absolute after:right-[-80%] after:bottom-0 after:w-[250%] after:h-[2px] after:bg-[#4705E3] :transition-all after:duration-300"
                : "text-[#475467]"
            }`
          }
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` relative px-2 pb-2 text-sm capitalize ${
              isActive
                ? "text-[#4705E3] after:content-[''] after:absolute after:right-[-80%] after:bottom-0 after:w-[250%] after:h-[2px] after:bg-[#4705E3] :transition-all after:duration-300"
                : "text-[#475467]"
            }`
          }
          to="history"
        >
          History
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` relative px-2 pb-2 text-sm capitalize ${
              isActive
                ? "text-[#4705E3] after:content-[''] after:absolute after:right-[-80%] after:bottom-0 after:w-[250%] after:h-[2px] after:bg-[#4705E3] :transition-all after:duration-300"
                : "text-[#475467]"
            }`
          }
          to="all-orders"
        >
          All orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` relative px-2 pb-2 text-sm capitalize ${
              isActive
                ? "text-[#4705E3] after:content-[''] after:absolute after:right-[-80%] after:bottom-0 after:w-[250%] after:h-[2px] after:bg-[#4705E3] :transition-all after:duration-300"
                : "text-[#475467]"
            }`
          }
          to="inventory"
        >
          Inventory
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductLayout;
