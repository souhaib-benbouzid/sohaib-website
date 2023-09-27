const { NODE_ENV } = process.env;

const isDev = NODE_ENV === "development";

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    debug: false,
    localePath: "./src/localization",
    namespace: ["common", "footer", "navbar"],
    localeExtension: "js",
    defaultNS: "common",
    returnObjects: true,
    reloadOnPrerender: true,
    react: {
      useSuspense: false,
    },
  },
};
