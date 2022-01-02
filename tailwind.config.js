module.exports = {
  mode: "all",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./containers/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./sections/**/*.{js,ts,jsx,tsx}",
    ],
  },
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
      height: {
        "124px": "124px",
      },
    },
  },
  plugins: [],
};
