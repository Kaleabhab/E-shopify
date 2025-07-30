// ProductDetails.jsx placeholder
// ProductDetails.jsx placeholder
import React from 'react';

const ProductDetails = ({ product }) => (
  <div className="p-4">
    <img src={product.image} alt={product.name} className="w-full h-64 object-contain" />
    <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
    <p className="mt-2 text-gray-700">{product.description}</p>
    <p className="mt-2 font-semibold">${product.price}</p>
  </div>
);

export default ProductDetails;