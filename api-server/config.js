require('dotenv').config();
require('./model');

const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');
const managerRouter = require('./routes/manager.routes');

module.exports = app => {
    app.use('/api', adminRouter);
    app.use('/api', userRouter);
    app.use('/api', managerRouter);
};
