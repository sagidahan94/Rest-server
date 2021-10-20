import v1Route from "./v1.admin";
import { authentication } from "../middlewares/auth";
import { Router } from "express";

const router: Router = Router();

// const dishController = new DishesController();

router.all("*", authentication);
router.use("/admin", v1Route);
//router.use("/v1", apiController);

export default router;
