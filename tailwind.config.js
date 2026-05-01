const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["IBM Plex Mono", "Inter", "system-ui", "sans"],
      mono: ["IBM Plex Mono", "monospace"],
      pixel: ["Geist Pixel", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
    pink: colors.pink,
    },
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        pixel: ["Geist Pixel", "monospace"],
      },
      colors: {
        bg: "#000a1f",
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#00c7ff",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#192742",
        "fun-pink-light": "#009ac5",
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'blur-text': {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(4px)' },
        },
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'blur-text': 'blur-text 1s ease-out forwards',
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-animate"),
  ],
};
