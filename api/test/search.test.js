const request = require('supertest');
const search = 'http://localhost:4000';

// Main Page
describe('GET /', () => {

    it('should return 200 OK', (done) => {
      request(search)
        .get('/en/search')
        .expect(200, done);
    });

});