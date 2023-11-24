/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      spacing: {
        content: '1rem',
        'content-2': '1.5rem',
      },
      colors: {
        primary: 'rgba(0,0,0,0.75)',
        secondary: {
          100: '#efefef',
          200: '#c2c2c2',
        },
        'accent': '#2c9d15',
      },
    },
  },
  plugins: [],
};
