const { v4: uuidv4 } = require('uuid');
const timeNow = require('../../common/timeNow');

class RefreshSession {
    constructor({ userId, ip, expiresIn, userAgent, createAt }) {
        this.refreshToken = uuidv4();
        this.userId = userId;
        this.fingerprint = uuidv4();
        this.ip = ip;
        this.expiresIn = expiresIn;
        this.userAgent = userAgent;
        this.createAt = timeNow();
    }
}

module.exports = RefreshSession;
