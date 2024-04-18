/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      'darkPurple':"#38071A",
      'light':"#FF9E8C",
      'white':"#fff",
      'lightgray':"#CBD4E6",
      'darkgray':"#7C8DB0"
    },

  },
  plugins: [],
}