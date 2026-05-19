import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:      '#000000',
          white:      '#ffffff',
          'off-white':'#f7f6f3',
          beige:      '#e8e4dc',
          'light-gray':'#d4d0c8',
          charcoal:   '#1a1a1a',
          'mid-gray': '#888888',
          'near-black':'#0a0a0a',
          stone:      '#b0aba0',
        },
      },
      fontFamily: {
        sans:    ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9' }],
        '11xl': ['12rem', { lineHeight: '0.85' }],
      },
    },
  },
  plugins: [],
}

export default config
