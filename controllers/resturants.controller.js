const resturantsService = require("../services/resturants.service");

const express = require("express");
const router = express.Router();

// Create
router.post("/resturants", (req, res, next) => {
  next();
});

// Read
router.get("/resturants", (req, res, next) => {
  next();
});

// Update
router.put("/resturants", (req, res, next) => {
  next();
});

// Delete
router.delete("/resturants", (req, res, next) => {
  next();
});

module.exports = router;
