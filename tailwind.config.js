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

