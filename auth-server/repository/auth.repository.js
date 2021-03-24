const { QueryTypes } = require('sequelize');

const UserEntity = require('../model/Entity/User');
const RefreshSessionEntity = require('../model/Entity/RefreshSession');

const UserEntityToDto = require('../model/Mappers/UserToDTO');

class AuthRepository {
    constructor(client) {
        this.client = client;
    }

    async getByLogin(login) {
        let responseDb = {};

        const user = await UserEntity.findAll({
            where: {
                login: login,
            },
        }).catch(e => console.log(e));

        if (user.length === 0) return [];

        return UserEntityToDto(user[0].dataValues);
    }

    async getUserById(id_user) {
        const responseDb = await UserEntity.findAll({
            where: {
                id: id_user,
            },
        });

        const user = responseDb[0].dataValues;

        return UserEntityToDto(user);
    }

    async getCountRefreshForUser(userId) {
        console.log(userId);

        const responseDb = await RefreshSessionEntity.count({
            where: {
                id_user: userId,
            },
        });

        return responseDb;
    }

    async clearAllUserRefreshSession(userId) {
        await RefreshSessionEntity.destroy({
            where: {
                id_user: userId,
            },
        });
    }

    async addNewRefreshSession(
        { refreshToken, fingerprint, ip, expiresIn, userAgent, createAt },
        { id },
    ) {
        await this.client.query(
            `
            INSERT INTO refreshsessions(refreshtoken, user_agent, fingerprint, ip, expiresin, createdat, id_user)
            VALUES($1, $2, $3, $4, $5, $6, $7)
        `,
            [refreshToken, userAgent, fingerprint, ip, expiresIn, createAt, id],
        );
    }

    async getByRefreshToken(refreshToken) {
        const responseDb = await RefreshSessionEntity.findAll({
            where: {
                refreshtoken: refreshToken,
            },
        });
        // let responseDb = await this.client.query(
        //     `
        //     SELECT * FROM refreshsessions WHERE refreshtoken = $1
        // `,
        //     [refreshToken],
        // );

        return responseDb[0].dataValues;
    }

    async deleteWhereRefreshToken(refreshToken) {
        await RefreshSessionEntity.destroy({
            where: {
                refreshtoken: refreshToken,
            },
        });
    }

    async getUserOnRefreshToken(refreshToken) {
        const users = await sequelize.query(
            'SELECT id_user FROM refreshsessions WHERE refreshtoken = :refreshToken',
            {
                replacements: { refreshToken: refreshToken },
                type: QueryTypes.SELECT,
            },
        );

        const responseDb = await UserEntity.findAll({
            where: {
                id: users[0].id_user,
            },
        });

        if (responseDb[0].dataValues.length === 0) return {};

        const user = responseDb[0].dataValues;

        return UserEntityToDto(user);
    }
}

module.exports = AuthRepository;
