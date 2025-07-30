import React, { useState } from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';
import PaymentMethods from '../components/checkout/PaymentMethods';
import CheckoutSuccess from '../components/checkout/CheckoutSuccess';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  const steps = [
    { id: 1, name: 'Shipping' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Confirmation' },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between relative">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= s.id ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {s.id}
                </div>
                <span className={`mt-2 text-sm ${
                  step >= s.id ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}>
                  {s.name}
                </span>
              </div>
            ))}
            <div className="absolute h-1 bg-gray-200 top-5 left-0 right-0 -z-1">
              <div 
                className="bg-blue-600 h-1 transition-all duration-300" 
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            {step === 1 && <CheckoutForm onNext={handleNext} />}
            {step === 2 && (
              <PaymentMethods 
                selectedMethod={paymentMethod}
                onSelect={setPaymentMethod}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && <CheckoutSuccess />}
          </div>

          <div className="lg:col-span-1">
            <OrderSummary editable={step < 3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;