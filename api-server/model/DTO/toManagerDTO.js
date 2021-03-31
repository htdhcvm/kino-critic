module.exports = managers => {
    return managers.map(manager => {
        return {
            id: manager.dataValues.id,
            fio: manager.dataValues.fio,
        };
    });
};
