/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your source files
    ],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    plugins: [], // To use dark mode with the 'dark' class
  }
  