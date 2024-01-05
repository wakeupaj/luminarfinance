import React from 'react';
import {useTheme } from '../context/ThemeContext.jsx';
import {CTA, Footer, GetStarted, Stats, Testimonials,} from '../components/index.js';
import styles from '../style.js';
import { discount, robot } from '../assets';

export const Home = () => {
    const { theme } = useTheme();

    return (
      <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'} `}>
        <div className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} ${theme === 'light' ? 'text-light-text' : 'text-text'} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                  <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                  <p className={`ml-2 ${styles.paragraph} text-text `}>
                              <span className="text-text">Get your next month </span>
                  FOR FREE {" "}
                  <span className="text-text">for each referral</span>
                  </p>
                </div>
              </div>
            </section>
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
  