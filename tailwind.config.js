/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#07090E',
          900: '#0B0F19',
          850: '#111726',
          800: '#171F33',
          700: '#232F4D',
          600: '#38486D',
          500: '#526694',
          400: '#8395BD',
          300: '#B2C0DC',
          200: '#D6E0F0',
          100: '#EDF3FA',
        },
        selnikel: {
          red: '#E11D48',
          orange: '#F97316',
          accent: '#0284C7',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
      },
      aspectRatio: {
        '16/9': '16 / 9',
      }
    },
  },
  plugins: [],
}
