/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.(js|ts|jsx|tsx)"],
  theme: {
    extend: {
      colors: {
        // Text:
        white: "rgb(245, 245, 245)",
        "light-gray": "rgb(129, 139, 151)",

        // Background:
        "dark-navy-blue": "rgb(12, 20, 30)",
        "dark-gray": "rgb(34, 40, 47)",
        gray: "rgb(54, 63, 77)",
        "dark-turquoise": "rgb(21, 59, 84)",
        "navy-blue": "rgb(38, 48, 78)",

        // Secondary:
        "light-blue": "rgb(113, 199, 247)",
        "light-navy-blue": "rgb(85, 109, 165)",

        // Accents:
        "light-green": "rgb(140, 171, 64)",
        "light-red": "rgb(170, 74, 62)",
        "light-brown": "rgb(161, 151, 85)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
