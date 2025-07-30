import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/product/ProductList';
import { fetchProducts } from '../redux/slices/productSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = ['All', 'Electronics', 'Fashion', 'Home'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <label key={cat} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="mb-2">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Product List */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
            <select className="border rounded px-3 py-2">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;