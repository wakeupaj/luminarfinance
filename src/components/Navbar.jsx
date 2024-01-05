import { useState } from 'react'
import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { closeDark, closeLight, logo, menuDark, menuLight } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { theme } = useTheme();

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`my-4 ${theme === 'light' ? 'text-light-text' : 'text-text'}`}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Luminar Finance Logo" className="w-[124px] h-[32px]"/>
      <ToggleThemeButton />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id}
          className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${theme === 'light' ? 'text-light-text' : 'text-text'} mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
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
            className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-text`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar