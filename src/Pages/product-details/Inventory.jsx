import React from "react";

function Inventory() {
  return (
    <div class="p-6 w-[99%]">
      <div className="flex justify-between items-center border-b">
        <h2 class="text-lg font-normal text-[#101828] mb-4">Details</h2>
      </div>
      <div class="grid grid-cols-2 gap-y-6 max-w-2xl text-sm text-gray-600 pt-4 pb-5">
        <div class="font-medium">Total inventory value</div>
        <div class="text-gray-800">₦31,214.20</div>

        <div class="font-medium">Potential revenue</div>
        <div class="text-gray-800">₦31,214.20</div>

        <div class="font-medium">Profit per unit</div>
        <div class="text-gray-800">₦214.20</div>

        <div class="font-medium">Total profit</div>
        <div class="text-gray-800">₦33,214.20</div>
      </div>
    </div>
  );
}

export default Inventory;
