import v1Route from "./v1.admin";
import { Router } from "express";
import apiController from "../controllers/api.controller";

const router: Router = Router();

// const dishController = new DishesController();

router.use("/admin", v1Route);
router.use("/v1", apiController);

export default router;
