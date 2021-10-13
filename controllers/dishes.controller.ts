import DishService from "../services/dishes.service";
import BaseController from "./BaseController";

import express, { Request, Response, NextFunction, Router } from "express";
// import BaseService from "../services/BaseService";
const router: Router = express.Router();

class DishesController extends BaseController {
  constructor(service: any, router: Router) {
    super(service, router);
  }
}

/*
 Create
 router.post("/", async (req: Request, res: Response, next: NextFunction) => {
   const response = await DishService.addDish(req.body);
   res.json(response);
   next();
 });

  Read
 router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
   const response = await DishService.getDish(req.params.id);
   res.json(response);
   next();
 });

  Update
 router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
   const response = await DishService.updateDish(req.body, req.params.id);
   res.json(response);
   next();
 });

  Delete
 router.delete(
   "/:id",
   async (req: Request, res: Response, next: NextFunction) => {
     const response = await DishService.deleteDish(req.params.id);
     res.json(response);
     next();
   }
 ); */

const dishesController = new DishesController(DishService, router);

export default dishesController.router;
