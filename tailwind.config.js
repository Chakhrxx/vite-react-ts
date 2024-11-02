/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.7s ease-in-out forwards",
      },
      colors: {
        primary: "#FBBB00",
        secondary: "#2C2C2C",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sans: ["Kanit", "sans-serif"],
      },
      boxShadow: {
        tabs: "4px 4px 0px #ffffff",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      perspective: {
        800: "800px",
      },
    },
  },
  plugins: [],
};
