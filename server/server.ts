// types import
import { middlewareError } from "types/types";
// express server setup
import express, { NextFunction, Request, Response, json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { resolve } from "path";

// route imports
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";

// database connection
import connectDB from "./db/db";

// const declarations
const app = express();

const PORT = 3333;
connectDB();

type ServerError = {
  log: string;
  status: number;
  message: { err: string };
};

// parse request body
app.use(json());
app.use(cookieParser());
app.use(cors());

app.use("/api", apiRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(resolve(__dirname, "../index.html"));
});

// github oauth — include from .env
import dotenv from "dotenv";
dotenv.config();

// catch all route
app.get("*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});

// global error handler
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: middlewareError = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { error: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
// hi
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

export default app;
