const Sequelize = require('sequelize');

module.exports = roleConnectionSequelize => {
    return roleConnectionSequelize.define('comments', {
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
};
