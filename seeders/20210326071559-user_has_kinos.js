'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users_has_kinos', [
            {
                usersKinoId: 1,
                kinoId: 2,
                type_kinos: 1,
            },
            {
                usersKinoId: 1,
                kinoId: 1,
                type_kinos: 1,
            },
            {
                usersKinoId: 1,
                kinoId: 3,
                type_kinos: 0,
            },
            {
                usersKinoId: 2,
                kinoId: 3,
                type_kinos: 0,
            },
            {
                usersKinoId: 2,
                kinoId: 2,
                type_kinos: 1,
            },
            {
                usersKinoId: 1,
                kinoId: 3,
                type_kinos: 1,
            },
            {
                usersKinoId: 1,
                kinoId: 4,
                type_kinos: 1,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users_has_kinos', null, {});
    },
};
