import User from "../db/models/userSchema";
import { BaseService } from "./baseService";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Model } from "mongoose";
import { TypeError, HttpStatusCode } from "../middlewares/errorHandler";

declare var process: {
  env: {
    JWT_SECRET: string;
    JWT_EXPIRE: number;
  };
};

class UserService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  // register
  public async register(body: any) {
    const newUser = await this.model.create(body);
    newUser.password = bcrypt.hashSync(body.password, 10);
    return newUser.save();
  }

  // Sign in
  public async sign_in(body: any) {
    const user = await User.findOne({
      email: body.email,
    });
    if (!user || !(await user.comparePassword(body.password))) {
      throw new TypeError(
        "Authentication failed. Invalid user or password",
        HttpStatusCode.Unauthorized
      );
    } else {
      return jwt.sign(
        { fullName: user.fullName, _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );
    }
  }
}

const userService = new UserService(User);

export default userService;
