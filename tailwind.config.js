/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.(js|ts|jsx|tsx)"],
  theme: {
    extend: {
      colors: {
        // Text:
        white: "rgb(255, 255, 255)",
        "light-gray": "rgb(129, 139, 151)",
        "gray-2": "rgb(138, 138, 138)",
        "gray-3": "rgb(32, 32, 32)",

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
      lineHeight: {
        header: "1.2rem",
        text: "1.5rem",
      },
      letterSpacing: {
        header: "-1%",
      },
      backgroundImage: {
        "stars-gradient": `linear-gradient(90deg, white 90%, gray-2 10%;`,
      },
    },
  },
  plugins: [],
};
