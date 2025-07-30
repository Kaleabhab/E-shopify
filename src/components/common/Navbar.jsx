import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggle from './ThemeToggle';
import { ShoppingCart } from 'lucide-react'; // Optional: install lucide-react or use another icon library

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
        E-Shopify
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/shop"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          shop
        </Link>

        <Link
          to="/cart"
          className="relative text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
