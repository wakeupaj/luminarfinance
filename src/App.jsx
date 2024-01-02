import React, { useState, createContext, useContext  } from 'react';
import styles from './style';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import {CTA, Footer, GetStarted, Hero, Navbar, Stats, Testimonials,} from './components';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`my-4 ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
const AppContent = () => {
  const { theme } = useTheme();
  return (
    <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <ToggleThemeButton />
        </div>
      </div>

      <div className={`${theme === 'light' ? 'bg-light-primary' : 'bg-primary'} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${theme === 'light' ? 'bg-light-primary' : 'bg-primary'}  ${styles.paddingX} ${styles.flexStart}`}>
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

export default App
