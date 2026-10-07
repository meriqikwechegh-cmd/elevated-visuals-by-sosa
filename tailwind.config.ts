import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f3eee6',
          200: '#e5dac8',
          300: '#d4c2a4',
          400: '#c0a67d',
          500: '#ad8c5a',
          600: '#987349',
          700: '#7e5b3c',
          800: '#674a34',
          900: '#543d2c',
          950: '#2d1f16',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'medium': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'strong': '0 30px 60px -20px rgba(0, 0, 0, 0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
