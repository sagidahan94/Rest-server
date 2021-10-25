import route from "./routes/route";
import dbConnection from "./config/dbConnect";
import dotEnv from "dotenv";

import express from "express";
import cors from "cors";

const app = express();

dotEnv.config({ path: "./config/config.env" });

dbConnection();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", route);

// @IntersectionObserverEntry()
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
