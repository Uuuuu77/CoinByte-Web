module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { orange: '#FF6A00', gold: '#FFB400', black: '#1A1A1A', 950: '#0A0A0A' },
        secondary: { light: '#E0E0E0', gray: '#333333' }
      },
      fontFamily: { sans: ['Manrope', 'ui-sans-serif', 'sans-serif'], serif: ['Fraunces', 'ui-serif', 'serif'], mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'] },
      animation: { 'pulse-slow': 'pulse 3s ease-in-out infinite', glow: 'glow 2s ease-in-out infinite alternate' },
      keyframes: { glow: { from: { boxShadow: '0 0 4px rgba(255,106,0,0.3)' }, to: { boxShadow: '0 0 16px rgba(255,106,0,0.6)' } } }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/container-queries')]
}
