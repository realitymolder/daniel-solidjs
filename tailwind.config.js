module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [   require("tailwindcss"),
  require("autoprefixer"),require("daisyui" , )],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes:[{mytheme: {
      "primary": "#6b66cc",
      "secondary": "#af66ff",
      "accent": "#1b3589",
      "neutral": "#351E38",
      "base-100": "#212D45",
      "info": "#325DDC",
      "success": "#0F6258",
      "warning": "#E7BC23",
      "error": "#E03E6E",
    },}]
  },
};