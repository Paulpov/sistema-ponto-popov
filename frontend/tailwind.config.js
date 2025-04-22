module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',
        secondary: '#1E3A8A',
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
export default {
  darkMode: 'class', // ESSENCIAL
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}



