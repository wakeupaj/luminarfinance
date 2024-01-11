import React, { useState, useEffect } from 'react'
import { parseJwt } from '../utils/parseJwt'

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          const decodedToken = parseJwt(token);
          setUsername(decodedToken.username);
      }
  }, []);

  return (
    <div>
      {username && <h1>Hello, {username}</h1>}


    </div>
  )
}

export default Dashboard