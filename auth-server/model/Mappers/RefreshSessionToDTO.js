const RefreshSessionDTO = require('../DTO/refreshSesion');

module.exports = refreshSessionEntity => {
    const { refreshtoken, id_user } = refreshSessionEntity.dataValues;
    return new RefreshSessionDTO(refreshtoken, id_user);
};
