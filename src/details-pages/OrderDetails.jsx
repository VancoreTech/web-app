import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Download, Calendar, User, Phone, Mail, MapPin, Package } from 'lucide-react';
import Navbar from '../components/Navbar';

const OrderDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get order data from navigation state or use dummy data
  const orderData = location.state?.orderData || {};
  const selectedProducts = location.state?.selectedProducts || [];

  // Generate order number based on current date
  const generateOrderNumber = () => {
    const now = new Date();
    return `00001`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) {
      const now = new Date();
      return now.toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      }) + ' ' + now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    }
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }) + ' ' + date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Calculate totals
  const calculateSubtotal = () => {
    if (selectedProducts.length > 0) {
      return selectedProducts.reduce((total, product) => total + product.price, 0);
    }
    return 1200.00; // Default fallback
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 0.00;
  const taxes = 0.00;
  const totalAmount = subtotal + shippingFee + taxes;

  // Get customer info from form data
  const getCustomerName = () => {
    if (orderData.customer === 'customer1') return 'Susan Sheidu';
    if (orderData.customer === 'customer2') return 'John Doe';
    return 'Susan Sheidu'; // Default
  };

  // Handle image errors
  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/48x48/8B4513/FFFFFF?text=TM`;
  };

  // Status badge component
  const StatusBadge = ({ status, type }) => {
    const getStatusColor = () => {
      switch (status.toLowerCase()) {
        case 'completed':
          return 'bg-gray-200 text-green-500';
        case 'paid':
          return 'bg-gray-200 text-green-500';
        case 'unfulfilled':
          return 'bg-orange-100 text-orange-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <span className={`inline-flex text-sm font-medium px-5 py-2 rounded ${getStatusColor()}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <Navbar />
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="items-center">
              <button 
                onClick={() => navigate('/dashboard/orders')} 
                className="flex items-center text-gray-600 hover:text-gray-800 mr-4 mb-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Order details</h1>
              </div>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download payment receipt
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Order Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Package className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Order {generateOrderNumber()}</h2>
              </div>
              <div>
                <h1 className='text-sm text-gray-500 pb-2'>Date</h1>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-1 text-blue-600" />
                  <span className="text-sm text-black font-semibold">{formatDate(orderData.orderDate)}</span>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Status</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-tl-md rounded-bl-md">Order:</span>
                        <StatusBadge status="Completed" className="" />
                    </div>
                    <div className="flex items-center rounded-md">
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-tl-md rounded-bl-md">Payment:</span>
                        <StatusBadge status={orderData.paymentStatus || "Paid"} className="" />
                    </div>
                    <div className="flex items-center rounded-md">
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-tl-md rounded-bl-md">Shipping:</span>
                        <StatusBadge status="Unfulfilled" className="" />
                    </div>
                </div>
            </div>

            {/* Channel */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Channel</h3>
              <div className="flex items-center text-gray-600">
                <Package className="w-4 h-4 mr-2 text-blue-600" />
                <span className="capitalize text-black font-medium">{orderData.salesChannel || "Physical state"}</span>
              </div>
            </div>

            {/* Billing Address */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Billing address</h3>
              <div className="flex items-start text-gray-600">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                <span className='text-black font-medium'>No 29a Berkley Street, Lagos Island, Lagos Nigeria, 100001</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Customer details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-black font-medium">Name: {getCustomerName()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-black font-medium">Phone number: 07055743212</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-black font-medium">Email: susansheidu@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-black mb-4">Products ({selectedProducts.length || 1})</h3>
              <div className="space-y-4">
                {selectedProducts.length > 0 ? (
                  selectedProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 mr-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                            onError={handleImageError}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>Price: ₦{product.price.toFixed(2)}</span>
                            <span>Quantity: x1</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-semibold text-blue-600">₦{product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        T
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Thread muse</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>Price: ₦1,200.00</span>
                          <span>Quantity: x1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-blue-600">₦1,200.00</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-black mb-4">Payment summary</h3>
              <div className="space-y-3 ">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sub total:</span>
                  <span className="text-gray-900">₦{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping fee:</span>
                  <span className="text-gray-900">₦{shippingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes:</span>
                  <span className="text-gray-900">₦{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200">
                  <span className="text-gray-900">Total amount:</span>
                  <span className="text-gray-900">₦{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payment method:</span>
                  <span className="text-gray-900 capitalize">{orderData.paymentMethod || "Bank transfer"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payment date & time:</span>
                  <span className="text-gray-900">{formatDateTime(orderData.orderDate)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <StatusBadge status={orderData.paymentStatus || "Paid"} />
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div>
              <h3 className="text-sm font-medium text-black mb-4">Shipping details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-gray-800 font-medium">Delivery to: <span className='text-black'>{getCustomerName()}</span></span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                  <span className="text-sm text-gray-800 font-medium">Address: <span className='text-black'>No 29a Berkley Street, Lagos Island, Lagos Nigeria.</span></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-gray-800 font-medium">Phone number: <span className='text-black'>07055453412</span></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Package className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm text-gray-800 font-medium">Postal code: <span className='text-black'>100001</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;