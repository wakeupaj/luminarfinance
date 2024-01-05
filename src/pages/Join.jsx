import React from 'react'
import {useTheme } from '../context/ThemeContext.jsx';
import styles from '../style.js';
import { Footer } from '../components/index.js';

export const Join = () => {
    const { theme } = useTheme();

    return (
      <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            Join Now
          </div>
        </div>

      </div>
    )
  }

export default Join