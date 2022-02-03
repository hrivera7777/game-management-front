module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1350px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1900px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "principal-background": "#28272B",
        "principal-orange": "#FFA049",
        "principal-green": "#5DBF79",
        "principal-red": "#D7263D",
        "principal-purple": "#7C5AAF",
        "second-gray": "#46444B",
        "secondary-purple": "#533A79",
        "secondary-green": "#99D6AA",
        "icon-background": "#46444B",
        "pages-background": "#3C3A40",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
