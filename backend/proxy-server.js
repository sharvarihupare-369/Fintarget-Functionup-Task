const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware'); 
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/ws',createProxyMiddleware({
    target: 'wss://functionup.fintarget.in',
          changeOrigin: true,
          ws: true,
}))

const port = 3001;
app.listen(port,()=>{
    console.log(`Proxy server listening on http://localhost:${port}`);
})