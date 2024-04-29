const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
 entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
  
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeuser',
      filename: 'remoteEntry.js',
      exposes: {
        './UserApp': './src/components/UserManagement',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: packageJson.dependencies["react-dom"]
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
