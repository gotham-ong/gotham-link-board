import express, { Request, Response, ErrorRequestHandler } from "express";
import path from "path";
import "dotenv/config";
import cors from "cors";
import { UserRouter } from "./routes/User.router";
import { connectToDatabase } from "./services/database.service";
import { MulterError } from "multer";

const server = express();

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400);

  if (err instanceof MulterError) {
    res.json({ message: err.code });
  } else {
    console.error(err.message);
    res.json({ message: err.message });
  }
};

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(`${process.cwd()}/public`));
server.use(errorHandler);

connectToDatabase()
  .then(() => {
    server.use("/User", UserRouter);

    server.listen(process.env.SERVER_PORT, () => {
      console.log(
        `Server started at http://localhost:${process.env.SERVER_PORT}`
      );
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
