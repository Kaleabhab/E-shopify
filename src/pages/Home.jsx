// Home.jsx placeholder
import React from 'react';
import ProductList from '../components/product/ProductList';

const Home = () => {
  // For demo, you can fetch or use dummy products here
  const featuredProducts = [
    { id: 1, title: 'Sample Product 1', price: 29.99, image: '/assets/images/product1.jpg' },
    { id: 2, title: 'Sample Product 2', price: 49.99, image: '/assets/images/product2.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default Home;
