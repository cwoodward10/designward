const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'ui-serif'],
      title: ['Sofia Sans', 'ui-sans-serif'],
    },
    colors: {
      // component colors
      primary: '#2D3754',
      secondary: '#31CDDD',
      accent: {
        'pink-light': '#FF4785',
        'pink-dark': '#FF003C',
        green: '#47FF91',
        yellow: '#FFDE88',
        blue: '#02A4FF',
      },
      gray: colors.gray,
      error: '#AE003A',
      white: '#F9F9F9',
      offwhite: '#FFFFFC',
      black: '#121D29',
      // text colors
      'text-white': '#F4FCFF',
      transparent: colors.transparent
    },
    fontSize: {
      xs: '0.625rem', // 10px
      sm: '0.75rem', // 12px
      base: '0.875rem', // 14px
      lg: '1rem', // 16px
      'xl': '1.125rem', // 18px
      '2xl': '1.25rem', // 20px
      '3xl': '1.5rem', // 24px
      '4xl': '2.25rem', // 36px
      '5xl': '2.625rem', // 42px
      '6xl': '3rem', // 48px
      'hero': '6rem' // 96px
    },
    extend: {
      height: {
        '108': '432px',
      },
      maxWidth: {
        'page': '912px'
      },
      dropShadow: {
        'playful-primary-3d': [
            '1.75px 1.75px var(--color-primary)',
            '4px 4px var(--color-primary)'
        ],
        'playful-primary-short': [
          '4px 4px var(--color-primary)'
        ],
        'playful-primary-deep': [
          '8px 8px var(--color-primary)'
        ],
        'playful-primary-extra-deep': [
          '12px 12px var(--color-primary)'
        ],
        'playful-secondary-3d': [
          '1.75px 1.75px var(--color-secondary)',
          '4px 4px var(--color-secondary)'
        ],
        'playful-secondary-short': [
          '4px 4px var(--color-secondary)'
        ],
        'playful-secondary-deep': [
          '8px 8px var(--color-secondary)'
        ],
        'playful-secondary-extra-deep': [
          '12px 12px var(--color-secondary)'
        ],
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}