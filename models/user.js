import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//User schema if we save the data run this fuction
UserSchema.pre( 'save' , async function(next) {
  if(!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
  next();
})

UserSchema.methods.matchPasswords = async function (password) {
  return await bcyrp.compare(password , this.password); // fonksiyona gelen sifre ile compare edilen sifreyi karsilastirir.
}

mongoose.models = {};

var User = mongoose.model('User', UserSchema);

export default User;