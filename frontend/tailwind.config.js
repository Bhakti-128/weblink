/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',       // Cyberpunk Cyan
          purple: '#bc13fe',     // Electric Purple
          dark: '#0a0a0f',       // Deep Space Black
          surface: '#12121a',    // Slightly lighter dark for cards
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'], // For the code terminal view
        sans: ['Inter', 'sans-serif'],    // For clean UI text
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 10px #00f3ff' },
          '50%': { opacity: .5, boxShadow: '0 0 20px #bc13fe' },
        }
      }
    },
  },
  plugins: [],
}