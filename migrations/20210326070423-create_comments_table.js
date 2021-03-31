'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('comments', {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            text: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            kinoId: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            usersKinoId: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('comments', 'usersKinoId');
        // await queryInterface.removeColumn('comments', 'usersKinoId');
        await queryInterface.removeColumn('kinos', 'commentId');

        return queryInterface.dropTable('comments');
    },
};
