// user authentication
import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: String,
  password: String,
});

// pre-save to hash password
userSchema.pre('save', async function (next) {
  // if password has not been modified , we don't need to hash
  // (this is for user object updates)
  if (!this.isModified(this.password)) return next();
  const salt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

// method for comparing passwords stored on user schema
userSchema.methods.matchPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};
// create model from schema to export
const userModel = mongoose.model('users', userSchema);

export default userModel;
