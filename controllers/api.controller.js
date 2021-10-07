const dishesController = require("./dishes.controller");
const chefsController = require("./chefs.controller");
const resturantsController = require("./resturants.controller");

const { Router } = require("express");
const router = Router();

router.use("/dishes", dishesController);
router.use("/chefs", chefsController);
router.use("/resturants", resturantsController);

module.exports = router;
