// user authentication middleware
import User from '../db/models/userSchema.js'; // import user model
import jwt from 'jsonwebtoken';
// mvp of this stretch feature: basic user auth, lasts while window is open
// stretch feature level 1: sets a JWT in cookie to use for auth purposes
// stretch feature level
const userController = {};

userController.createUser = async function (req, res, next) {
  // username nand password should come in on response body

  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  // console.log('user exists? ', ); // show when user doesn't exist
  if (!existingUser) {
    const user = await User.create({ username, password });
    res.locals.user = { username: user.username, created: true };
  } else {
    res.locals.user = { created: false };
  }
  return next();
};

userController.authUser = async function (req, res, next) {
  // username nand password should come in on response body
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  // authenticate passsword with comparison method on user model
  res.locals.user = {
    username: true,
    authStatus: await user.matchPassword(password),
  };

  return next();
};
// setToken : create JWT for authenticated users
userController.setToken = function (req, res, next) {
  // set JWT only if eitther user has successfully been created (signup) or authenticated (signin)
  if (res.locals.user.authStatus || res.locals.user.created) {
    console.log('login/signup successful');
    res.locals.jwt = jwt.sign(
      { user: res.locals.user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: 3600, // set expiry to 1 hour
      }
    );
    // store token in cookie
    res.cookie('token', res.locals.jwt, {
      maxAge: 3600000,
      secure: process.env.NODE_ENV !== 'development',
      httpOnly: true,
    });
  }
  return next();
};
// verifyToken: verify JWT
userController.verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // if there is no token, that's bad -
  if (!token) {
    res.locals.user = { auth: false, message: 'missing token' };
    return next();
  }

  // verify jwt
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // will return null if decoding fails
    if (decodedToken) {
      res.locals.user = { username: decodedToken.user, auth: true };
    } else {
      res.locals.user = { auth: false, message: 'TokenInvalid' };
    }
  } catch (err) {
    console.log(err.name);
    if (err.name === 'TokenExpiredError') {
      res.locals.user = { auth: false, message: 'TokenExpired' };
    } else {
      return next({
        message: { err: 'An error occured ' },
        log: 'Error occurred in verifying JWT in verifyToken middleware',
        error: err,
      });
    }
  } finally {
    return next();
  }
};

export default userController;