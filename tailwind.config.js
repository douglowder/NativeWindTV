/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) 1',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) 2',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
};
