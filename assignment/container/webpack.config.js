const { merge } = require('webpack-merge');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// import ModuleFederationPlugin from '../src/ModuleFederationPlugin';
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');



const commonConfig = require('./config/webpack.common');
const packageJson = require('./package.json');
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
      shared: packageJson.dependencies,
    }),
  ],
module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
