import route from "./routes/route";
import dbConnection from "./config/dbConnect";
import dotEnv from "dotenv";
import { errorHandler, TypeError } from "./middlewares/errorHandler";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();

dotEnv.config({ path: "./config/config.env" });

dbConnection();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", route);

// Error Handler
app.use((err: TypeError, req: Request, res: Response, next: NextFunction) =>
  errorHandler(err, res, req, next)
);

// @IntersectionObserverEntry()
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
