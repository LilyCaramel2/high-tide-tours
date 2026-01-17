/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rasta: {
          red: '#DC2626',
          'red-light': '#EF4444',
          yellow: '#FBBF24',
          'yellow-light': '#FCD34D',
          green: '#10B981',
          'green-light': '#34D399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
