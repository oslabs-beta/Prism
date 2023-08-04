// user authentication
import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

// pre-save to hash password
userSchema.pre('save', async function (next) {
  // if password has not been modified , we don't need to hash
  // (this is for user object updates)
  if (!this.isModified('password')) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// method for comparing passwords stored on user schema
userSchema.methods.matchPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};
// create model from schema to export
const userModel = mongoose.model('users', userSchema);

export default userModel;
