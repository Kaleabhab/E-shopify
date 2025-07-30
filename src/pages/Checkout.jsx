// Checkout.jsx placeholder
import React from 'react';
import Cart from '../components/checkout/Cart';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <CheckoutForm />
      </div>
      <div>
        <OrderSummary />
        <Cart />
      </div>
    </div>
  );
};

export default Checkout;
