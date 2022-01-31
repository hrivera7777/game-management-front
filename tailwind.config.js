module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1350px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1920px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "principal-background-color": "#28272B",
        "principal-orange-color": "#FFA049",
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
