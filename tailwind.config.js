/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      placeholderColor: {
        'black': '#000000',
      },
      maxHeight: {
        '65vh': '65vh',
        '53vh': '53vh',
        '43vh': '43vh',
      },
    },
  },
  plugins: [],
}