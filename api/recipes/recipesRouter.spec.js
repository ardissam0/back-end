const request = require('supertest');
const server = require('../server.js');
const db = require('../../database/connection');

let token;

before(done => {
    request(server)
        .post(`/api/auth/login`)
        .send({ username: 'grandma', password: 'testing' })
        .end((err, res) => {
            if (err) {
                done(err);
            }
            else {
                token = res.body.token;
                done();
            }
        });
});

describe('testing recipes router', () => {
    it('should work', () => {
        expect(true).toBe(true);
    });
});

describe('recipes', () => {

    describe('GET recipes - no token should return error', () => {
        it('should return 401 unauthorized', () => {
            return request(server)
                .get(`/api/recipes`)
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });

        it('should return a JSON formatted response', () => {
            return request(server)
                .get(`/api/recipes`)
                .then(res => {
                    expect(res.type).toMatch(/json/);
                });
        });

        // it('should return a 200 OK and array of existing recipes', () => {
        //     return request(server)
        //         .get('/api/recipes')
        //         .set('Authorization', token)
        //         .set('Accept', 'application/json')
        //         .then(res => {
        //             expect(res.status).toBe(200);
        //         })
        //     // .expect('Content-Type', /json/)
        //     // .expect(200)
        //     // .end((err, res) => {
        //     //     if (err) {
        //     //         done(err);
        //     //     }
        // });
    });
});

    // describe('GET recipes', () => {
    //     it('should return 200 OK with list of recipes', async () => {
    //         await request(server)
    //             .get(`/api/recipes`)
    //             .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMTAiLCJpYXQiOjE1ODM0MzEzODAsImV4cCI6MTU4MzUxNzc4MH0.nQR7x6DsVk6Pv6EdZQQO38u--raz0g4pnUtX0IuIw9k')
    //             .then(res => {
    //                 expect(res.status).toBe(200);
    //                 done();
    //             });
    //     });
    // });
// });

// describe('POST a recipe', () => {

//     const recipe = {
//         title: 'chicken noodle shoup',
//         source: 'grandma',
//         category_id: 1,
//         user_id: 1
//     }

//     it('should return a 201 status for recipe creation', () => {
//         return request(server)
//             .post(`/api/recipes`)
//             .set('Authorization', token)
//             .send(recipe)
//             .then(res => {
//                 id = res.body.id;
//                 expect(res.status).toBe(201);
//             });
//     });
// });