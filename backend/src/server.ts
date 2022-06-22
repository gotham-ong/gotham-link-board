import express, { Request, Response, ErrorRequestHandler } from "express";
import path from "path";
import "dotenv/config";
import cors from "cors";
import { helloRouter } from "./routes/hello.router";
import { connectToDatabase } from "./services/database.service";

const server = express();

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400).json({message: err});

  // if (err instanceof MulterError) {
  //   res.json({ message: err.code });
  // } else {
  //   console.error(err.message);
  //   res.json({ message: err.message });
  // }
};

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(`${process.cwd()}/public`));
server.use(errorHandler);

connectToDatabase()
  .then(() => {
    server.use("/", helloRouter);

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
