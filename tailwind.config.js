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
        primaryColor: "#b09f6a",
        btnColor: "#D4bca4",
        textColor: "#28364B",
        background: "#F1F0E8",
        foreground: "#000000",
      },
    },
  },
  plugins: [require('daisyui')],
};
