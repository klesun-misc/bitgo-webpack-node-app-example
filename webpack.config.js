
const path = require('path');

module.exports = {
  target: 'node12.18',
  mode: 'development',
  entry: './index.js',
  experiments: {
    // needed for one of the libs
    asyncWebAssembly: true
  },
  module: {
    rules: [
      {
        parser: { amd: false },
        // see https://stackoverflow.com/questions/29302742/is-there-a-way-to-disable-amdplugin
        // needed for secrets.js-grempe/secrets.js cuz it treats environment as AMD after webpack instead of node
        test: /\/node_modules\/secrets\.js-grempe\/secrets(\.min)?\.js$/,
      },
    ],
  },
  resolve: {
    alias: {
      // otherwise it uses decimal.mjs, which behaves unexpectedly
      // see https://github.com/webpack/webpack/issues/6459#issuecomment-373441821
      'decimal.js': path.resolve(__dirname, 'node_modules/decimal.js/decimal.js'),
      'bignumber.js': path.resolve(__dirname, 'node_modules/bignumber.js/bignumber.js'),
    },
  }
};