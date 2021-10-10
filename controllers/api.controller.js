import dishesRouter from "./dishes.controller.js";
import chefsController from "./chefs.controller.js";
import resturantsController from "./resturants.controller.js"; // change to import

import { Router } from "express";
const router = Router();

router.use("/dishes", dishesRouter);
router.use("/chefs", chefsController);
router.use("/resturants", resturantsController);

export default router;
