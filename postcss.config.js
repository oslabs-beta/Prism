//const tailwindcss = require('tailwindcss');
import tailwindcss from 'tailwindcss';
export default {
  plugins: ['postcss-preset-env', tailwindcss('./tailwind.config.js')],
};
