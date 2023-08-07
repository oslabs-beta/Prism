import request from 'supertest';
const userRoute: string = 'http://localhost:3333/user';

// integration test for signup route
describe('Signup route test', () => {
  const username: string = `Test ${Date.now()}`;
  it('should respond with username ', () => {
    return request(userRoute)
      .post('/signup')
      .send({ username: username, password: 'password' })
      .then((response) => {
        console.log(response.body);
        expect(response.body.username).toBe(username);
        expect(response.body.created).toBe(true);
      });
  });

  it('should respond with {created: false} when trying to create a duplicate user', () => {
    return request(userRoute)
      .post('/signup')
      .send({ username: username, password: 'password' })
      .expect(202)
      .then((response) => {
        console.log(response.body);
        expect(response.body.created).toBe(false);
      });
  });
});
// integration test for login route
