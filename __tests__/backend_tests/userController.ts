//import userController from '../../server/controllers/userController';
import { Request, Response, NextFunction } from 'express';

// Typing: Request and response body are objects

const next = jest.fn() as NextFunction;
const request = {
  body: {},
} as Request;

const response = {
  locals: {},
} as Response;

// test createUser
xdescribe('user controller authentication', () => {
  beforeEach(() => {
    response.locals.user = {};
    (request.body.username = 'test'), (request.body.password = 'password');
  });

  test('Authentication sets properties correctly for true password ', async () => {
    await userController.authUser(request, response, next);
    expect(response.locals.user.username).toEqual(request.body.username);
    expect(response.locals.user.auth).toBe(true);
  });
});
