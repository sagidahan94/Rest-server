import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../db/models/userSchema";
import { TypeError, HttpStatusCode } from "./errorHandler";

declare var process: {
  env: {
    JWT_SECRET: string;
    JWT_EXPIRE: number;
  };
};

export async function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers?.authorization?.split(" ")?.[0] === "JWT") {
    try {
      const decode: any = jwt.verify(
        req.headers.authorization.split(" ")?.[1],
        process.env.JWT_SECRET
      );
      console.log(decode);
      const user = await User.findById(decode.id);
      // res.locals.id = user.id;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    throw new TypeError(
      "authorization header is wrong",
      HttpStatusCode.Unauthorized
    );
  }
}
