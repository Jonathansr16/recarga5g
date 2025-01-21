import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */

export default {
  content: [
     "./src/**/*.{html,ts}"

  ],
  darkMode: 'selector',
  theme: { 
    extend: {
      fontFamily: {
        interVariable: ['Inter Variable', 'sans-serif']
      },

      boxShadow: {
       'card': '0px 10px 20px -10px rgb(7 0 52 / 10%)'
      },
    },
  },
  plugins: [animations],
}