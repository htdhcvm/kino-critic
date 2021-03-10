const request = require('supertest');
const { response } = require('../app');
const app = require('../app');

jest.mock('RefreshSession');
jest.mock('getUser');

let listRefreshSessions;
let user;

beforeAll(() => {
    listRefreshSessions = require('RefreshSession');
    user = require('getUser');
});

describe('auth tests', () => {
    test('User login, create tokens', async done => {
        const responseLogin = await request(app).post('/login').send(user);

        console.log(responseLogin);

        done();
    });
    test.todo('User get 403 if his data invalid');
    test.todo('User get 401 if expired token');
    test.todo('User can refresh token');
    test.todo('User logout');
    test.todo('User send invalid refresh token and get response status 404');
    test.todo('User can refresh token only once');
    test.todo('Refresh and Access token invalid when user logout');
    test.todo(
        'User can auth only five device at the same time and receive response status 401',
    );
});
