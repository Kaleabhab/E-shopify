import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, className = '', ...rest }) => (
  <div className="flex flex-col gap-1">
    {label && <label htmlFor={name} className="text-sm font-semibold">{label}</label>}
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...rest}
    />
  </div>
);

export default Input;
