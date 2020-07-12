module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
  }
};
