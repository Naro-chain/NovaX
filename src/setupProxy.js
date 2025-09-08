const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/ultrax',
    createProxyMiddleware({
      target: 'https://utx-u2u-testnet.ultrax.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api/ultrax': ''
      },
      secure: false,
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
      }
    })
  );

  app.use(
    '/api/statistic',
    createProxyMiddleware({
      target: 'https://utx-statistic.ultrax.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api/statistic': ''
      },
      secure: false,
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
      }
    })
  );
}; 