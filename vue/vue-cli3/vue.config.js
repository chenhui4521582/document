const ENV = process.env.NODE_ENV;
const configureWebpack = {
  devServer: {
    open: true,
    proxy: {
      '/json': {
        target: 'http://localhost:8082'
      }
    },
  },
  resolve: {
    alias: {
      '@assets': '@/assets',
      '@view': '@/views',
      '@components': '@/components',
      '@util': '@/util'
    }
  },
  devtool: 'cheap-module-eval-source-map'
}

module.exports = {
  configureWebpack,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [__dirname + '/src/assets/css/*.less']
    }
  }
}
