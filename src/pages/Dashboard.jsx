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
    <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'} `}>
      <div className={`${
        theme === 'light' ? 'bg-light-background' : 'bg-background'
      } ${styles.boxWidth}`}>
        <section id="dashboard" className={`flex md:flex-row flex-col ${styles.paddingY} ${
          theme === 'light' ? 'bg-light-background' : 'bg-background'
        }`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex items-center justify-start">
              <h1 className={`font-inter font-normal text-[44px] ${
                theme === 'light' ? 'text-light-text' : 'text-text'
              }`}>
                Hello, {username}.
              </h1>
              <img 
                src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} 
                className="w-[50px] h-[50px] rounded-full ml-4" 
                alt="avatar"
              />
            </div>
            <p className={`font-inter font-normal text-[21px] ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>
              {email}
            </p>
          </div>
        </section>
      </div>
    </div>
)};

export default Dashboard