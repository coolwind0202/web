const path = require('path');

module.exports = {
  typescript: {
    // .storybook/main.js
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // MUI v5 に伴うエラーの回避
    // https://github.com/mui/material-ui/issues/24282#issuecomment-951015101
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];

    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'), // こっちは私の趣味です
    };

    return config;
  },
  staticDirs: ['../public'],
};
