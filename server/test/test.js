const request = require('supertest');
const app = require('../../app');

const redis = require('redis');
const client = redis.createClient();
client.select('test'.length);
client.flushdb();

describe('Requests to the root path', () => {

    it('Returns a 200 status code', (done) => {

        request(app)
            .get('/')
            .expect(200, done);
    });

    it('Returns a HTML format', (done) => {

        request(app)
            .get('/')
            .expect('Content-Type', /html/, done);
    });

    it('Returns an index file with Cities', (done) => {

        request(app)
            .get('/')
            .expect(/cities/i, done);
    });
});

describe('Listing cities on /cities', () => {

    it('Returns 200 status code', (done) => {

        request(app)
            .get('/api/cities')
            .expect(200, done);
    });

    it('Returns JSON format', (done) => {

        request(app)
            .get('/api/cities')
            .expect('Content-Type', /json/, done);
    });

    it('Returns initial cities', (done) => {

        request(app)
            .get('/api/cities')
            .expect(JSON.stringify([]), done);
    });
});

describe('Creating new cities', () => {

    it('Returns a 201 status code', (done) => {

        request(app)
            .post('/api/cities')
            .send('name=Haarlem&isVisited=true')
            .expect(201, done);
    });

    it('Returns the city name', (done) => {

        request(app)
            .post('/api/cities')
            .send('name=Haarlem&isVisited=true')
            .expect('"Haarlem"', done);
    });
});

describe('Deleting cities', () => {

    before(() => {
        client.hset('cities', 'Haarlem', true);
    });


    after(() => {
        client.flushdb();
    });

    it('Returns a 204 status code', (done) => {

        request(app)
            .delete('/api/cities/Haarlem')
            .expect(204, done);
    });
});
