const Sequelize = require('sequelize');

module.exports = sequelize.define('refreshsessions', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    refreshtoken: {
        type: Sequelize.UUID,
        allowNull: false,
    },
    user_agent: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    fingerprint: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    ip: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    expiresin: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    id_user: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});
