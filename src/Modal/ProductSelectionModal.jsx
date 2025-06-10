import React from "react";
import { X, Search } from "lucide-react";
import { ArrowupDown } from "../Pages/Orders";

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
        {/* Search Bar - Top Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for user name, ID etc..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64 text-sm"
              />
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
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
                  <th className="w-12 p-3"></th>
                  <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      PRODUCT IMAGE
                      <ArrowupDown className="w-3 h-3 ml-1" />
                    </div>
                  </th>
                  <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      PRODUCT NAME
                      <ArrowupDown className="w-3 h-3 ml-1" />
                    </div>
                  </th>
                  <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      IN STOCK
                      <ArrowupDown className="w-3 h-3 ml-1" />
                    </div>
                  </th>
                  <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      PRICE
                      <ArrowupDown className="w-3 h-3 ml-1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr 
                    key={product.id} 
                    className={`hover:bg-gray-50 ${
                      tempSelectedProducts.some(p => p.id === product.id) ? 'bg-blue-50' : ''
                    }`}
                  >
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={tempSelectedProducts.some(p => p.id === product.id)}
                        onChange={() => onProductSelection(product)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="p-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded object-cover border border-gray-200"
                        onError={onImageError}
                      />
                    </td>
                    <td className="p-3">
                      <div className="text-sm text-gray-900">{product.name}</div>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-gray-900">{product.inStock}</span>
                    </td>
                    <td className="p-3">
                      <div className="text-sm text-gray-900 font-medium">
                        ₦{product.price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end space-x-3 p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onProceed}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionModal;