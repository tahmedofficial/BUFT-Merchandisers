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
        primaryColor: "#CEBD88",
        btnColor: "#CEBD88",
        textColor: "#28364B",
        background: "#F1F0E8",
        foreground: "#000000",
        foreground2: "#28364B",
        logoColor2: "#A78665",
        logoColor3: "#4B3B3C",
      },
    },
  },
  plugins: [require('daisyui')],
};
