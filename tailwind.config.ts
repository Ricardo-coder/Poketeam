import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

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
      textShadow: {
        sm: '2px 0 var(--tw-shadow-color), -2px 0 var(--tw-shadow-color), 0 2px var(--tw-shadow-color), 0 -2px var(--tw-shadow-color), 1px 1px var(--tw-shadow-color), -1px -1px var(--tw-shadow-color), 1px -1px var(--tw-shadow-color), -1px 1px var(--tw-shadow-color)',
        DEFAULT:
          '3px 0 var(--tw-shadow-color), -3px 0 var(--tw-shadow-color), 0 3px var(--tw-shadow-color), 0 -3px var(--tw-shadow-color), 2px 2px var(--tw-shadow-color), -2px -2px var(--tw-shadow-color), 2px -2px var(--tw-shadow-color), -2px 2px var(--tw-shadow-color)',
        lg: '4px 0 var(--tw-shadow-color), -4px 0 var(--tw-shadow-color), 0 4px var(--tw-shadow-color), 0 -4px var(--tw-shadow-color), 3px 3px var(--tw-shadow-color), -3px -3px var(--tw-shadow-color), 3px -3px var(--tw-shadow-color), -3px 3px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function (api) {
      const { matchUtilities, theme } = api
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
export default config
