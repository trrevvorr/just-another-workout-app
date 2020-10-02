module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/just-another-workout-app/" : "/",
  pwa: {
    name: "JAWA",
    themeColor: "#1c201e",
    msTileColor: "#1c201e",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
  },
};
