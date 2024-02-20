import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import {CTA, Footer, GetStarted, Stats, Testimonials, DashNav} from '../components/index.js';
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
                <div className="flex flex-row items-center py-[2px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                  <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                  <p className={`ml-2 ${styles.paragraph} text-text `}>
                              <span className="text-text">Get your next month </span>
                  for FREE {" "}
                  <span className="text-text">with each referral!</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} ${theme === 'light' ? 'text-light-text' : 'text-text'} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section id="CTA" className={`flex md:flex-row flex-col ${styles.paddingY} ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex items-center">
                      <h1 className={`font-inter font-normal text-[44px] ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>Elevate your trading potential.</h1>
                </div>
                <p className={`font-inter font-normal text-[16px] ${theme === 'light' ? 'text-light-secondary' : 'text-secondary'}`}><i>Become <b>Luminar</b> Today.</i></p>
                <br></br>
                <div className="mr-20">
                  <p2 className={`font-inter font-normal text-[16px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer malesuada nunc vel risus commodo viverra maecenas. Felis imperdiet proin fermentum leo vel orci porta non. Semper eget duis at tellus at urna condimentum mattis pellentesque. Enim eu turpis egestas pretium. Adipiscing elit pellentesque habitant morbi tristique.
                  </p2>
                </div>
              </div>
          </section>
          </div>
        </div>

        <div className={`${theme === 'light' ? 'bg-background' : 'bg-light-background'} ${theme === 'light' ? 'text-text' : 'text-light-text'} w-full`}>
          <div>
            <section id="clientsperform" className={`flex flex-col items-center justify-center ${styles.paddingY} ${theme === 'light' ? 'bg-background' : 'bg-light-background' }`}>
              <div className={`flex-1 flex justify-center items-center p-0`}>
                <h1 className={`font-inter font-normal text-[44px] text-center ${theme === 'light' ? 'text-text' : 'text-light-text'}`}>See how our clients perform.</h1>
              </div>
              <br></br>
                  <br></br>
              <div className={`${styles.flexStart} mr-20`} >
                  <p2 className={`font-inter font-normal text-[16px] text-center`}>Imperdiet sed euismod nisi porta. Feugiat pretium nibh ipsum consequat nisl.
                  <br></br>
                  <br></br>
                  Vel quam elementum pulvinar etiam non. Dignissim convallis aenean et tortor at risus viverra adipiscing at.
                  <br></br>
                  <br></br>
                  Amet risus nullam eget felis eget nunc lobortis. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
                  <br></br>
                  <br></br>
                  Vestibulum morbi blandit cursus risus at. Donec ultrices tincidunt arcu non sodales.
                  </p2>
                </div>
            </section>
          </div>
        </div>


        

  

      </div>
      
      
    )
  }
  
  export default Home
  