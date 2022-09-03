const path = require('path');

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src/'),
    '@images': path.resolve(__dirname, '..', 'src/assets/images'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
  },
  mini: {},
  h5: {}
}
