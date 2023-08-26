/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/tailwind/native');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './nativewind-output.js'],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
};
