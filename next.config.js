// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  assetPrefix: 'https://example.com',
  dynamicAssetPrefix: true,
  inlineImageLimit: 16384,
  poweredByHeader: false,
  webpack(config, options) {
    return config
  }
})

   
