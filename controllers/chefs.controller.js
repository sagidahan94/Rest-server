import ChefService from "../services/chefs.service.js";

import express from "express";
const router = express.Router();

// Create
router.post("/", async (req, res, next) => {
  const response = await ChefService.addChef(req.body);
  res.json(response);
  next();
});

// Read
router.get("/:id", async (req, res, next) => {
  const response = await ChefService.getChef(req.params.id);
  res.json(response);
  next();
});

// Update
router.put("/:id", async (req, res, next) => {
  const response = await ChefService.updateChef(req.body, req.params.id);
  res.json(response);
  next();
});

// Delete
router.delete("/:id", async (req, res, next) => {
  const response = await ChefService.deleteChef(req.params.id);
  res.json(response);
  next();
});

export default router;
