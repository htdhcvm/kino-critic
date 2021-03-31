'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('comments', [
            {
                text: 'lorem_1',
                kinoId: 1,
                usersKinoId: 1,
            },
            {
                text: 'lorem_1',
                kinoId: 2,
                usersKinoId: 1,
            },
            {
                text: 'lorem_1',
                kinoId: 3,
                usersKinoId: 1,
            },
            {
                text: 'lorem_1',
                kinoId: 4,
                usersKinoId: 2,
            },
            {
                text: 'lorem_1',
                kinoId: 1,
                usersKinoId: 2,
            },
            {
                text: 'lorem_1',
                kinoId: 2,
                usersKinoId: 2,
            },
            {
                text: 'lorem_1',
                kinoId: 3,
                usersKinoId: 1,
            },
            {
                text: 'lorem_1',
                kinoId: 4,
                usersKinoId: 1,
            },
            {
                text: 'lorem_1',
                kinoId: 4,
                usersKinoId: 2,
            },
            {
                text: 'lorem_1',
                kinoId: 3,
                usersKinoId: 2,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('comments', null, {});
    },
};
