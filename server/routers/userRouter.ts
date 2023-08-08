import { Router } from 'express';
import userController from '../controllers/userController';

// destructure imports into variables
const router: Router = Router();
const { createUser, authUser, setUserToken, deleteUser, verifyToken } =
  userController; // destructure imports

router.post('/signup', createUser, setUserToken, (req, res) => {
  // set cookie
  // res.cookie('user', res.locals.user.username, { maxAge: 3600000 }); // level 1 authentication: regular cookie
  res.json(res.locals.user);
});

router.post('/login', authUser, setUserToken, (req, res) => {
  res.json(res.locals.user);
});

router.delete('/', verifyToken, authUser, deleteUser, (req, res) => {
  res.json(res.locals.user);
});

// oauth
router.get(
  '/getAccessToken',
  async (req, res, next) => {
    console.log(req.query.code);

    const params =
      '?client_id=' +
      process.env.CLIENT_ID +
      '&client_secret=' +
      process.env.CLIENT_SECRET +
      '&code=' +
      req.query.code;

    await fetch('https://github.com/login/oauth/access_token' + params, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        res.locals.token = data.access_token;
        // res.json(data);
        return next();
      });
  },
  userController.setOauthToken,
  (req, res) => {
    return res.status(200).json({ auth: true });
  }
);

// getUserData
router.get('/getUserData', async function (req, res) {
  req.get('Authorization');
  await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      Authorization: req.get('Authorization'),
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

export default router;
