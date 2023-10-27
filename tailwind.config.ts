import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['var(--franklin)'],
        poppins: ['var(--poppins)'],
        franklin: ['var(--franklin)']
      },
      colors: {
        mohana: '#fd07c4',
        bgMohana: '#0f020c'
      }
    }
  },
  plugins: []
}
export default config
