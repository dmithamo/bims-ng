/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(0,0,0,0.75)',
        secondary: {
          100: 'rgba(0,0,0,0.50)',
          200: 'rgba(0,0,0,0.65)',
        },
        accent: 'rgb(0,0,0)',
      },
      fontFamily: {
        metric: ['Metric-Regular', 'serif'],
        bold: ['Metric-Bold', 'serif'],
        italic: ['Metric-RegularItalic', 'serif'],
        chronos: ['ChronosSerif-Hatched', 'serif'],
      },
      boxShadow: {
        elevated: '0 -2px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
