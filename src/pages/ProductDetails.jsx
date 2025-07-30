// ProductDetails.jsx placeholder
// ProductDetails.jsx placeholder
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/slices/productSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full max-w-md mb-4" />
      <p className="text-xl font-semibold mb-2">${product.price}</p>
      <p>{product.description}</p>
      {/* Add variant selectors, stock info, add to cart button here */}
    </div>
  );
};

export default ProductDetails;
