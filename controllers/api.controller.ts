import DishesController from "./dishes.controller";
import ChefController from "./chefs.controller";
import RestController from "./resturants.controller";
import UserController from "./users.controller";
import { authentication } from "../middlewares/auth";
import { Router } from "express";

const router: Router = Router();

// const dishController = new DishesController();

router.use("/auth", UserController);
router.use("/dishes", DishesController);
router.use("/chefs", ChefController);
router.use("/resturants", RestController);

export default router;
