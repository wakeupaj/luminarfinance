import { useState } from 'react'
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { closeDark, closeLight, menuDark, menuLight } from '../assets';
import darkLogo from '../assets/lightArrow_LogoBrand.svg';
import lightLogo from '../assets/darkArrow_LogoBrand.svg';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from '../style.js';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { theme } = useTheme();
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { isAuthenticated } = useAuth();

  const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();

    return (
      <button onClick={toggleTheme} className={`my-4 ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    );
  };

  const filteredNavLinks = navLinks.filter(link => {
    if (isAuthenticated) {
      return link.id !== 'login';
    } else {
      return link.id !== 'dashboard';
    }
  });

  return (
    <nav className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} w-full flex py-6 justify-between items-center navbar`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      </div>
      <img src={theme === 'light' ? darkLogo : lightLogo} className="w-[10%] h-[10%] sm:flex hidden"  alt="Luminar Finance Logo"/>

      <ToggleThemeButton />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {filteredNavLinks.map((nav, index) => (
          <li 
          key={nav.id}
          className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${theme === 'light' ? 'text-light-text' : 'text-text'} mr-10`}>

            <Link to={`/${nav.id}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  className={ 
                    `${hoverIndex === index ? (theme === 'light' ? 'text-light-accent' : 'text-secondary') : ''} transition-colors duration-250`}>  
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      

      <div className="sm:hidden flex flex-1 justify-end items-center pr-4">
      <img src={theme === 'light' ? darkLogo : lightLogo} className="w-[10%] h-[10%] sm:flex hidden"  alt="Luminar Finance Logo"/>
        <img 
          src={
            toggle 
              ? (theme === 'light' ? closeDark : closeLight)
              : (theme === 'light' ? menuDark : menuLight)   
          }        
          alt="menu button"
          className="w-[28px] h-[28px] object-contain mr-2"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex flex-col justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-text`}
            >
              <Link to={`/${nav.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={ 
                    `${activeIndex === index ? (theme === 'light' ? 'text-light-secondary' : 'text-secondary') : ''}`}>   
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar