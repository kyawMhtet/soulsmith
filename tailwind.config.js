const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-', // Set your custom prefix here
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3738',
        bone: '#E8E5D7',
        midnight: '#040406',
        gold: '#C4A962',
      }
    },
  },
  plugins: [],
};

