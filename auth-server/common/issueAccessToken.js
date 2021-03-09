const jwtSign = require('../common/jwtSign');

module.exports = async userDto => {
    let config = {
        payload: {
            userId: userDto.id,
            iss: process.env.JWT_ISS,
        },

        options: {
            algorithm: 'HS512',
            subject: '' + userDto.id,
            expiresIn: process.env.JWT_EXPIRE_ACESS_TOKEN,
        },
    };

    return jwtSign(config);
};
