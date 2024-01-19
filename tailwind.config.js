/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.(js|ts|jsx|tsx)"],
  theme: {
    extend: {
      colors: {
        // Text:
        white: "#f5f5f5",
        "light-gray": "#818b97",
        // Background:
        "dark-navy-blue": "#0c141e",
        "dark-gray": "#22282f",
        gray: "#363f4d",
        "dark-turquoise": "#153b54",
        "navy-blue": "#26304e",
        // Secondary:
        "light-blue": "#71c8f7",
        "light-navy-blue": "#556da5",
        // Accents:
        "light-green": "#8cab40",
        "light-red": "#aa4a3e",
        "light-brown": "#a19755",
      },
      fontFamily: {
        roboto: ["Roboto", sans - serif],
      },
    },
  },
  plugins: [],
};
