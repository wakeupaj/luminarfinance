import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/userinfo');
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          setUserInfo(null);
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserContext);