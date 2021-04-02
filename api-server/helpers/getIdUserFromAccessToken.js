const jwt = require('jsonwebtoken');

module.exports = accessToken => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            accessToken,
            process.env.JWT_SECRET_KEY,
            function (err, decoded) {
                if (err) return reject(err);
                resolve(decoded.userId);
            },
        );
    });
};
