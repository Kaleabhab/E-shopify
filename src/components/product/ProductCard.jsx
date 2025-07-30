// ProductCard.jsx placeholder
// ProductCard.jsx placeholder
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border rounded p-4 shadow-sm">
    <img src={product.image} alt={product.name} className="h-40 object-contain mx-auto" />
    <h2 className="mt-2 font-semibold">{product.name}</h2>
    <p className="text-sm text-gray-500">${product.price}</p>
  </div>
);

export default ProductCard;