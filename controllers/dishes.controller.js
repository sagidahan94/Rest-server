// import dishesService from "../services/dishes.service.js";

import express from "express";
const router = express.Router();

// Create
router.post("/dishes", (req, res, next) => {
  next();
});

// Read
router.get("/dishes", (req, res, next) => {
  next();
});

// Update
router.put("/dishes", (req, res, next) => {
  next();
});

// Delete
router.delete("/dishes", (req, res, next) => {
  next();
});

export default router;
