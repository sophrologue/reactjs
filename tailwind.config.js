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
    fontSize: {
      "primary-body": "18px",
      "primary-body-tablet": "16px",
      "primary-body-mobile": "13px",
      "primary-title": "42px",
      "primary-title-tablet": "32px",
      "primary-title-mobile": "24px",
      "primary-nav-title": "28px",
      "primary-nav-tablet": "20px",
    },
    extend: {},
  },
  plugins: [],
};
