import dishesController from "./dishes.controller";
import chefController from "./chefs.controller";
import restController from "./restaurants.controller";
import dishService from "../services/dishes.service";
import restService from "../services/restaurants.service";
import chefService from "../services/chefs.service";
import { Router } from "express";

const DishesController = new dishesController(dishService);
const ChefController = new chefController(chefService);
const RestController = new restController(restService);

const router: Router = Router();

router.use("/dishes", DishesController.router);
router.use("/chefs", ChefController.router);
router.use("/restaurants", RestController.router);

export default router;
