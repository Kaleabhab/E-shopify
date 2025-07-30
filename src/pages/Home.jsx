import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/product/ProductList';

const Home = () => {
  const featuredProducts = [
    { 
      id: 1, 
      title: 'Wireless Headphones', 
      price: 89.99, 
      image: '/assets/images/headphones.jpg',
      rating: 4.5,
      discount: 10 
    },
    { 
      id: 2, 
      title: 'Smart Watch', 
      price: 199.99, 
      image: '/assets/images/smartwatch.jpg',
      rating: 4.2,
      isNew: true 
    },
  ];

  const categories = [
    { name: 'Electronics', icon: '💻' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Home & Kitchen', icon: '🏠' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Sale Up to 50% Off!</h1>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Trending Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center"
            >
              <span className="text-3xl block mb-2">{cat.icon}</span>
              <span className="font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductList products={featuredProducts} />
      </div>
    </div>
  );
};

export default Home;