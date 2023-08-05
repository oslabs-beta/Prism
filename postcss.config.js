const tailwindcss = require('tailwindcss');
//import tailwindcss from 'tailwindcss';
module.exports = {
  plugins: ['postcss-preset-env', tailwindcss('./tailwind.config.js')],
};
