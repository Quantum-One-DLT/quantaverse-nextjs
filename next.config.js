// next.config.js
module.exports = {
  assetPrefix: 'https://example.com',
  dynamicAssetPrefix: true,
  inlineImageLimit: 16384,
  poweredByHeader: false,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

   
