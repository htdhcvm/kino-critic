'use strict';

const { query } = require('express');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users_has_kinos', {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            type_kinos: {
                type: Sequelize.INTEGER(1),
            },
            kinoId: {
                type: Sequelize.INTEGER(11),
            },
            usersKinoId: {
                type: Sequelize.INTEGER(11),
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users_has_kinos');
    },
};

// id_user: {
//     type: Sequelize.INTEGER(11),
//     allowNull: false,
//     references: {
//         model: 'users_kinos',
//         key: 'id',
//     },
// },
// id_kinos: {
//     type: Sequelize.INTEGER(11),
//     allowNull: false,
//     references: {
//         model: 'kinos',
//         key: 'id',
//     },
// },
