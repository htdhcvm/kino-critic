const Sequelize = require('sequelize');

module.exports = roleConnectionSequelize => {
    return roleConnectionSequelize.define('phones', {
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
};
