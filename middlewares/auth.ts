import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare var process: {
  env: {
    JWT_SECRET: string;
    JWT_EXPIRE: number;
  };
};

export function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      function (err, decode) {
        if (err) req.body.user = undefined;
        req.body.user = decode;
        next();
      }
    );
  } else {
    req.body.user = undefined;
    next();
  }
}
