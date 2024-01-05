import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import { useTheme } from '../context/ThemeContext.jsx';

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
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
  );
}
export default Hero