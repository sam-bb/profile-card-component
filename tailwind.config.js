module.exports = {
  content: ["./**.{html,js}"],
  theme: {

    extend: {
      backgroundImage: {
        "pattern-background-top": "url('/images/bg-pattern-top.svg')",
        "pattern-background-bottom": "url('/images/bg-pattern-bottom.svg')",
      },
    },

    fontSize: {
      xxs: "0.4rem",
    },

    fontFamily: {
      custom: ["Kumbh Sans", "sans-serif"],
    },

  },
  plugins: [],
};
