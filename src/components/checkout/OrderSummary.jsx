// OrderSummary.jsx placeholder
// OrderSummary.jsx placeholder
import React from 'react';

const OrderSummary = ({ total }) => (
  <div className="p-4 border rounded">
    <h2 className="text-lg font-semibold">Order Summary</h2>
    <p className="mt-2">Total: ${total}</p>
  </div>
);

export default OrderSummary;