// Signup.jsx placeholder
// Signup.jsx placeholder
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/slices/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border rounded p-2"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
