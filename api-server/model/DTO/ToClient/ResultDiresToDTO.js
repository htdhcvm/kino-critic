module.exports = dataFromDb => {
    if (dataFromDb.length === 0) {
        return {
            favorite: +false,
            bookmark: +false,
        };
    }
    if (dataFromDb.length > 1) {
        return {
            favorite: +dataFromDb.some(item => {
                return item.dataValues.type_kinos === 1;
            }),
            bookmark: +dataFromDb.some(item => {
                return item.dataValues.type_kinos === 0;
            }),
        };
    }

    return {
        favorite: +(dataFromDb[0].dataValues.type_kinos === 1 ? true : false),
        bookmark: +(dataFromDb[0].dataValues.type_kinos === 0 ? true : false),
    };
};
