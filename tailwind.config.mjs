// tailwind.config.js placeholder
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via a 'class' (you toggle this class on the <html> or <body>)
  theme: {
    extend: {
      colors: {
        // Add any custom colors if needed
        primary: {
          DEFAULT: '#7c3aed', // purple-600
          light: '#a78bfa',   // purple-400
          dark: '#5b21b6',    // purple-800
        },
      },
    },
  },
  plugins: [],
}
