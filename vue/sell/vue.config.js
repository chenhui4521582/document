const path = require('path')
const configureWebpack = {
  devServer: {
    open: true,
    proxy: {
      '/json': {
        target: 'http://localhost:8080'
      }
    },
    port: 8080
  },
  devtool: process.env.NODE_ENV === 'devlopment' ? 'cheap-module-eval-source-map' : 'source-map'
}

module.exports = {
  configureWebpack,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/*.less')]
    }
  }
}
