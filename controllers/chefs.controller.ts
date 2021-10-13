import ChefService from "../services/chefs.service";
import BaseController from "./BaseController";

import express, { Request, Response, NextFunction, Router } from "express";
const router: Router = express.Router();

class ChefController extends BaseController {
  constructor(service: any, router: Router) {
    super(service, router);
  }
}

/*
  Create
 router.post("/", async (req: Request, res: Response, next: NextFunction) => {
   const response = await ChefService.addChef(req.body);
   res.json(response);
   next();
 });

  Read
 router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
   const response = await ChefService.getChef(req.params.id);
   res.json(response);
   next();
 });

  Update
 router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
   const response = await ChefService.updateChef(req.body, req.params.id);
   res.json(response);
   next();
 });

  Delete
 router.delete(
   "/:id",
   async (req: Request, res: Response, next: NextFunction) => {
     const response = await ChefService.deleteChef(req.params.id);
     res.json(response);
     next();
   }
 ); */

const chefController = new ChefController(ChefService, router);

export default chefController.router;
