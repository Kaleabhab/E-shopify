// CheckoutForm.jsx placeholder
// CheckoutForm.jsx placeholder
import React from 'react';

const CheckoutForm = () => (
  <form className="space-y-4">
    <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
    <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Checkout</button>
  </form>
);

export default CheckoutForm;