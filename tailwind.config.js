/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: {
          accent: {
            default: '#005DFF',
            strong: '#004ACC',
            medium: '#0A3889',
            weak: '#102343'
          },
          neutral: {
            default: '#FFFFFF',
            strong: '#808080',
            medium: '#4D4D4D',
            weak: '#202020'
          },
          section: '#000000',
          background: '#141414',
          success: {
            default: '#359A73',
            weak: 'rgba(53, 154, 115, 0.06)'
          },
          danger: {
            default: '#DB5125',
            weak: 'rgba(219, 81, 37, 0.06)'
          },
          warning: {
            default: '#CB8A14',
            weak: 'rgba(203, 138, 20, 0.06)'
          },
        },
        white: {
          accent: {
            default: '#005DFF',
            strong: '#004ACC',
            medium: '#78A7FA',
            weak: '#C0D3F7'
          },
          neutral: {
            default: '#000000',
            strong: '#7C7D80',
            medium: '#C0C1C4',
            weak: '#E4E5E9'
          },
          section: '#FFFFFF',
          background: '#F5F6FA',
          success: {
            default: '#359A73',
            weak: 'rgba(53, 154, 115, 0.06)'
          },
          danger: {
            default: '#DB5125',
            weak: 'rgba(219, 81, 37, 0.06)'
          },
          warning: {
            default: '#CB8A14',
            weak: 'rgba(203, 138, 20, 0.06)'
          },
        },
        special: {
          black: '#000000',
          white: '#FFFFFF'
        }
        
      }
    },
  },
  plugins: [],
}
