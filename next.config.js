const withStylus = require('@zeit/next-stylus');

const dev = process.env.NODE_ENV !== 'production';

module.exports = withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: dev ? '[local]' : '[hash:base64:22]',
  }
});
