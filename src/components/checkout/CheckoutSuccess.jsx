import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShoppingBag, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';

const CheckoutSuccess = () => {
  // Sample order data - in a real app, this would come from Redux or API
  const order = {
    id: 'ORD-123456',
    date: new Date().toLocaleDateString(),
    total: 149.99,
    items: [
      { id: 1, name: 'Wireless Headphones', price: 89.99, quantity: 1, image: '/assets/images/headphones.jpg' },
      { id: 2, name: 'Phone Case', price: 29.99, quantity: 2, image: '/assets/images/case.jpg' }
    ],
    shipping: {
      address: '123 Main St, New York, NY 10001',
      method: 'Express Delivery (2-3 days)'
    },
    payment: {
      method: 'VISA **** 4242',
      total: 169.98 // Includes shipping
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-10">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-lg text-gray-600">
          Thank you for your purchase. Your order #{order.id} has been received.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaShoppingBag className="text-blue-500" />
            Order Summary
          </h2>
        </div>
        
        <div className="divide-y">
          {order.items.map((item) => (
            <div key={item.id} className="p-6 flex">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-contain rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>$19.99</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
            <span>Total:</span>
            <span>${order.payment.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaMapMarkerAlt className="text-green-500" />
            Shipping Details
          </h2>
          <p className="mb-2"><span className="font-medium">Address:</span> {order.shipping.address}</p>
          <p><span className="font-medium">Method:</span> {order.shipping.method}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaCreditCard className="text-purple-500" />
            Payment Information
          </h2>
          <p className="mb-2"><span className="font-medium">Method:</span> {order.payment.method}</p>
          <p><span className="font-medium">Status:</span> <span className="text-green-600">Paid</span></p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/orders"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition mr-4"
        >
          View Order History
        </Link>
        <Link
          to="/shop"
          className="inline-block border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;