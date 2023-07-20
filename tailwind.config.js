/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 500: '#AAEEC4;' },
        secondary: { 500: '#22252B;' },
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
