const request = require('supertest');
const app = require('../app');

describe('Requests to the root path', () => {

    it('Returns a 200 status code', (done) => {

        request(app)
            .get('/')
            .expect(200)
            .end((error) => {
                if (error) throw error;
                done();
            });
    });
});
