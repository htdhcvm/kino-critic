const comparePassword = require('../common/comparePassword');
const UserEntityToDto = require('../model/Mappers/UserToDTO');
const issueAccessToken = require('../common/issueAccessToken');
const RefreshSessionEntity = require('../model/Entity/RefreshSession');
const verifyRefreshSession = require('../common/verifyRefreshSession');

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
            ? { status: true, userDTO: UserEntityToDto(user) }
            : { status: false, text: 'Invalid user data' };
    }

    async issuePairToken(refreshSessionData, userDTO) {
        const expiresIn = new Date().getTime() + process.env.JWT_EXPIRE_SESSION;

        const newRefreshSession = new RefreshSessionEntity({
            userId: userDTO.id,
            ip: refreshSessionData.ip,
            expiresIn: expiresIn,
            userAgent: refreshSessionData.userAgent,
        });

        const countRefreshesOnIdUser = await this.authRepository.getCountRefreshForUser(
            newRefreshSession.userId,
        );

        if (countRefreshesOnIdUser >= 3) {
            await this.authRepository.clearAllUserRefreshSession(
                newRefreshSession.userId,
            );
            await this.authRepository.addNewRefreshSession(
                newRefreshSession,
                userDTO,
            );
        } else {
            await this.authRepository.addNewRefreshSession(
                newRefreshSession,
                userDTO,
            );
        }

        const accessToken = await issueAccessToken(userDTO);

        return {
            accessToken: accessToken,
            refreshToken: newRefreshSession.refreshToken,
            expiresIn: expiresIn,
        };
    }

    async refreshTokens(
        accessToken,
        fingerPrint,
        refreshToken,
        refreshSessionData,
    ) {
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

        if (resultVerify) {
            const user = this.authRepository.getUserById(
                oldRefreshSession.id_user,
            );

            const expiresIn =
                new Date().getTime() + process.env.JWT_EXPIRE_SESSION;

            const newRefreshSession = new RefreshSessionEntity({
                userId: user.id,
                ip: refreshSessionData.ip,
                expiresIn: expiresIn,
                userAgent: refreshSessionData.userAgent,
            });
            const userDTO = UserEntityToDto(
                this.authRepository.getUserOnRefreshToken(refreshToken),
            );

            await this.authRepository.addNewRefreshSession(
                newRefreshSession,
                userDTO,
            );

            return {
                accessToken: await issueAccessToken(userDTO),
                refreshToken: newRefreshSession.refreshToken,
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
