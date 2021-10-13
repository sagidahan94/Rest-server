import ResturantService from "../services/resturants.service";
import BaseController from "./BaseController";

import express, { Request, Response, NextFunction, Router } from "express";
const router: Router = express.Router();

class RestController extends BaseController {
  constructor(service: any, router: Router) {
    super(service, router);
  }
}

/*
// Create
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const response = await ResturantService.addResturant(req.body);
  res.json(response);
  next();
});

// Read
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const response = await ResturantService.getResturant(req.params.id);
  res.json(response);
  next();
});

// Update
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const response = await ResturantService.updateResturant(
    req.body,
    req.params.id
  );
  res.json(response);
  next();
});

// Delete
router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const response = await ResturantService.deleteResturant(req.params.id);
    res.json(response);
    next();
  }
);
*/

const restController = new RestController(ResturantService, router);

export default restController.router;
