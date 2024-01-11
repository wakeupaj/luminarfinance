import React, { useState, useEffect } from 'react'
import { parseJwt } from '../utils/parseJwt'

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token) {
          const decodedToken = parseJwt(token);
          setUsername(decodedToken.username);
      }
  }, []);

  return (
    <div>
      <h1>Hello, {username}</h1>
    </div>
  )
}

export default Dashboard