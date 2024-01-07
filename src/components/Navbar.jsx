import { useState } from 'react'
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { closeDark, closeLight, logo, menuDark, menuLight } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import styles from '../style.js';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { theme } = useTheme();
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const svgFillClass = `${theme === 'light' ? 'light-secondary' : 'light-primary'}`;
  
  const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();

    return (
      <button onClick={toggleTheme} className={`my-4 ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    );
  };

  return (
    <nav className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} w-full flex py-6 justify-between items-center navbar`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      </div>
      <img src={logo} className={`w-[10%] h-[10%`} currentColor={svgFillClass} alt="Luminar Finance Logo"/>
      <ToggleThemeButton />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id}
          className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${theme === 'light' ? 'text-light-text' : 'text-text'} mr-10`}>

            <Link to={`/${nav.id}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  className={ 
                    `${hoverIndex === index ? (theme === 'light' ? 'text-light-secondary' : 'text-secondary') : ''}`}>  
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={
            toggle 
              ? (theme === 'light' ? closeDark : closeLight)
              : (theme === 'light' ? menuDark : menuLight)   
          }        
          alt="menu button"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex flex-col justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} ${theme === 'light' ? 'text-light-text' : 'text-text'}`}
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