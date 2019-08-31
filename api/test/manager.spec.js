const request = require('supertest');
const manager = 'http://localhost:4000/manager';

// Main Page
describe('GET /', () => {
    
    it('should return 200 OK', (done) => {
      request(manager)
        .get('/')
        .expect(200, done);
    });

});