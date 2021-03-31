'use strict';

const faker = require('faker');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('phones', [
            {
                number: faker.phone.phoneNumber(),
                format: faker.phone.phoneFormats(),
                numberFormat: faker.phone.phoneNumberFormat(),
                usersKinoId: 1,
            },
            {
                number: faker.phone.phoneNumber(),
                format: faker.phone.phoneFormats(),
                numberFormat: faker.phone.phoneNumberFormat(),
                usersKinoId: 2,
            },
            {
                number: faker.phone.phoneNumber(),
                format: faker.phone.phoneFormats(),
                numberFormat: faker.phone.phoneNumberFormat(),
                usersKinoId: 3,
            },
            {
                number: faker.phone.phoneNumber(),
                format: faker.phone.phoneFormats(),
                numberFormat: faker.phone.phoneNumberFormat(),
                usersKinoId: 4,
            },
            {
                number: faker.phone.phoneNumber(),
                format: faker.phone.phoneFormats(),
                numberFormat: faker.phone.phoneNumberFormat(),
                usersKinoId: 5,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('phones', null, {});
    },
};
