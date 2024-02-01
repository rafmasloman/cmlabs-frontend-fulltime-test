import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-hero': 'url("/src/assets/images/thumbnail-bg.png")',
      },
      colors: {
        'primary-color': '#3EB616',
        'secondary-color': '#FF8B00',
      },
    },
  },
  plugins: [],
};
export default config;
