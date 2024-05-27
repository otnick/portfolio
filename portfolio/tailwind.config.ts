/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // oder 'media'
    theme: {
      extend: {
        colors: {
          light: {
            background: '#161616',
            surface: '#ffffff',
            text: '#161616',
            primary: '#68e700',
          },
          dark: {
            background: '#ffffff',
            surface: '#161616',
            text: '#ffffff',
            primary: '#68e700',
          },
          // Weitere Themes hier definieren
        },
      },
    },
    plugins: [
    ],
  }
  