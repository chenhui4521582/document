module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [__dirname + '/src/assets/css/*.less']
    }
  }
}
