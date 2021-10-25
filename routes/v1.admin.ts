import apiController from "../controllers/api.controller";
import { Router } from "express";
import UsersController from "../controllers/users.controller";
import { authentication } from "../middlewares/auth";

const router: Router = Router();

router.use("/auth", UsersController);
router.use("*", authentication);
router.use("/v1", apiController);

export default router;
