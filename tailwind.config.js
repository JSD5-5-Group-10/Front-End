/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      group: ["hover", "group-hover"], // เปิดใช้งาน group-hover
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
