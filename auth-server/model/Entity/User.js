const Sequelize = require('sequelize');

module.exports = sequelize.define('users_kinos', {
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});
