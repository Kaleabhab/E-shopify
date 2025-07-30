import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Toast from './components/ui/Toast';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
      <Toast />
    </ThemeProvider>
  );
};

export default App;
