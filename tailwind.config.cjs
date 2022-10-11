/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '95': '95vh'
      },
      width: {
        '95': '95vw'
      },
    },
  },
  plugins: [],
}
