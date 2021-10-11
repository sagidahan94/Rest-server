import ResturantService from "../services/resturants.service.js";

import express from "express";
const router = express.Router();

// Create
router.post("/", async (req, res, next) => {
  const response = await ResturantService.addResturant(req.body);
  res.json(response);
  next();
});

// Read
router.get("/:id", async (req, res, next) => {
  const response = await ResturantService.getResturant(req.params.id);
  res.json(response);
  next();
});

// Update
router.put("/:id", async (req, res, next) => {
  const response = await ResturantService.updateResturant(
    req.body,
    req.params.id
  );
  res.json(response);
  next();
});

// Delete
router.delete("/:id", async (req, res, next) => {
  const response = await ResturantService.deleteResturant(req.params.id);
  res.json(response);
  next();
});

export default router;
