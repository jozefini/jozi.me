const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: colors.neutral,
        'l-bg': colors.neutral[100],
        'l-clr': colors.neutral[900],
        'd-bg': colors.neutral[900],
        'd-clr': colors.neutral[100],
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        11: '2.75rem',
      },
    },
  },
  plugins: [],
}
