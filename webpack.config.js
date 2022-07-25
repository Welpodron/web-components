const path = require("path");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  //   output: {
  //     filename: "bundle.js",
  //     path: path.resolve(__dirname, "dist"),
  //   },
};
