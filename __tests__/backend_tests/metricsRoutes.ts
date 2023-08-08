//  Backend route integration tests
import request from 'supertest';
const serverRoute: string = 'http://localhost:3333/api';

xdescribe('Dashboard creation route', () => {
  it('responds with dashboard url', () => {
    return request(serverRoute)
      .post('/')
      .then((response) => {
        console.log(response.body);
        expect(response.body.frameURL).toBeTruthy();
      });
  });
});
