/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#6db5aa",
        secondary: "#f1f7f7",
        tertiary: "#3A4135",
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // you can add more themes if needed
  }
}