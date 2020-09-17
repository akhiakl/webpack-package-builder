const path = require("path");
module.exports = {
  entry: "./src/utils.js",
  output: {
    filename: "utils.js",
    path: path.resolve(__dirname, "dist"),
    library: "Utils",
  },
};
