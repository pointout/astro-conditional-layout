// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.stone,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      white: '#FFF'
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      },
      transitionProperty: {
        height: 'height',
        display: 'display',
        visibility: 'visibility'
      },
      fontFamily: {
        sans: [
          'Atkinson Hyperlegible Regular',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        serif: [
          'Atkinson Hyperlegible Regular',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif'
        ],
        sansBold: ['Atkinson Hyperlegible Bold'],
        sansItalic: ['Atkinson Hyperlegible Italic'],
        sansBoldItalic: ['Atkinson Hyperlegible BoldItalic']
      }
    },
    maxWidth: {
      hd: '1920px'
    }
  },
  variants: {
    extend: {
      transform: ['hover']
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
