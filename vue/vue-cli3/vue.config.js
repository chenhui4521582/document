const configureWebpack = {
  devServer: {
    open: true
  },
  resolve: {
    alias: {
      '@assets': '@/assets',
      '@view': '@/views',
      '@components': '@/components',
      '@util': '@/util'
    }
  }
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
