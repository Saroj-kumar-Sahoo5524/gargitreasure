import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B1B34',
        'ink-soft': '#16294A',
        royal: '#2451D6',
        'royal-deep': '#1B3DA6',
        teal: '#0E7C7B',
        'teal-deep': '#0A5F5E',
        brass: '#A87C34',
        bg: '#F6F7FA',
        'bg-alt': '#EEF1F6',
        'text-base': '#101A2E',
        'text-muted': '#5A6478',
        'text-soft': '#8791A3',
        'border-base': '#E3E7EF',
        'border-soft': '#EDF0F5',
        success: '#0E7C4A',
        warn: '#B5641C',
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(11,27,52,.06)',
        md: '0 8px 24px rgba(11,27,52,.08)',
        lg: '0 24px 64px rgba(11,27,52,.14)',
      },
      maxWidth: {
        content: '1240px',
      },
      fontSize: {
        'clamp-h1': 'clamp(38px, 4.6vw, 60px)',
        'clamp-h2': 'clamp(28px, 3.4vw, 40px)',
        'clamp-stat': 'clamp(28px, 3vw, 38px)',
      },
    },
  },
  plugins: [],
};

export default config;
