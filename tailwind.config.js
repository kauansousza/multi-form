/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      Poppins: ["poppins, sans-serif"],
    },
    extend: {
      dropShadow: {
        "xl": "0 20px 13px rgba(210, 184, 255, 0.05)",
      },
    },
    plugins: [],
  },
};
