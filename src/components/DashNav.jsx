import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import styles from '../style.js';

const navLinks = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: "",
  },
  {
    id: "account",
    name: "Account Info",
    icon: "",
  },
  {
    id: "refferals",
    name: "Referrals",
    icon: "",
  },
  {
    id: "support",
    name: "Support",
    icon: "",
  },
]

function DashNav() {
  const { theme } = useTheme();
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="px-10 py-12 flex flex-col border border-r-1 w-1/6 h-screen">
      <div className="flex items-center">
        <span className="font-inter">Dashboard</span>
      </div>

      <div className={`${theme === 'light' ? 'text-light-text' : 'text-text'} cursor-pointer font-mullish mt-5 flex-col space-y-8`}>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`font-mullish font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${theme === 'light' ? 'text-light-text' : 'text-text'} mr-10`}>

              <Link to={`/${nav.id}`}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(-1)}
                    className={ 
                      `${hoverIndex === index ? (theme === 'light' ? 'text-light-accent' : 'text-secondary') : ''} transition-colors duration-250`}>  
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
        
    </div>
  )
}

export default DashNav