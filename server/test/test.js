const request = require('supertest');
const app = require('../../app');

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
            .expect(JSON.stringify(['Amsterdam', 'Eindhoven', 'The Hague']), done);
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
