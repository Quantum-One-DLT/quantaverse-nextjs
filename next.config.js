// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  assetPrefix: 'https://example.com',
  dynamicAssetPrefix: true,
  inlineImageLimit: 16384,
  webpack(config, options) {
    return config
  }
})

   
