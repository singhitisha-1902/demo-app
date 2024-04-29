const { merge } = require('webpack-merge');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// import ModuleFederationPlugin from '../src/ModuleFederationPlugin';
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer:{
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mfehome: 'mfehome@http://localhost:8082/remoteEntry.js',
        mfeuser: 'mfeuser@http://localhost:8081/remoteEntry.js',
       
      },
      filename:"remoteEntry.js",
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
  ],
};

module.exports = merge(commonConfig, devConfig);