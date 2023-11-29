/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xsm: "350px",
      sm: "450px",
      md: "767px",
      lg: "1024px",
      xl: "1428px",
    },
    extend: {},
  },
  plugins: [],
};
