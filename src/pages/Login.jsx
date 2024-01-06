// import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import styles from '../style.js';

const Login = () => {
  const { theme } = useTheme();
  // useEffect(() => {
  //   window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1191980603357286411&response_type=code&redirect_uri=https%3A%2F%2Fluminarfinance.net%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+email+guilds";
  // }, []);
  return (
    <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'} `}>
      <div className={`${theme === 'light' ? 'bg-light-background' : 'bg-background'} ${theme === 'light' ? 'text-light-text' : 'text-text'} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ${theme === 'light' ? 'bg-light-background' : 'bg-background'}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <button 
                onClick={() => window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1191980603357286411&response_type=code&redirect_uri=https%3A%2F%2Fluminarfinance.net%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+email+guilds"}
                className="button-class">
                Login with Discord
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login