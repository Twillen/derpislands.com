module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "DerpIslands";
      return args;
    });
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/scss/variables.scss";
          `
      }
    }
  }
};
