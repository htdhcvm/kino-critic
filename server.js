const app = require('./app');
require('./config')(app);

const React = require('react');
const Router = require('react-router');

const proxy = require('express-http-proxy');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:3002/',
        changeOrigin: true,
    }),
);

app.use(
    '/auth',
    createProxyMiddleware({
        target: 'http://localhost:3005/',
        changeOrigin: true,
    }),
);

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        Router.match(
            {
                routes: [{ path: '/', component: 'a' }],
                location: req.url,
            },
            (error, redirectLocation, renderProps) => {
                console.log(error);
                console.log(redirectLocation);
                console.log(renderProps);
            },
        );
    });
}

app.get('/', (req, res) => {
    // res.json({ some: 'hi' });
});

app.listen(process.env.PORT, () =>
    console.log(`Server has been started on ${process.env.PORT} port`),
);
