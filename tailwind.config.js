module.exports = {
  mode: "all",
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('/img/pattern.png')",
      }),
      fontFamily: {
        cursive: ["Yeseva One", "cursive"],
      },
      colors: {
        yellow: {
          500: "#cc9900",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
