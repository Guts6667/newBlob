/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        "row-span": "grid-row",
        spacing: "margin, padding",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "height-auto": "height-auto 0.5s ease-in-out",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "height-auto": {
          from: { height: "0px", opacity: "0" },
          to: { height: "auto", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        25: "25px",
        50: "50px",
        100: "100px",
      },
      colors: {
        gray: "#666666",
        lightgray: "rgba(217, 217, 217, 0.30)",
        purple: "#9082ED",
        peach: "#EDC3BE",
      },
    },
  },
  plugins: [],
};
