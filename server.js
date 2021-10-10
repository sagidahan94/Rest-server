import apiController from "./controllers/api.controller.js";
import connectDB from "./db/dbConnect.js";

import express from "express";
import cors from "cors";
const app = express();

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.on("connected", (err, res) => {
//   console.log("mongoose is connected");
// });

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiController);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
