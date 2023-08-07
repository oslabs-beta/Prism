import request from 'supertest';
const userRoute: string = 'http://localhost:3333/user';

// integration test for signup route
describe('Signup route tests', () => {
  const username: string = `Test ${Date.now()}`;
  it('should respond with username and a 201 status on successful creation', () => {
    return request(userRoute)
      .post('/signup')
      .send({ username: username, password: 'password' })
      .expect(201)
      .then((response) => {
        expect(response.body.username).toBe(username);
        expect(response.body.created).toBe(true);
      });
  });

  it('should not create a duplicate user', () => {
    return request(userRoute)
      .post('/signup')
      .send({ username: username, password: 'password' })
      .expect(202)
      .then((response) => {
        expect(response.body.created).toBe(false);
      });
  });
});

// integration test for login route
describe('login route tests', () => {
  it('should respond with a 202 status code', () => {
    return request(userRoute)
      .post('/login')
      .send({ username: 'Test', password: 'password' })
      .expect(202)
      .then((response) => {
        expect(response.body.auth).toBe(true);
      });
  });
});
