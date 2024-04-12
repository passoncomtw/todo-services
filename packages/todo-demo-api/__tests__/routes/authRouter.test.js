const { mockApp } = require('../server.test');
const MOCK_USER = require('../../constants/mockUser');

describe('Test authorization user routes', () => {
  beforeAll(done => {
    try {
      done();
    } catch (error) {
      done(error);
    }
  });

  afterAll(done => {
    try {
      done();
    } catch (error) {
      done(error);
    }
  });

  it('should login by mockUser success', done => {
    mockApp
      .post('/auth')
      .set('Content-Type', 'application/json')
      .send(MOCK_USER)
      .then(response => {

        expect(response.statusCode).toBe(200);
        expect(response.body.token).not.toBe(undefined);
        expect(response.body.user).not.toBe(undefined);
        expect(response.body.user.id).not.toBe(undefined);
        expect(response.body.user.phone).not.toBe(undefined);
        done();
      }).catch(done);
  });
});
