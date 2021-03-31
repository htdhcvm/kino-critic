require('dotenv').config();
require('./model');

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');
const managerRouter = require('./routes/manager.routes');
const visitorRouter = require('./routes/visitor.routes');

module.exports = app => {
    app.use(bodyParser.json());

    app.use('/api', adminRouter);
    app.use('/api', userRouter);
    app.use('/api', managerRouter);
    app.use('/api', visitorRouter);
};
