const cors = require('cors');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { protect } = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
const PORT = 5000;

// 1. Auth Service 
app.use('/auth', createProxyMiddleware({
    target: 'http://auth-service:5001',
    changeOrigin: true,
    pathRewrite: { '^/auth': '' } 
}));

// 2. Product Service 
app.use('/products', protect, createProxyMiddleware({
    target: 'http://product-service:5002',
    changeOrigin: true,
    pathRewrite: { '^/products': '' }, 
    onProxyReq: (proxyReq, req) => {
        if (req.user) {
            
            proxyReq.setHeader('x-user-id', req.user.id || '');
            proxyReq.setHeader('x-user-role', req.user.role || '');
        }
    }
}));

app.listen(PORT, () => console.log(`✅ API Gateway running on port ${PORT}`));