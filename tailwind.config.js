/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#B565A7',
        'brand-yellow': '#F4D03F',
        'brand-pink': '#E91E63',
        'brand-light-purple': '#D8A7CA',
        'brand-dark-purple': '#8E44AD'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #B565A7 0%, #D8A7CA 100%)'
      }
    },
  },
  plugins: [],
}