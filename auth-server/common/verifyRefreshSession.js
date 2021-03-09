const HttpError = require('../HttpError');

module.exports = (oldRefreshSession, fingerPrint) => {
    const currnetTime = new Date().getTime();
    if (currnetTime > oldRefreshSession.expiresin)
        throw new HttpError({
            statusCode: 401,
            message: 'Refresh session expired',
        });
    if (oldRefreshSession.fingerprint !== fingerPrint)
        throw new HttpError({
            statusCode: 404,
            message: 'Invalid refresh session',
        });
    return true;
};
