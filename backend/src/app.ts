import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import usuarioRoute from "./routes/usuario.route";
import profileRoute from "./routes/profile.route";
import { MulterError } from "multer";

export class App {
  private express: express.Application;
  private port = 9000;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(this.erroHandler);
  }

  private listen(): void {
    this.express.listen(this.port, () => {
      console.log("Servidor iniciado na porta " + this.port);
    });
  }

  private database(): void {
    mongoose.connect(process.env.DB_URL as string);
  }

  private routes(): void {
    this.express.use("/usuarios", usuarioRoute);
    this.express.use("/profile", profileRoute);
  }

  private erroHandler(err, res, req, next): void {
    res.status(400);

    if (err instanceof MulterError) {
      res.json({ message: err.code });
    } else {
      console.error(err.message);
      res.json({ message: err.message });
    }
  }
}
