const request = require('supertest');
const keywords = 'http://localhost:4000';

// Main Page
describe('GET /', () => {
    
    it('should return 200 OK', (done) => {
      request(keywords)
        .get('/')
        .expect(200, done);
    });

});