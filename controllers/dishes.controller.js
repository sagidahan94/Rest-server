const dishesService = require("../services/dishes.service");

const express = require("express");
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

module.exports = router;