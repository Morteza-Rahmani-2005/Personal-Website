/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./*.js", "./src/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Vazirmatn", "system-ui", "sans-serif"],
      },
      colors: {
        surface: "#0c0f14",
        card: "#12161f",
        accent: "#38bdf8",
        accent2: "#a78bfa",
      },
    },
  },
  plugins: [],
};
