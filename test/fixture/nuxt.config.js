const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../') }
  ],
  redirect: {
    rules: require('./redirects'),
    simpleRules: [{
      'from': 'mdsolarsciences-tm-tinted-lip-balm-spf-30',
      'on': '/product/',
      'statusCode': 301,
      'to': 'mdsolarsciences-hydrating-sheer-tinted-lip-balm-spf-30-pink',
    }
    ]
  }
}
