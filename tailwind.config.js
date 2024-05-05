/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       'desktop': '1025px' ,
       'tablet': '500px',
       'phone': ' 300px'
      
      },
  },
  plugins: [],
}}