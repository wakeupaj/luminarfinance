import React from 'react'
import { useUserInfo } from '../context/UserContext';
import {useTheme } from '../context/ThemeContext.jsx';
import styles from '../style.js';

const Dashboard = () => {
  const { userInfo, loading, error } = useUserInfo();
  const { theme } = useTheme();

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
      

      <div className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} ${theme === 'light' ? 'text-light-text' : 'text-text'} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section id="dashboard" className={`flex md:flex-row flex-col ${styles.paddingY} ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
                  <h1>Hello, {username}</h1>
                  <p>Your email is: {email}</p>
                  <p>
                    Your avatar is: <img src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} className='avatar'/>
                  </p> 
                </div>
            </section>
          </div>
        </div>

    </div>
  )
}

export default Dashboard