/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss';
const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        spinAround: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        flip: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
          '100%': { transform: 'scaleX(1)' },
        },
        jiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        swing: {
          '20%': { transform: 'rotate3d(0, 0, 1, 15deg)' },
          '40%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
          '60%': { transform: 'rotate3d(0, 0, 1, 5deg)' },
          '80%': { transform: 'rotate3d(0, 0, 1, -5deg)' },
          '100%': { transform: 'rotate3d(0, 0, 1, 0deg)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
          '70%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        wobble: 'wobble 1s ease-in-out infinite',
        bounce: 'bounce 1s ease-in-out infinite',
        spinAround: 'spinAround 3s linear infinite',
        heartBeat: 'heartBeat 2s ease-in-out infinite',
        flip: 'flip 3s ease-in-out infinite',
        jiggle: 'jiggle 1s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        swing: 'swing 2s ease-in-out infinite',
        bounceIn: 'bounceIn 1s ease-in-out',
        shake: 'shake 1s ease-in-out infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#f03e3e',
          secondary: '#af8484',

          'primary-content': '#bdb4b2',
          'primary-content-focus': '#1c1917',

          'secondary-content': '#a9a1a2',

          'tertiary-content': '#bea6a9'
        },
      },
    ]
  },
  plugins: [
      Myclass,
      require("daisyui")
  ],
}

