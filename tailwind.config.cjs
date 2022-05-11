module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'ui-serif'],
      title: ['Heebo', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        // component colors
        primary: {
          main: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          main : 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        accent: {
          'pink-light': 'var(--color-accent-pink-light)',
          'pink-dark': 'var(--color-accent-pink-dark)',
          green: 'var(--color-accent-green)',
          yellow: 'var(--color-accent-yellow)',
        },
        error: 'var(--color-error)',
        white: 'var(--color-white)',
        offwhite: 'var(--color-offwhite)',
        black: 'var(--color-black)',
        // text colors
        'texton-primary': 'var(--color-text-on-primary)',
        'texton-secondary': 'var(--color-text-on-secondary)',
      },
      dropShadow: {
        'playful-primary': [
            '1.75px 1.75px var(--color-primary)',
            '4px 4px var(--color-primary)'
        ],
        'playful-primary-deep': [
          '8px 8px var(--color-primary)'
      ]
      }
    },
  },
  plugins: [],
}