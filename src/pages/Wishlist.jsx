import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/product/ProductList';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useSelector(state => state.user);
  const recommendedProducts = [
    // Sample recommended products
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            ❤️
          </div>
          <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save your favorite items here for later</p>
          <Link
            to="/shop"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <ProductList products={wishlist} />
          
          {recommendedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
              <ProductList products={recommendedProducts} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;