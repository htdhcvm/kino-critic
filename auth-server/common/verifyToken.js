const jwt = require('jsonwebtoken');

module.exports = accessToken => {
    jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, data) => {
        console.log(err, data);
    });
};
