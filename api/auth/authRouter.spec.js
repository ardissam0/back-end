const request = require('supertest');
const server = require('../server.js');

describe('testing tests', () => {
    it('should run the tests to make sure we are testing', () => {
        expect(true).toBe(true);
    });
});

// describe('POST /api/auth/register', () => {
//     it('should return a 201 status', () => {
//         /* change username or username and password each time */
//         return request(server)
//             .post('/api/auth/register')
//             .send({ username: 'tester', password: 'testing' })
//             .then(res => {
//                 expect(res.status).toBe(201);
//             });
//     });
// });

// describe('POST to /api/auth/register', function () {
//     it('should return a 201', function () {
//         return request(server)
//             .post('/api/auth/register')
//             .send({ username: 'chef3', password: 'password' })
//             .then(res => {
//                 expect(res.status).toBe(201);
//             });
//     });
// });