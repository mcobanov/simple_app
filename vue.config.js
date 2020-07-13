module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/",
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
