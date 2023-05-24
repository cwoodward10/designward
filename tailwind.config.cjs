const plugin = require('tailwindcss/plugin');

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
      colors: {
        // component colors
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: {
          'pink-light': 'var(--color-accent-pink-light)',
          'pink-dark': 'var(--color-accent-pink-dark)',
          green: 'var(--color-accent-green)',
          yellow: 'var(--color-accent-yellow)',
          blue: 'var(--color-accent-blue)',
        },
        error: 'var(--color-error)',
        white: 'var(--color-white)',
        offwhite: 'var(--color-offwhite)',
        black: 'var(--color-black)',
        // text colors
        'text-white': 'var(--color-text-white)',
      },
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
  plugins: [],
}