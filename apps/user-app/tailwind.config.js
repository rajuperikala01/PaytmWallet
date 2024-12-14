const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        exmd: "1000px",
      },
      animation: {
        "gradient-diagonal": "slow-gradient 5s ease infinite",
        "layered-gradient": "layered-gradient 20s ease infinite",
        "payment-loading": "spinner 1000ms ease-in infinite",
        moveUp: "moveUp 600ms ease-out",
        moveUp2: "moveUp2 300ms ease-out",
        sequential: "sequential 1s ease-out infinite",
      },
      keyframes: {
        moveUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        moveUp2: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        loading: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(0.4)", opacity: "0.4" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        sequential: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "0.5", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
