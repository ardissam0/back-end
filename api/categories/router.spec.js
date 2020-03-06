const supertest = require('supertest');
const server = require('../server');
const request = supertest(server);

// let token;

// beforeAll((done) => {
//     request(server)
//         .post(`/api/auth/login`)
//         .send({
//             username: 'grandma',
//             password: 'testing'
//         })
//         .end((err, response) => {
//             token = response.body.token;
//             done();
//         });
// });

describe('runs category router tests', () => {
    it('should run our tests to make sure things are working.', () => {
        expect(true).toBe(true);
    })
});

// describe('GET categories request - with token', () => {
//     it('should return a 200 status and an array of categories', () => {

//         return request
//             .get(`/api/categories`)
//             .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lOSIsImlhdCI6MTU4MzQyMzg1MCwiZXhwIjoxNTgzNTEwMjUwfQ.0oP3ly4N0ASFQ3ORuyN3oxXOiamVOiRgSKweMNCP_IU')
//             .then(res => {
//                 expect(res.status).toBe(200);
//             });
//     });
// });

describe('GET categories request - no token', () => {
    it('should return a 401 error if there is no token', () => {
        return request
            .get(`/api/categories`)
            .then(res => {
                expect(res.status).toBe(401);
            });
    });

    it('should return a JSON formatted response', () => {
        return request
            .get(`/api/categories`)
            .then(res => {
                expect(res.type).toMatch(/json/);
            });
    });
});