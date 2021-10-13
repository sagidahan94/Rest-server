import apiController from "./controllers/api.controller";
import dbConnection from "./db/dbConnect";

import express from "express";
import cors from "cors";
const app = express();

dbConnection();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiController);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
