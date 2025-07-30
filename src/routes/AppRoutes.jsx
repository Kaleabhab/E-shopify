import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Wishlist from '../pages/Wishlist';
import Dashboard from '../admin/Dashboard';
import ManageProducts from '../admin/ManageProducts';
import ManageOrders from '../admin/ManageOrders';
import ManageUsers from '../admin/ManageUsers';

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public pages using MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>

      {/* Auth pages using AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Admin pages (you can wrap these in a different layout if needed) */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/orders" element={<ManageOrders />} />
      <Route path="/admin/users" element={<ManageUsers />} />
    </Routes>
  );
};

export default AppRoutes;
