/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: `url('/src/assets/images/hero-image.png')`,
        hero2: `url('/src/assets/images/hero-image2.png')`,
        hero3: `url('/src/assets/images/hero-image3.png')`
      },
      fontFamily: {
        nunito: ['Nunito', 'serif'],
      }
    },
  },
  plugins: [],
}

