const path = require('path');

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  alias: {
    '@/images': path.resolve(__dirname, '..', 'src/assets/images'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
  },
  mini: {},
  h5: {}
}
