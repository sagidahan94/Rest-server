import express, { Request, Response, NextFunction, Router } from "express";

class BaseController {
  public router: Router;
  public service: any;

  constructor(service: any, router: Router) {
    this.router = express.Router();
    this.initiailizeCRUDroutes();
    this.service = service;
  }

  protected initiailizeCRUDroutes(): void {
    this.router.post("/", this.create.bind(this));
    this.router.get("/:id", this.read.bind(this));
    this.router.put("/:id", this.update.bind(this));
    this.router.delete("/:id", this.delete.bind(this));
  }

  // Create
  protected create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await this.service.add(req.body);
    res.json(response);
    next();
  };

  // Read
  protected read = async (req: Request, res: Response, next: NextFunction) => {
    const response = await this.service.get(req.params.id);
    res.json(response);
    next();
  };

  // Update
  protected update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await this.service.update(req.body, req.params.id);
    res.json(response);
    next();
  };

  // Delete
  protected delete = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const response = await this.service.delete(req.params.id);
    res.json(response);
    next();
  };
}

export default BaseController;
