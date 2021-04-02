class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async login(req, res, next) {
        console.log('login');
        /*
            Входные данные 
            login, password
        */

        /*
            Выходные данные 
            Inner error 500 
            Invalid user data 403 

            Set-Cookie: refreshToken=''; HttpOnly // для браузера

        */
        const { login, password, fingerprint } = req.body;

        const refreshSessionData = {
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            userAgent: req.get('User-Agent'),
        };

        let result;

        try {
            result = await this.authService.checkUser(login, password);
        } catch (error) {
            console.log(error);
        }

        if (!result.status) return res.sendStatus(403);

        const resultIssue = await this.authService.issuePairToken(
            refreshSessionData,
            result.userDTO,
            fingerprint,
        );

        res.cookie('refreshToken', resultIssue.refreshToken, {
            maxAge: resultIssue.expiresIn,
            httpOnly: true,
        }).send({
            accessToken: resultIssue.accessToken,
        });
    }

    async logout(req, res, next) {
        /*
            Входные данные 
            refreshToken
        */
        /*
            Выходные данные
            Refresh token not provided 
            User is logged out from current session cookie null 
        */
        const { fingerPrint } = req.body;
        const { refreshToken } = req.cookies;

        if (typeof refreshToken === 'object')
            return res.send({
                message: 'Successfully logout',
            });

        const resultLogout = await this.authService.logout(
            fingerPrint,
            refreshToken,
        );

        if (resultLogout.hasOwnProperty('statusCode'))
            return res.sendStatus(resultLogout.statusCode);

        res.cookie('refreshToken', { expires: Date.now() }).send({
            message: 'Successfully logout',
        });
    }

    async refreshtokens(req, res, next) {
        /*
            Входные данные 
            accessToken, fingerPrint, refreshToken
        */
        /*
            Выходные данные 

            Refresh session expired
            Invalid refresh session
        */

        const { accessToken, fingerPrint } = req.body;
        const { refreshToken } = req.cookies;

        const refreshSessionData = {
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            userAgent: req.get('User-Agent'),
        };

        const newTokens = await this.authService.refreshTokens(
            accessToken,
            fingerPrint,
            refreshToken,
            refreshSessionData,
        );

        if (newTokens.statusCode) return res.sendStatus(newTokens.statusCode);

        res.cookie('refreshToken', newTokens.refreshToken, {
            maxAge: newTokens.expiresIn,
            httpOnly: true,
        }).send({
            accessToken: newTokens.accessToken,
        });
    }
}
module.exports = AuthController;
