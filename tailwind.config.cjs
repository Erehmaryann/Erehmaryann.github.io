/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "830px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
  darkMode: "class",
  variants: {
    scrollbars: ["rounded"],
  },
};
