const Sequelize = require('sequelize');

module.exports = roleConnectionSequelize => {
    return roleConnectionSequelize.define('users_has_kinos', {
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
};
