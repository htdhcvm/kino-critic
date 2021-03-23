'use strict';

const bcrypt = require('bcrypt');

const getHash = password => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (e, hash) => {
            if (e) reject(e);
            resolve(hash);
        });
    });
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users_kinos', [
            {
                login: 'user_1',
                password: await getHash('123'),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                login: 'user_2',
                password: await getHash('456'),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                login: 'user_3',
                password: await getHash('789'),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users_kinos', null, {});
    },
};
