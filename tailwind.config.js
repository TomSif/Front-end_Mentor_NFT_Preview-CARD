/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(178, 100%, 50%)",
        "primary-blue": "hsl(216, 55%, 71%)",
        "neutral-db-main": "hsl(217, 54%, 11%)",
        "neutral-db-card": "hsl(216,50%,16%)",
        "neutral-db-line": "hsl(215,32%,27%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
