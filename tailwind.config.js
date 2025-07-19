// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotateY90deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  }
}