const { Readable } = require('stream');

module.exports = (req, res) => {
    const readable = Readable.from(res.locals.dataSendStream);

    readable.on('data', chunk => {
        res.write(chunk);
    });

    readable.on('end', () => {
        res.end();
    });
};
