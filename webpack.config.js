var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/helloWorld.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.join(__dirname, "node_modules"),
        use: "babel-loader",
      },
    ],
  },
};
