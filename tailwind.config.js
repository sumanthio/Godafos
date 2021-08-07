module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          bottom: "#f1f4f5",
          top: "#f6f6f6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
