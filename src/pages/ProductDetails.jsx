import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, addToCart } from '../redux/slices/productSlice';
import StarRating from '../components/common/StarRating';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { product, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Please select a size');
    dispatch(addToCart({ ...product, size: selectedSize, quantity }));
    navigate('/cart');
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-gray-600">(42 reviews)</span>
          </div>

          <div className="mb-6">
            {product.discount ? (
              <>
                <span className="text-3xl font-bold text-red-600">
                  ${(product.price * (1 - product.discount/100)).toFixed(2)}
                </span>
                <span className="ml-2 text-lg line-through text-gray-400">
                  ${product.price}
                </span>
                <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                  {product.discount}% OFF
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">${product.price}</span>
            )}
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size:</h3>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border rounded-md flex items-center justify-center ${
                    selectedSize === size 
                      ? 'bg-black text-white border-black' 
                      : 'hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Quantity:</h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border rounded-md flex items-center justify-center"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border rounded-md flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
            <button className="border border-black px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        {/* Reviews component would go here */}
      </div>
    </div>
  );
};

export default ProductDetails;