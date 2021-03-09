require('dotenv').config();
require('./model/connect');
const bodyParser = require('body-parser');
const authRoutes = require('./routes');
const cookieParser = require('cookie-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use('/', authRoutes);
};
