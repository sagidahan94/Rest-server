import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../db/models/userSchema";

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
      res.status(401).json("no authorized");
    }
  } else {
    res.status(401).json("no authorized");
  }
}
