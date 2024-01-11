import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {  
    setIsAuthenticated(false);
  };

  const checkAuthStatus = async () => {
    try {
      console.log('Checking auth status with the backend');
      const response = await fetch('api/auth/status');
      const data = await response.json();
      console.log('Auth status checked:', data.isAuthenticated);
      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      console.error('Error checking authentication status:', error);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);