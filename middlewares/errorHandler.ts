import { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";

enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  Unauthorized = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

class TypeError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (
  error: TypeError,
  res: Response,
  req: Request,
  next: NextFunction
) => {
  res.status(error.statusCode).send(error.message);
};

export { errorHandler, TypeError, HttpStatusCode };
