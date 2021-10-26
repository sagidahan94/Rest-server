import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  error: Error,
  res: Response,
  req: Request,
  next: NextFunction
) {}
