import DishesController from "./dishes.controller";
import ChefController from "./chefs.controller";
import RestController from "./resturants.controller"; // change to import

import { Router } from "express";
const router: Router = Router();

router.use("/dishes", DishesController);
router.use("/chefs", ChefController);
router.use("/resturants", RestController);

export default router;
