const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/devApi", {
      target: "http://www.web-jshtml.cn/api/react",
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite:{
        "^/devApi":""
      }
     
    })
  );
};