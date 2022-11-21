/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      silver: "#ecebff",
      black: "#18181b",
    },
    extend: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
