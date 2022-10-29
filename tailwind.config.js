const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: colors.neutral,
        'l-bg': colors.neutral[200],
        'l-clr': colors.neutral[800],
        'd-bg': colors.neutral[800],
        'd-clr': colors.neutral[200],
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
