import React, { useState } from 'react';
import { FaCreditCard, FaPaypal, FaApple, FaGoogle } from 'react-icons/fa';
import { SiStripe } from 'react-icons/si';

const PaymentMethods = ({ selectedMethod, onSelect, onNext, onBack }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const paymentOptions = [
    { id: 'credit-card', name: 'Credit/Debit Card', icon: <FaCreditCard className="text-blue-500" /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal className="text-blue-600" /> },
    { id: 'apple-pay', name: 'Apple Pay', icon: <FaApple className="text-black" /> },
    { id: 'google-pay', name: 'Google Pay', icon: <FaGoogle className="text-green-600" /> },
    { id: 'stripe', name: 'Stripe', icon: <SiStripe className="text-purple-600" /> },
  ];

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    // Format card number (add spaces every 4 digits)
    if (name === 'number') {
      const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setCardDetails({ ...cardDetails, [name]: formattedValue });
    } 
    // Format expiry date (MM/YY)
    else if (name === 'expiry') {
      const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').substring(0, 5);
      setCardDetails({ ...cardDetails, [name]: formattedValue });
    }
    else {
      setCardDetails({ ...cardDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate card details before proceeding
    if (selectedMethod === 'credit-card') {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc || !cardDetails.name) {
        return alert('Please fill all card details');
      }
      if (cardDetails.number.replace(/\s/g, '').length !== 16) {
        return alert('Please enter a valid 16-digit card number');
      }
    }
    onNext(); // Proceed to confirmation
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      
      {/* Payment Options Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {paymentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`p-4 border rounded-lg flex flex-col items-center transition ${
              selectedMethod === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'hover:border-gray-300'
            }`}
          >
            <span className="text-2xl mb-2">{option.icon}</span>
            <span className="text-sm">{option.name}</span>
          </button>
        ))}
      </div>

      {/* Credit Card Form (Shows only when selected) */}
      {selectedMethod === 'credit-card' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              name="number"
              value={cardDetails.number}
              onChange={handleCardInputChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleCardInputChange}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVC</label>
              <input
                type="text"
                name="cvc"
                value={cardDetails.cvc}
                onChange={handleCardInputChange}
                placeholder="123"
                maxLength={4}
                className="w-full p-3 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cardholder Name</label>
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleCardInputChange}
              placeholder="John Doe"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </form>
      )}

      {/* PayPal/Other Payment Instructions */}
      {selectedMethod === 'paypal' && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
          <p>You'll be redirected to PayPal to complete your payment securely.</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 border rounded-md font-medium hover:bg-gray-50 transition"
        >
          Back to Shipping
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
          Continue to Review
        </button>
      </div>

      {/* Security Badges */}
      <div className="mt-8 pt-6 border-t flex flex-wrap justify-center gap-4">
        <img src="/assets/payment/ssl-secure.png" alt="SSL Secure" className="h-8" />
        <img src="/assets/payment/pci-compliant.png" alt="PCI Compliant" className="h-8" />
        <img src="/assets/payment/3d-secure.png" alt="3D Secure" className="h-8" />
      </div>
    </div>
  );
};

export default PaymentMethods;