import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext({ userInfo: null, loading: false, error: null });

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    userInfo: null,
    loading: false,
    error: null
  });

  useEffect(() => {
    setState(prevState => ({ ...prevState, loading: true }));
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/userinfo');
        if (response.ok) {
          const data = await response.json();
          
          setState({ userInfo: data, loading: false, error: null });
        } else {
          throw new Error(`Failed to fetch user info: status ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        setState({ userInfo: null, loading: false, error });
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserContext);
