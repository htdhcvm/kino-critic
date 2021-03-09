const jwt = require('jsonwebtoken');

module.exports = ({ payload, options }) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            options,
            (error, token) => {
                if (error) reject(error);
                resolve(token);
            },
        );
    });
};
