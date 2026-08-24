/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F6F1E8',
          base: '#EFE8DC',
          sand: '#E6DCCF',
          card: 'rgba(255, 252, 247, 0.78)',
          cardMuted: 'rgba(244, 237, 227, 0.85)',
          border: 'rgba(197, 160, 89, 0.35)',
        },
        gold: {
          light: '#F8EED8',
          DEFAULT: '#C5A059',
          deep: '#A37F3B',
          dark: '#7D5F28',
          glow: 'rgba(197, 160, 89, 0.2)',
        },
        espresso: {
          DEFAULT: '#2C221B',
          deep: '#1D1611',
          muted: '#54463C',
          light: '#7A6B60',
        },
      },
      fontFamily: {
        arabic: ['"Amiri"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'widest-luxury': '0.35em',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'sway-slow': 'swaySlow 6s ease-in-out infinite',
        'sway-reverse': 'swayReverse 7s ease-in-out infinite',
        'petal-fall-1': 'petalFall1 12s linear infinite',
        'petal-fall-2': 'petalFall2 16s linear infinite',
        'petal-fall-3': 'petalFall3 14s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        swaySlow: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(2.5deg) scale(1.02)' },
        },
        swayReverse: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(-2.5deg) scale(1.02)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.65 },
        },
      }
    },
  },
  plugins: [],
}
