const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias['@'] = rootPath;
  defaultConfig.resolve.alias['~'] = rootPath;
  // StorySource アドオンの設定項目追加
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })
  return defaultConfig;
}
