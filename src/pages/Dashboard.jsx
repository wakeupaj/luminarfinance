import React from 'react'
import { useUserInfo } from '../context/UserContext';

const Dashboard = () => {
  const userInfo = useUserInfo();
  const username = userInfo.username;
  const email = userInfo.email;
  const avatar = userInfo.avatar;
  const id = userInfo.id;

  return (
    <div>
      <h1>Hello, {username}</h1>
      <p>Your email is: {email}</p>
      <p>
        Your avatar is: <img src={`http://cdn.discordapp.com/avatars/${id}/${avatar}.png`} className='avatar'/>
      </p>

    </div>
  )
}

export default Dashboard