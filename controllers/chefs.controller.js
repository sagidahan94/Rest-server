const dishesService = require("../services/dishes.service");

const express = require("express");
const router = express.Router();

const chefs = [{ name: "Yossi", lastName: "shitrit" }];

// Create
router.post("/chef", (req, res, next) => {
  next();
});

// Read
router.get("/get-chef", (req, res, next) => {
  res.send(chefs[0]);
  next();
});

// Update
router.put("/chef", (req, res, next) => {
  next();
});

// Delete
router.delete("/chef", (req, res, next) => {
  next();
});

module.exports = router;
