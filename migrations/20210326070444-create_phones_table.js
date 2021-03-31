'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('phones', {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            number: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            format: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            numberFormat: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            usersKinoId: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('phones');
    },
};
