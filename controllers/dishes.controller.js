import DishService from "../services/dishes.service.js";

import express from "express";
const router = express.Router();

// Create
router.post("/", async (req, res, next) => {
  const response = await DishService.addDish(req.body);
  res.json(response);
  next();
});

// Read
router.get("/:id", async (req, res, next) => {
  const response = await DishService.getDish(req.params.id);
  res.json(response);
  next();
});

// Update
router.put("/:id", async (req, res, next) => {
  const response = await DishService.updateDish(req.body, req.params.id);
  res.json(response);
  next();
});

// Delete
router.delete("/:id", async (req, res, next) => {
  const response = await DishService.deleteDish(req.params.id);
  res.json(response);
  next();
});

export default router;
