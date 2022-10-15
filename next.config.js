<<<<<<< HEAD
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
=======
// next.config.js
const withImages = require('next-images')
module.exports = {
  assetPrefix: 'https://example.com',
  dynamicAssetPrefix: true,
  inlineImageLimit: 16384,
  poweredByHeader: false,
  webpack(config, options) {
    return config
>>>>>>> 78d46d6fa814af1704b25950fff48b21aa76e56f
  }
};

   
