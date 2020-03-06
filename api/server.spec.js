require('dotenv');
require('supertest');

describe('server.js test', () => {
    describe('environment', () => {
        it('should use the testing environment', () => {
            expect(process.env.DB_ENV).toBe('testing');
        });
    });
});