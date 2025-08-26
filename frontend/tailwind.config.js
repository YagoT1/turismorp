/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060612",   // color1
        secondary: "#0f3245", // color2
        accent: "#1a6488",    // color3
        highlight: "#2b9fc9", // color4
        contrast: "#2bcac8",  // color5
      },
    },
  },
  plugins: [],
}
