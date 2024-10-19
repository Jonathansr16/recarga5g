
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'selector',
  theme: { 
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}