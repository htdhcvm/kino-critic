const bcrypt = require('bcrypt');

module.exports = password => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (e, hash) => {
            if (e) return reject(e);
            resolve(hash);
        });
    });
};
