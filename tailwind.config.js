/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
      },
      colors: {
        pantoneBg: '#F4E1A1',
        clockBg: 'rgba(0, 0, 0, 0.8)'
      },
      spacing: {
        'clock': '500px',
        'clockWidth': '800px'
      }
    },
  },
  plugins: [],
}
