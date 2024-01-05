// import { link } from 'react-router-dom'
import React, { useState, createContext, useContext  } from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext.jsx';
import {CTA, Footer, GetStarted, Hero, Navbar, Stats, Testimonials,} from '../components/index.js';
import styles from '../style.js';

export const Home = () => {
    return (
      <ThemeProvider>
        <HomeContent />
      </ThemeProvider>
    );
  };

  const HomeContent = () => {
    const { theme } = useTheme();
    return (
      <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
  
        <div className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} ${theme === 'light' ? 'text-light-text' : 'text-text'} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
  
        <div className={`${theme === 'light' ? 'bg-light-primary' : 'bg-primary'} ${theme === 'light' ? 'text-light-text' : 'text-text'}  ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Testimonials />
            <GetStarted /> 
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
  
  export default Home
  