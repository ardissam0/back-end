const request = require('supertest');
const server = require('../server.js');
const db = require('../../database/connection');

let username;
let token;
let userId;
let counter = 0;

// describe('Auth testing', () => {
//     const user = {
//         username: 'testing123',
//         password: 'password'
//     }

//     describe('POST to /api/register', () => {
//         beforeEach(async () => {
//             await db('users').truncate()
//         })

//         it('should return 201 status for account creation', () => {
//             return request(server)
//                 .post(`/api/auth/register`)
//                 .send(user)
//                 .then(res => {
//                     username = res.body.username;
//                     counter = counter + 1;
//                     expect(res.status).toBe(201);
//                 });
//         });
//     });
// });

describe('testing auth router', () => {
    it('should run the tests to make sure we are testing', () => {
        expect(true).toBe(true);
    });

    // it('POST should return a 201 status for newly registered account', () => {
    //     return request(server)
    //         .post(`/api/auth/register`)
    //         .send({ username: 'newtester2', password: bcrypt.hashSync('testing', 8) })
    //         .then(res => {
    //             expect(res.status).toBe(201);
    //         });
    // });

    it('GET should return a 200 status and list of users', () => {
        return request(server)
            .get(`/api/auth`)
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    it('should return a JSON formatted response', () => {
        return request(server)
            .get(`/api/auth`)
            .then(res => {
                expect(res.type).toMatch(/json/);
            });
    });

    // beforeAll((done) => {
    //     request(server)
    //         .post(`/api/login`)
    //         .send({
    //             username: 'grandma',
    //             password: 'password'
    //         })
    //         .end((err, response) => {
    //             token = response.body.token;
    //             done();
    //         });
    // });

    // testing

    // describe('POST to login should return 201 and successful login', () => {
    //     it('should return a 201', () => {
    //         request(server)
    //             .post(`/api/auth/login`, { username: 'grandma', password: 'testing' })
    //             .then(res => {
    //                 expect(res.status).toBe(201);
    //             })
    //     });
    // });

    // describe('POST to register should return a 201 successfully created', () => {
    //     it('should return a 201', async () => {

    //         let rand = Math.round(Math.random());

    //         request(server)
    //             .post(`/api/auth/register`, { username: `tester${rand}`, password: 'password' })
    //             .then(res => {
    //                 expect(res.status).toBe(201);
    //             });
    //     });
    // });
});

// describe('POST to register', () => {
//     it('should return a 201 for newly created account', () => {

//         let user = {
//             username: 'tester27',
//             password: 'password'
//         }

//         return request(server)
//             .post(`/api/auth/register`)
//             .send(user)
//             .then(res => {
//                 expect(res.status).toBe(201);
//             });
//     });
// });

// describe('POST to register', () => {

//     const user = {
//         username: 'tester' + counter,
//         password: 'password'
//     }

//     describe('sending POST request', () => {
//         beforeEach(async () => {
//             await db('users').truncate()
//         });

//         it('should return 201 successful new account', () => {
//             return request(server)
//                 .post(`/api/auth/register`)
//                 .send(user)
//                 .then(res => {
//                     counter = counter + 1;
//                     expect(res.status).toBe(201);
//                 });
//         });
//     });
// });