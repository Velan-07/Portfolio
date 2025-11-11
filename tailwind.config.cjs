module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        accent: "#7c3aed",
        darkbg: "#07101a"
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(2,6,23,0.7)',
        'glow': '0 6px 30px rgba(6,182,212,0.18)'
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '28ch' }
        }
      },
      animation: {
        floaty: 'floaty 3.8s ease-in-out infinite',
      }
    }
  },
  plugins: []
};
