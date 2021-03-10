require('dotenv').config();
const proxy = require('express-http-proxy');
const cors = require('cors');

module.exports = app => {
    app.use(
        cors({
            origin: 'http://localhost:3001',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        }),
    );
    app.set('view engine', 'ejs');
};
