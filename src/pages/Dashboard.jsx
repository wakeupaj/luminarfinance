import React from 'react'
import { useUserInfo } from '../context/UserContext';

const Dashboard = () => {
  const userInfo = useUserInfo();
  const username = userInfo?.username;
  const email = userInfo?.email;
  const avatar = userInfo?.avatar;

  return (
    <div>
      <h1>Hello, {username}</h1>
    </div>
  )
}

export default Dashboard