
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,ts}', // Asegúrate de incluir todas las rutas de tus archivos donde usas clases de Tailwind.
    './src/app/**/*.{html,ts}',
  ],
  darkMode: 'selector',
  theme: { 
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      boxShadow: {
       'card': '0px 10px 20px -10px rgb(7 0 52 / 10%)'
      }
      
    },
  },
  plugins: [],
}