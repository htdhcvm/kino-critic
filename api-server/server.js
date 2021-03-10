const app = require('./app');
require('./config')(app);

app.get('/api', (req, res) => {
    console.log('Api hi');
    res.send('Hi from api');
});

app.get('/api/getAll', (req, res) => {
    console.log('Api hi');
    res.send('Hi from api get all');
});

app.listen(process.env.PORT, () => {
    console.log(`Server has been started on ${process.env.PORT} port`);
});
