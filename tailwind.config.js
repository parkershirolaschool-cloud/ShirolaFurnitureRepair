/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'earth-green': {
          50: '#f0f7f4',
          100: '#dceee4',
          200: '#b8ddc9',
          300: '#8bc5a7',
          400: '#5ea883',
          500: '#3d8b66',
          600: '#2d6f51',
          700: '#245942',
          800: '#1f4737',
          900: '#1a3b2f',
        },
      },
    },
  },
  plugins: [],
};
