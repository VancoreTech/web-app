import { Edit } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <div>
      <div class="p-6 w-[99%]">
        <div className="flex justify-between items-center border-b">
          <h2 class="text-lg font-normal text-[#101828] mb-4">Details</h2>

          <Link to="../edit-product" className="flex items-center gap-3">
            <Edit className="w-4" />
            Edit
          </Link>
        </div>
        <div class="grid grid-cols-2 gap-y-6 max-w-2xl text-sm text-gray-600 pt-4">
          <div class="font-medium">Name</div>
          <div class="text-gray-800">Thread muse</div>

          <div class="font-medium">Date added</div>
          <div class="text-gray-800">22–09–2025</div>

          <div class="font-medium">Price</div>
          <div class="text-gray-800">₦3,214.20</div>

          <div class="font-medium">Cost price</div>
          <div class="text-gray-800">₦3,214.20</div>

          <div class="font-medium">Discounted price</div>
          <div class="text-gray-800">Nil</div>

          <div class="font-medium">Category</div>
          <div class="text-gray-800">Denim Products</div>

          <div class="font-medium">Description</div>
          <div class="text-gray-500">
            A description of the product shows here
          </div>

          <div class="font-medium">Maximum order limit</div>
          <div class="text-gray-500">Not set</div>

          <div class="font-medium">Minimum order limit</div>
          <div class="text-gray-500">Not set</div>
        </div>

        <h2 class="text-lg font-semibold text-gray-800 mt-10 mb-4 pb-2 border-b pt-4">
          Quick action
        </h2>

        <div class="mb-4">
          <label class="block text-sm text-[#36394A] mb-1">Add quantity</label>
          <div class="flex gap-2">
            <input
              type="number"
              placeholder="Enter quantity amount"
              class="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-[#B5B4B4]"
            />
            <button class="bg-gray-900 text-white px-4 py-2 rounded-md">
              + Add
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm text-[#36394A] mb-1">
            Remove quantity
          </label>
          <div class="flex gap-2">
            <input
              type="number"
              placeholder="Enter quantity amount"
              class="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-[#B5B4B4]"
            />
            <button class="bg-gray-900 text-white px-4 py-2 rounded-md">
              – Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
