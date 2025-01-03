/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./src/assets/HomeBackGround.jpg')",
      },
      colors:{
        'brand-yellow': '#EDB217',
        'brand-dark':'#292528',
        'brand-light': '#FCF5E4',
      }
    },
  },
  plugins: [],

}

