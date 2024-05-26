/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css", "./main/*.{html, css}"],
  theme: {
    extend: {
      container:{
        center: true,
      },
      colors:{
        'edu-blue': '#48a5db',
        'body-bg': '#1b365e',
        'dark-blue': '#294062',
        'light-blue': '#5779ab',
        'footer-blue': '#111925'
      },
      fontFamily:{
        Poppins:["Poppins, sans-serif"]
      }
    },
  },
  plugins: [],
}

