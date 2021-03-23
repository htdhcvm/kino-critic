'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('refreshsession', {
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
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            expiresin: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            createdat: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            id_user: Sequelize.INTEGER(11),
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('refreshsession');
    },
};

// id           | integer                     |           | not null | nextval('refreshsessions_id_seq'::regclass)
//  refreshtoken | uuid                        |           | not null |
//  user_agent   | character varying(200)      |           | not null |
//  fingerprint  | character varying(200)      |           | not null |
//  ip           | character varying(15)       |           | not null |
//  expiresin    | character varying(255)      |           | not null |
//  createdat    | timestamp without time zone |           | not null | now()
//  id_user
