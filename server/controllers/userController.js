// user authentication middleware
import User from '../db/models/userSchema.js'; // import user model
// mvp of this stretch feature: basic user auth, lasts while window is open
// stretch feature level 1: sets a JWT in cookie to use for auth purposes
// stretch feature level
const userController = {};

userController.createUser = async function (req, res, next) {
  // username nand password should come in on response body
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  res.locals.user = user;
  return next();
};

userController.authUser = async function (req, res, next) {
  // username nand password should come in on response body
  const { username, password } = req.body;
  const user = await User.find({ username });

  // authenticate passsword with comparison method on user model
  res.locals.userAuth = { authStatus: await user.matchPassword(password) };

  return next();
};

export default userController;
