/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D10019', // San Fermín red
          light: '#FF1A3E',
          dark: '#A10014',
        },
        secondary: {
          DEFAULT: '#F8F9FA', // Light background
          dark: '#E9ECEF',
          light: '#FFFFFF',
        },
        neutral: {
          DEFAULT: '#343A40',
          light: '#6C757D',
          lighter: '#ADB5BD',
          dark: '#212529',
        },
        accent: {
          DEFAULT: '#F5B700', // Gold accent
          dark: '#D69E00',
          light: '#FFD54F',
        },
        light: {
          DEFAULT: '#FFFFFF',
          dark: '#F8F9FA',
          darker: '#E9ECEF',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
        'hover': '0 20px 30px -10px rgba(0, 0, 0, 0.3)',
      },
      height: {
        'screen-90': '90vh',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};