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
        "bright": "#f6f6f6",
        "bright20": "#f6f6f630",
        "dark": "#313130",
        "fulldark": "#18181b",
        "fulldark50": "#18181b80",
        "mainred": "#d01e28",
        "mainblue": "#2573a3",
      },
    },
  },
  plugins: [],
}; 