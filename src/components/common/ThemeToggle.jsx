// ThemeToggle.jsx placeholder
// ThemeToggle.jsx placeholder
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="text-xl">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;