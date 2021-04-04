const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let accessToken;

    if (req.method === 'GET') {
        accessToken = req.params.accessToken;
    } else {
        accessToken = req.body.accessToken;
    }

    jwt.verify(
        accessToken,
        process.env.JWT_SECRET_KEY,
        function (err, decoded) {
            if (err) return res.sendStatus(403);
            next();
        },
    );
};
