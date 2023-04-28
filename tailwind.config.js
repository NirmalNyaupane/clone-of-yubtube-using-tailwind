/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        grey:"#ccc",
        fontGrey:"#CCCCCC"
      },
      fontFamily:{
        primary:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

