const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  chainWebpack: config => {
    config.plugin("CompressionPlugin").use(CompressionPlugin);
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
