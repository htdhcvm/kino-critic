const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const { accessToken } = req.body;
    jwt.verify(
        accessToken,
        process.env.JWT_SECRET_KEY,
        function (err, decoded) {
            if (err) return res.sendStatus(403);

            next();
        },
    );
};
