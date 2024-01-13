import React from 'react'
import { useUserInfo } from '../context/UserContext';
import {useTheme } from '../context/ThemeContext.jsx';
import styles from '../style.js';
import { Loading } from '../components/index.js';

const Dashboard = () => {
  const { userInfo, loading, error } = useUserInfo();
  const { theme } = useTheme();

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
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
                <div className="flex items-center">
                    <h1 className={`font-inter font-normal text-[44px] ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>Hello, {username}</h1>
                    <img src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} className={`w-[75px] h-[75px] rounded-full border-${theme === 'light' ? 'text-light-text' : ''} border-2 ml-4`} alt="avatar" />
                </div>
                  <p className={`font-inter font-normal text-[16px]`}><i>{email}</i></p>
               </div>
            </section>
          </div>
        </div>
    </div>
  )
}

export default Dashboard