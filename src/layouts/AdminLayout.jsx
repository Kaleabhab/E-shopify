import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/users">Users</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
