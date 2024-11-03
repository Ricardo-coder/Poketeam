import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        display: ['var(--font-pokemon)', 'sans-serif'],
      },
      gridTemplateRows: {
        app: 'min-content max-content min-content',
      },
      colors: {
        red: '#FB1B1B',
        yellow: '#FFCC00',
        blue: '#0075BE',
      },
    },
  },
  plugins: [],
}
export default config
