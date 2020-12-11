const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(createProxyMiddleware('/naked/storage', {
        target: 'http://vps3217.mtu.immo:9200',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
            '^naked//storage': '',
        },
    }));

    app.use(createProxyMiddleware('/naked/auth', {
        target: 'http://vps3217.mtu.immo:9008',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
            '^/naked/auth': '',
        },
    }));
    app.use(createProxyMiddleware('/naked/bapi', {
        target: 'http://vps3217.mtu.immo:8774',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
            '^/naked/bapi': '',
        },
    }));
    app.use(createProxyMiddleware('/naked/text', {
        target: 'http://vps2085.mtu.immo:9003',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
            '^/naked/text': '',
        },
    }));
};
