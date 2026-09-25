/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#191918',
        body: '#31302e',
        muted: '#66615d',
        faint: '#a39e98',
        line: '#dfdcd9',
        sand: '#f6f5f4',
        snow: '#f9f9f8',
        blue: {
          DEFAULT: '#0075de',
          hover: '#005bab',
          soft: '#e6f3fe',
          tint: '#f2f9ff',
        },
        green: '#1aae39',
        yellow: '#fbeccc',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        frame: '0 1px 2px rgba(25,25,24,0.04), 0 8px 24px rgba(25,25,24,0.08), 0 24px 64px rgba(25,25,24,0.06)',
        card: '0 1px 2px rgba(25,25,24,0.04), 0 4px 12px rgba(25,25,24,0.06)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
