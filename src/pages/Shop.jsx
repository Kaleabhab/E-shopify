// Shop.jsx placeholder
// Shop.jsx placeholder
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/product/ProductList';
import { fetchProducts } from '../redux/slices/productSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Shop;
