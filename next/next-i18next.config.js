const { NODE_ENV } = process.env;

const isDev = NODE_ENV === "development";

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    reloadOnPrerender: isDev,
    debug: isDev,
    localePath: "./src/localization",
    namespace: "common",
    localeExtension: "js",
    defaultNS: "common",
    returnObjects: true,
  },
};
