/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      lightcolors: {
        'text': '#0f0b23',
        'background': '#f8f7fd',
        'primary': '#393163',
        'secondary': '#5440ba',
        'accent': '#4529d1',
      },
      darkcolors: {
        'text': '#e0dcf4',
        'background': '#030208',
        'primary': '#a49cce',
        'secondary': '#5945bf',
        'accent': '#4a2ed6',
       },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
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