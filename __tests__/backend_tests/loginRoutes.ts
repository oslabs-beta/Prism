import request from 'supertest';
const userRoute: string = 'http://localhost:3333/user';

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
  it('should respond with a 200 status code for successful login', () => {
    return request(userRoute)
      .post('/login')
      .send({ username: 'Test', password: 'password' })
      .expect(200)
      .then((response) => {
        expect(response.body.auth).toBe(true);
      });
  });

  it('should respond with a 401 status code for unsuccessful login', () => {
    return request(userRoute)
      .post('/login')
      .send({ username: 'Test', password: 'test' })
      .expect(401)
      .then((response) => expect(response.body.auth).toBe(false));
  });
});
