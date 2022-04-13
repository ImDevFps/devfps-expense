module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IranSans"],
      },
      colors: {
        mainColor: "#302D43",
        secondaryColor: "#6953f7",
        thirdColor: "#cd4ff7",
      },
      blur: {
        xs: "1px",
      },
      rotate: {
        7: "7deg",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
