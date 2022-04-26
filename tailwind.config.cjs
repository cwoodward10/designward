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
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'accent-pink-light': 'var(--color-accent-pink-light)',
        'accent-pink-dark': 'var(--color-accent-pink-dark)',
        'accent-green': 'var(--color-accent-green)',
        'accent-yellow': 'var(--color-accent-yellow)',
        error: 'var(--color-error)',
        white: 'var(--color-white)',
        offwhite: 'var(--color-offwhite)',
        black: 'var(--color-black)',
        // text colors
        'texton-primary': 'var(--color-text-on-primary)',
        'texton-secondary': 'var(--color-text-on-secondary)',
      }
    },
  },
  plugins: [],
}