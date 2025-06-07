import React from "react";
import { X, Search } from "lucide-react";

const ProductSelectionModal = ({
  isOpen,
  products,
  tempSelectedProducts,
  searchTerm,
  loading,
  onClose,
  onProductSelection,
  onSearchChange,
  onProceed,
  onImageError,
}) => {
  if (!isOpen) return null;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl mx-4 h-[80vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            Select Products
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for user name, ID etc."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Products Table */}
        <div className="flex-1 overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-500">Loading products...</div>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b sticky top-0">
                <tr>
                  <th className="w-12 p-4"></th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">
                    PRODUCT IMAGE
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">
                    PRODUCT NAME
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">
                    IN STOCK
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-700">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={tempSelectedProducts.some(
                          (p) => p.id === product.id
                        )}
                        onChange={() => onProductSelection(product)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded border"
                        onError={onImageError}
                      />
                    </td>
                    <td className="p-4 text-gray-900">{product.name}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          product.inStock === "Out of stock"
                            ? "bg-red-100 text-red-800"
                            : product.inStock === "Unlimited"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {product.inStock}
                      </span>
                    </td>
                    <td className="p-4 text-gray-900">
                      ₦{product.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end space-x-4 p-6 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onProceed}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionModal;
