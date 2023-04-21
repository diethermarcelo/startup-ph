/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1200px"
        }
      }
    },
  },
  plugins: [],
}

