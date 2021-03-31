const Sequelize = require('sequelize');

module.exports = roleConnectionSequelize => {
    return roleConnectionSequelize.define('users_kinos', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        login: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        age: {
            type: Sequelize.STRING(3),
        },
        fio: {
            type: Sequelize.STRING(50),
        },
        address: {
            type: Sequelize.STRING(50),
        },
        typeUser: {
            type: Sequelize.INTEGER(1),
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    });
};
