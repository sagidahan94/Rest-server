import { Request, Response, Router } from "express";
import { IBaseService } from "../services/BaseService";

class BaseController {
  public router: Router;
  public service: any;

  constructor(service: IBaseService) {
    this.router = Router();
    this.service = service;
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.post("/", this.create.bind(this));
    this.router.get("/", this.readAll.bind(this));
    this.router.get("/:id", this.read.bind(this));
    this.router.put("/:id", this.update.bind(this));
    this.router.delete("/:id", this.delete.bind(this));
  }

  // Create
  public async create(req: Request, res: Response) {
    try {
      const response = await this.service.add(req.body);
      res.json(response);
    } catch (error) {}
  }

  // Get
  public async read(req: Request, res: Response) {
    try {
      const response = await this.service.get(req.params.id);
      res.json(response);
    } catch (error) {}
  }

  // Get All
  public async readAll(req: Request, res: Response) {
    try {
      const response = await this.service.getAll();
      res.json(response);
    } catch (error) {}
  }

  // Update
  public async update(req: Request, res: Response) {
    try {
      const response = await this.service.update(req.body, req.params.id);
      res.json(response);
    } catch (error) {}
  }

  // Delete
  public async delete(req: Request, res: Response) {
    try {
      const response = await this.service.delete(req.params.id);
      res.json(response);
    } catch (erorr) {}
  }
}

export default BaseController;
