import apiController from "../controllers/api.controller";
import { Router } from "express";

const router: Router = Router();

router.use("/v1", apiController);

export default router;
