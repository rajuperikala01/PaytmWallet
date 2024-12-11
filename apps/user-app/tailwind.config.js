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
        "payment-loading": "spinner 1500ms ease-out forwards",
        moveUp: "moveUp 600ms ease-out",
        moveUp2: "moveUp2 500ms ease-out",
      },
      keyframes: {
        moveUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(150px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        moveUp2: {
          "0%": {
            opacity: "0",
            transform: "translateX(-150px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
