import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
