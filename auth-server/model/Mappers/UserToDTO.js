const UserDTO = require('../DTO/User');

module.exports = userEntity => {
    return new UserDTO(userEntity.id, userEntity.login, userEntity.password);
};
