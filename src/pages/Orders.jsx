import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxOpen, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';

const Orders = () => {
  // Sample orders data - in a real app, fetch from API/Redux
  const orders = [
    {
      id: 'ORD-789456',
      date: '2023-05-15',
      status: 'Delivered',
      items: [
        { id: 1, name: 'Wireless Earbuds', image: '/assets/images/earbuds.jpg', price: 59.99, quantity: 1 },
        { id: 2, name: 'Charging Cable', image: '/assets/images/cable.jpg', price: 12.99, quantity: 2 }
      ],
      total: 85.97,
      tracking: 'UPS-123456789'
    },
    {
      id: 'ORD-123456',
      date: '2023-04-28',
      status: 'Cancelled',
      items: [
        { id: 3, name: 'Smart Watch', image: '/assets/images/watch.jpg', price: 199.99, quantity: 1 }
      ],
      total: 199.99
    }
  ];

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <FaCheckCircle className="text-green-500 mr-2" />;
      case 'shipped':
        return <FaShoppingBag className="text-blue-500 mr-2" />;
      case 'cancelled':
        return <FaBoxOpen className="text-red-500 mr-2" />;
      default:
        return <FaBoxOpen className="text-gray-500 mr-2" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <FaShoppingBag className="mr-2 text-blue-500" />
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <FaBoxOpen className="text-gray-300 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-medium mb-2">No Orders Yet</h2>
          <p className="text-gray-600 mb-6">Your order history will appear here</p>
          <Link
            to="/shop"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center flex-wrap">
                <div className="mb-2 sm:mb-0">
                  <span className="font-medium mr-4">Order #{order.id}</span>
                  <span className="text-gray-500">{order.date}</span>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="font-medium">{order.status}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex overflow-x-auto pb-2 mb-4 gap-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-20">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-contain rounded-md border"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="font-medium">${order.total.toFixed(2)}</p>
                    {order.tracking && (
                      <p className="text-sm text-gray-600">
                        Tracking: <span className="font-medium">{order.tracking}</span>
                      </p>
                    )}
                  </div>
                  <div className="space-x-2">
                    <Link
                      to={`/orders/${order.id}`}
                      className="inline-block border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition"
                    >
                      View Details
                    </Link>
                    <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                      Buy Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;