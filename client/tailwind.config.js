/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      normal: '26px',
    },
    
    
    extend: {
      colors: {
        Example: '#010101',
      }
    }
  },
  plugins: [],
}