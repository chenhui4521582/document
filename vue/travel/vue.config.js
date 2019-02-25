const configureWebpack = {
  resolve: {
    alias: {
      "@assets": "@/assets",
      "@view": "@/views",
      "@components": "@/components",
      "@util": "@/util"
    }
  },
  devServer: {
    open: true,
    proxy: {
      "/json": {
        target: "http://localhost:8085"
      }
    },
    port: 8085
  },
  devtool: "cheap-module-eval-source-map"
};

module.exports = {
  configureWebpack,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [__dirname, "src/assets/css/*.less"]
    }
  }
};
