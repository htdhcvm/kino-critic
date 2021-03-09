const { response } = require('../app');
const RefreshSessionEntity = require('../model/Entity/RefreshSession');
const UserEntity = require('../model/Entity/User');

class AuthRepository {
    constructor(client) {
        this.client = client;
    }

    async getByLogin(login) {
        let responseDb = {};

        try {
            responseDb = await this.client.query(
                'SELECT id, login, password FROM users where login = $1',
                [login],
            );
        } catch (error) {
            throw error;
        }
        // console.log(responseDb);
        if (responseDb.rowCount === 0) return {};

        const user = responseDb.rows[0];
        return user.rowCount === 0
            ? []
            : new UserEntity(user.id, user.login, user.password);
    }

    async getUserById(id_user) {
        const responseDb = await this.client.query(
            `
            SELECT * FROM users WHERE id = $1 
        `,
            [id_user],
        );

        if (responseDb.rowCount === 0) return {};

        const user = responseDb.rows[0];

        return new UserEntity(user.id, user.login, user.password);
    }

    async getCountRefreshForUser(userId) {
        const responseDb = await this.client.query(
            `SELECT COUNT(id) as refreshCount FROM refreshsessions WHERE id_user = $1`,
            ['' + userId],
        );

        return responseDb.rows[0].refreshcount;
    }

    async clearAllUserRefreshSession(userId) {
        // console.log(userId);
        const responseDb = await this.client.query(
            `
            DELETE FROM refreshsessions WHERE id_user = $1
        `,
            ['' + userId],
        );
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
        let responseDb = await this.client.query(
            `
            SELECT * FROM refreshsessions WHERE refreshtoken = $1
        `,
            [refreshToken],
        );

        return responseDb.rows[0];
    }

    async deleteWhereRefreshToken(refreshToken) {
        let responseDb = await this.client.query(
            `DELETE FROM refreshsessions WHERE refreshtoken = $1`,
            [refreshToken],
        );

        return responseDb.rowCount > 0 ? true : false;
    }

    async getUserOnRefreshToken(refreshToken) {
        let responseDb = await this.client.query(
            `
            SELECT * FROM users WHERE id = ( SELECT id_user FROM refreshsessions WHERE refreshtoken = $1);
        `,
            [refreshToken],
        );

        if (responseDb.rowCount === 0) return {};

        const user = responseDb.rows[0];

        return new UserEntity(user.id, user.login, user.password);
    }
}

module.exports = AuthRepository;
