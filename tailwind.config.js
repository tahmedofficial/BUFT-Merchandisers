/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#007a47",
        seondaryColor: "#ed4a21",
        thirdColor: "#629880",
        btnColor: "#D4bca4",
        textColor: "#28364B",
        background: "#F1F0E8",
        foreground: "#000000",
      },
    },
  },
  plugins: [require('daisyui')],
};
