const Sequelize = require('sequelize');

module.exports = sequelize.define('kinos', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    review: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    photo: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    rating: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    views: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    year: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    genre: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    slogan: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    director: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    scenario: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    producer: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    operator: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    composer: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    painter: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    mounting: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    budget: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    feesus: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    feesworld: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    watchers: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    premiererf: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    premiereworld: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    releaserf: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    releasedvd: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    age: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    reitingmpaa: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    time: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    id_user: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});
