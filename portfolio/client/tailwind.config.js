/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f97316', // orange-500
        accent: '#fb923c',  // orange-400
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
        body: ['"Josefin Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}
