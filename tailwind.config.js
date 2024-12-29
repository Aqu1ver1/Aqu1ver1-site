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
        'brand-blue': '#02357B',
        'brand-light': '#E9FFF9',
      }
    },
  },
  plugins: [],

}

