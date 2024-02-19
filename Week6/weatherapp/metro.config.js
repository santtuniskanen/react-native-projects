const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    extraNodeModules: {
      '@env': path.resolve(__dirname, '.env'),
    },
  },
  ...defaultConfig,
};
