/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],

  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      ["2xl"]: "1530px",
    },
    extend: {
      fontFamily: {
        cursive: ["cursive,sans"],
        fantasy: ["fantasy", "sans"],
      }
    },
  },
  plugins: [],
}