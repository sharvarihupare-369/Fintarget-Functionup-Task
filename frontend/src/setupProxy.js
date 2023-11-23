const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: 'wss://functionup.fintarget.in',
      changeOrigin: true,
      ws: true,
    })
  );
};