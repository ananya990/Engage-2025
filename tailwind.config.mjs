/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUnblurGlow: {
          '0%': {
            opacity: '0',
            filter: 'blur(8px)',
            textShadow: '0 0 0 transparent',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            textShadow: '0 0 20px #8b5cf6, 0 0 30px #c084fc',
          },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fadeInUnblurGlow: 'fadeInUnblurGlow 1.5s ease-out forwards',
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
