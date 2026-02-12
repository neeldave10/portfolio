/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
          '50%': { transform: 'scale(1.1)', opacity: 0.3 },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeInDown: 'fadeInDown 0.8s ease forwards',
        'spin-slow': 'spinSlow 20s linear infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s infinite',
      },
    },
  },
  plugins: [],
};
