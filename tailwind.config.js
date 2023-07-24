/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: {
      dropShadow: {
        '2xl': '6px 5px 5px rgba(0, 0, 0, 0.20)',
        '3xl': '6px 5px 5px rgba(0, 0, 0, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      spacing: {
        0.1: '0.1rem', // Define your custom padding value
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      gridTemplateAreas: {
        layout: [
          'sidebar header header header header header',
          'sidebar main main main main main ',
          'sidebar main main main main main',
          'sidebar main main main main main',
          'sidebar main main main main main',
          'sidebar main main main main main',
          'sidebar main main main main main',
          'sidebar main main main main main',
          'sidebar main main main main main',
          'sidebar main main main main main',
        ],
      },
      gridTemplateColumns: {
        layout: '1fr 1fr 1fr 1fr 1fr 1fr',
      },
      gridTemplateRows: {
        layout: '1fr 1fr 1fr 1fr,1fr,1fr,1fr,1fr,1fr,1fr',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
