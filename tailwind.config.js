/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(0,0,0,0.75)',
        secondary: {
          100: '#efefef',
          200: '#c2c2c2',
        },
        accent: '#00a868',
      },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
      },
      boxShadow: {
        elevated: '0 -2px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
