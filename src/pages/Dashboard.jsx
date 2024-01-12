import React from 'react'
import { useUserInfo } from '../context/UserContext';

const Dashboard = () => {
  const { userInfo, loading, error } = useUserInfo();

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  if (!userInfo) {
    return <div>No user info available.</div>; 
  }

  const { username, email, avatar, id } = userInfo;

  return (
    <div>
      <h1>Hello, {username}</h1>
      <p>Your email is: {email}</p>
      <p>
        Your avatar is: <img src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} className='avatar'/>
      </p>

    </div>
  )
}

export default Dashboard