import { Router } from 'express';
import userController from '../controllers/userController';

// destructure imports into variables
const router: Router = Router();
const { createUser, authUser, setToken, deleteUser, verifyToken } =
  userController; // destructure imports

router.post('/signup', createUser, setToken, (req, res) => {
  // set cookie
  // res.cookie('user', res.locals.user.username, { maxAge: 3600000 }); // level 1 authentication: regular cookie
  res.json(res.locals.user);
});

router.post('/login', authUser, setToken, (req, res) => {
  res.status(202).json(res.locals.user);
});

router.delete('/', verifyToken, authUser, deleteUser, (req, res) => {
  res.status(202).json(res.locals.user);
});

export default router;
