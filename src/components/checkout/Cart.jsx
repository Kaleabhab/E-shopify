// Cart.jsx placeholder
// Cart.jsx placeholder
import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="space-y-4">
    {cartItems.map(item => (
      <div key={item.id} className="border p-2 rounded">
        {item.name} - ${item.price} x {item.quantity}
      </div>
    ))}
  </div>
);

export default Cart;