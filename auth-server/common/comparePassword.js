const bcrypt = require('bcrypt');

module.exports = (comparePassword, password) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(comparePassword, password, (e, result) => {
            if (e) reject(e);
            resolve(result);
        });
    });
};
