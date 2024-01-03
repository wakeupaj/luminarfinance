/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': '#e0dcf4',
        'background': '#0f0b23',
        'primary': '#393163',
        'secondary': '#5945bf',
        'accent': '#4a2ed6',
      
        'light-text': '#0f0b23',
        'light-background': '#e0dcf4',
        'light-primary': '#a49cce',
        'light-secondary': '#5440ba',
        'light-accent': '#4529d1',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mullish: ["Mulish", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
