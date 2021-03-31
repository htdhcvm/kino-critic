const { sequelizeManager } = require('../');

const KinoModel = require('../Entity/kinos/Kinos');

module.exports = () => {
    const kinoModelWithMangerRole = KinoModel(sequelizeManager);

    return {
        kinoModelWithMangerRole,
    };
};
