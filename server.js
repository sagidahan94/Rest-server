const apiController = require("./controllers/api.controller");

const express = require("express");
const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api", apiController);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

// var mongoose = require("mongoose");

// var Schema = mongoose.Schema;

// var personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number,
// });

// var Person = mongoose.model("Person", personSchema);

// var david = new Person({ firstName: "David", lastName: "Smith", age: 25 });
// console.log(david);
