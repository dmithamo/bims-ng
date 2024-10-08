/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(0,0,0,0.55)',
        secondary: {
          100: 'rgba(0,0,0,0.50)',
          200: 'rgba(0,0,0,0.65)',
        },
        accent: 'rgb(0,0,0)',
      },
      boxShadow: {
        elevated: '0 -2px 6px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        handwriting: ['Allison', 'cursive'],
      },
      fontSize: {
        base: ['12px'],
      },
    },
  },
  plugins: [],
};
