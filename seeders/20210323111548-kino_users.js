'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker');

const getHash = password => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (e, hash) => {
            if (e) reject(e);
            resolve(hash);
        });
    });
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users_kinos', [
            {
                // user
                login: 'user_1',
                password: await getHash('123'),
                createdAt: new Date(),
                updatedAt: new Date(),
                age: 24,
                fio: `${faker.name.middleName()} ${faker.name.firstName()} ${faker.name.lastName()}`,
                address: faker.address.countryCode() + faker.address.city(),
                typeUser: 0,
            },
            {
                // user
                login: 'user_2',
                password: await getHash('321'),
                createdAt: new Date(),
                updatedAt: new Date(),
                age: 12,
                fio: `${faker.name.middleName()} ${faker.name.firstName()} ${faker.name.lastName()}`,
                address: faker.address.countryCode() + faker.address.city(),
                typeUser: 0,
            },
            {
                // manager
                login: 'manager_1',
                password: await getHash('456'),
                createdAt: new Date(),
                updatedAt: new Date(),
                age: 42,
                fio: `${faker.name.middleName()} ${faker.name.firstName()} ${faker.name.lastName()}`,
                address: faker.address.countryCode() + faker.address.city(),
                typeUser: 1,
            },
            {
                // manager
                login: 'manager_2',
                password: await getHash('789'),
                createdAt: new Date(),
                updatedAt: new Date(),
                age: 42,
                fio: `${faker.name.middleName()} ${faker.name.firstName()} ${faker.name.lastName()}`,
                address: faker.address.countryCode() + faker.address.city(),
                typeUser: 1,
            },
            {
                // admin
                login: 'admin',
                password: await getHash('godxD'),
                createdAt: new Date(),
                updatedAt: new Date(),
                age: 101,
                fio: `${faker.name.middleName()} ${faker.name.firstName()} ${faker.name.lastName()}`,
                address: faker.address.countryCode() + faker.address.city(),
                typeUser: 2,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users_kinos', null, {});
    },
};
