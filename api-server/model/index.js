const { Sequelize } = require('sequelize');

const base = {
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    logging: false,
};

const sequelizeVisitor = new Sequelize({
    ...base,
    username: process.env.DB_USERNAME_VISITOR,
    password: process.env.DB_PASSWORD_VISITOR,
});

const sequelizeUser = new Sequelize({
    ...base,
    username: process.env.DB_USERNAME_USER,
    password: process.env.DB_PASSWORD_USER,
});

const sequelizeManager = new Sequelize({
    ...base,
    username: process.env.DB_USERNAME_MANAGER,
    password: process.env.DB_PASSWORD_MANAGER,
});

const sequelizeAdmin = new Sequelize({
    ...base,
    username: process.env.DB_USERNAME_ADMIN,
    password: process.env.DB_PASSWORD_ADMIN,
});

Promise.all([
    sequelizeUser.authenticate(),
    sequelizeManager.authenticate(),
    sequelizeAdmin.authenticate(),
    sequelizeVisitor.authenticate(),
])
    .then(_ => {
        console.log(
            'All connection was success completed with roles - [Visitor, User, Manager, Admin]',
        );
    })
    .catch(error => {
        console.error('Connections falid ', error);
    });

module.exports = {
    sequelizeVisitor,
    sequelizeUser,
    sequelizeManager,
    sequelizeAdmin,
};
