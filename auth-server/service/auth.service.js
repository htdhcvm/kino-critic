const comparePassword = require('../common/comparePassword');
const UserEntityToDto = require('../model/Mappers/UserToDTO');
const RefreshSessionToDTO = require('../model/Mappers/RefreshSessionToDTO');
const issueAccessToken = require('../common/issueAccessToken');
const RefreshSessionEntity = require('../model/Entity/RefreshSession');
const verifyRefreshSession = require('../common/verifyRefreshSession');
const { v4: uuidv4 } = require('uuid');

class AuthService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }

    async checkUser(login, password) {
        let user;

        try {
            user = await this.authRepository.getByLogin(login);
        } catch (error) {
            console.log(error);
            throw error;
        }

        if (user.length === 0)
            return {
                status: false,
                text: 'Invalid user data',
            };

        let resultCompared;
        try {
            resultCompared = await comparePassword(password, user.password);
        } catch (error) {}

        return resultCompared
            ? { status: true, userDTO: user }
            : { status: false, text: 'Invalid user data' };
    }

    async issuePairToken(refreshSessionData, userDTO) {
        const expiresIn = new Date().getTime() + process.env.JWT_EXPIRE_SESSION;

        const countRefreshesOnIdUser = await this.authRepository.getCountRefreshForUser(
            userDTO.id,
        );

        if (countRefreshesOnIdUser >= 3) {
            await this.authRepository.clearAllUserRefreshSession(userDTO.id);
        }

        const newRefreshSession = RefreshSessionToDTO(
            await RefreshSessionEntity.create({
                user_agent: refreshSessionData.userAgent,
                refreshtoken: uuidv4(),
                fingerprint: uuidv4(),
                ip: refreshSessionData.ip,
                expiresin: expiresIn,
                id_user: userDTO.id,
            }),
        );

        const accessToken = await issueAccessToken(userDTO);

        console.log(newRefreshSession);
        return {
            accessToken: accessToken,
            refreshToken: newRefreshSession.refreshtoken,
            expiresIn: expiresIn,
        };
    }

    async refreshTokens(
        accessToken,
        fingerPrint,
        refreshToken,
        refreshSessionData,
    ) {
        // this.authRepository.getUserOnRefreshToken(refreshToken);
        const oldRefreshSession = await this.authRepository.getByRefreshToken(
            refreshToken,
        );

        if (oldRefreshSession === undefined) {
            return { statusCode: 404, message: 'Session refresh only once' };
        }

        let resultVerify;
        try {
            resultVerify = verifyRefreshSession(oldRefreshSession, fingerPrint);
        } catch (error) {
            return { statusCode: error.statusCode, message: error.message };
        }

        await this.authRepository.deleteWhereRefreshToken(refreshToken);

        // console.log(resultVerify);
        if (resultVerify) {
            const user = await this.authRepository.getUserById(
                oldRefreshSession.id_user,
            );

            const expiresIn =
                new Date().getTime() + process.env.JWT_EXPIRE_SESSION;

            const newRefreshSession = RefreshSessionToDTO(
                await RefreshSessionEntity.create({
                    user_agent: refreshSessionData.userAgent,
                    refreshtoken: uuidv4(),
                    fingerprint: uuidv4(),
                    ip: refreshSessionData.ip,
                    expiresin: expiresIn,
                    id_user: user.id,
                }),
            );

            const userDTO = await this.authRepository.getUserOnRefreshToken(
                newRefreshSession.refreshtoken,
            );

            return {
                accessToken: await issueAccessToken(userDTO),
                refreshToken: newRefreshSession.refreshtoken,
                expiresIn: expiresIn,
            };
        }
    }

    async logout(fingerPrint, refreshToken) {
        // const oldRefreshSession = await this.authRepository.getByRefreshToken(
        //     refreshToken,
        // );
        // console.log(fingerPrint);
        // if (oldRefreshSession.fingerprint !== fingerPrint) {
        //     return { statusCode: 404, message: 'Invalid refresh session' };
        // }
        console.log(refreshToken);
        await this.authRepository.deleteWhereRefreshToken(refreshToken);
        return {};
    }
}

module.exports = AuthService;
