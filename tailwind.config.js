module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { primary: { orange: '#FF6A00', gold: '#FFB400', black: '#1A1A1A' }, secondary: { light: '#E0E0E0' } }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/container-queries')]
}
