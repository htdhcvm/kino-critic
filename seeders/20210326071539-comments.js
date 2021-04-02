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
                text: 'lorem_2',
                kinoId: 2,
                usersKinoId: 1,
            },
            {
                text: 'lorem_3',
                kinoId: 3,
                usersKinoId: 1,
            },
            {
                text: 'lorem_4',
                kinoId: 4,
                usersKinoId: 2,
            },
            {
                text: 'lorem_5',
                kinoId: 1,
                usersKinoId: 2,
            },
            {
                text: 'lorem_6',
                kinoId: 2,
                usersKinoId: 2,
            },
            {
                text: 'lorem_7',
                kinoId: 3,
                usersKinoId: 1,
            },
            {
                text: 'lorem_8',
                kinoId: 4,
                usersKinoId: 1,
            },
            {
                text: 'lorem_9',
                kinoId: 4,
                usersKinoId: 2,
            },
            {
                text: 'lorem_10',
                kinoId: 3,
                usersKinoId: 2,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('comments', null, {});
    },
};
