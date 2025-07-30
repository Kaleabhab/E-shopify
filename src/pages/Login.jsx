// Login.jsx placeholder
// Login.jsx placeholder
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
