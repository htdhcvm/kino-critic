const app = require('./app');
require('./config')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has been started on ${process.env.PORT} port`);
});
