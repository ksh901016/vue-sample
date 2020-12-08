const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./docker/dist"),
  devServer: {
    proxy: {
      "/api": {
        target: "localhost:8081",
        ws: true,
        changeOrigin: true
      }
    }
  }
}