/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{vue,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Cabin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}