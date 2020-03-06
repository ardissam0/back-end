const request = require('supertest');
const server = require('../server.js');

describe('testing the ingredients router', () => {
    describe('making sure tests are running', () => {
        it('should run the tests', () => {
            expect(true).toBe(true);
        });
    });

    describe('GET to /api/ingredients - no token', () => {
        it('should return a 401 unauthorized error message', () => {
            return request(server)
                .get(`/api/ingredients`)
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });

        it('should return a JSON formatted response', () => {
            return request(server)
                .get(`/api/ingredients`)
                .then(res => {
                    expect(res.type).toMatch(/json/);
                });
        });
    });
});