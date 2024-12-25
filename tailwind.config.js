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
        'brand-dark': '#01003D',
      }
    },
  },
  plugins: [],

}

