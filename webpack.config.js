const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'production', // Use production mode for better optimization
  entry: './index.tsx',
  devtool: 'source-map',
  devServer: {
    port: 3001,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ModuleFederationPlugin({
      name: 'threescene',
      filename: 'remoteEntry.js',
      exposes: {
        './Block': './App',
      },
      // CRITICAL: Use empty object to prevent ANY dependency sharing
      shared: {},
    }),
  ],
  // CRITICAL: Use externals to prevent webpack from trying to externalize common libraries
  externals: {},
  optimization: {
    // Disable splitChunks to keep everything bundled together
    splitChunks: false,
    // Ensure all modules are bundled in the main chunk
    concatenateModules: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // CRITICAL: Use 'var' library type to avoid module system conflicts
    library: {
      type: 'var',
      name: 'threescene'
    },
    // Ensure the federation module is completely self-contained
    publicPath: 'auto',
  },
};
