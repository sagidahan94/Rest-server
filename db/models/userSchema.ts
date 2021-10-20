import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

// User interface
interface IUser {
  fullName: string;
  email: string;
  password: any;
  created: Date;
}

/**
 * User Schema
 */
const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export { User, IUser };

// {"fullName": "Sagi Dahan", "email" : "sagidahan94@gmail.com" , "password": "!12Sagi34"}
