module.exports = {
  entry: './src/app.ts',
  output: {
    path: __dirname + './dist',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'awesome-typescript-loader' }]
  },
  devServer: {
    port: 3000
  }
};
