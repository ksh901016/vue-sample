module.exports = {
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