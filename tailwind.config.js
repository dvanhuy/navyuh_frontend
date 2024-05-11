/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#7166F9'
        },
        lightgrey: '#DFE6EF',
        'dark-blue': '#2B2F42',
        icon: '#9FA7D0',
        background: '#F6F6FB',
        // 'light-blue-grey': '#DFE6EF',
        // 'dark-blue-grey': '#D1DDEB'
      },
      fontFamily: {
        patrick: ['Patrick Hand', 'cursive'],
      },
    },
  },
  plugins: [],
}

