import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import styles from '../style';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const discordOAuthUrl = "https://discord.com/api/oauth2/authorize?client_id=1191980603357286411&response_type=code&redirect_uri=https%3A%2F%2Fluminarfinance.net%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+email+guilds";

  return (
    <div className={`w-full overflow-hidden ${theme === 'light' ? 'bg-light-background' : 'bg-background'} `}>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="home" className={`flex ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart}`}>
              <a
                href={discordOAuthUrl}
                className="flex items-center py-2 px-4 rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/80 hover:text-white/80 transition-colors duration-300"
              >
                Login with Discord
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
};

export default Login;
