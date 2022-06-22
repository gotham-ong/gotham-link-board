import express, { Request, Response } from "express";
import * as helloController from "../controllers/hello.controller";

export const helloRouter = express.Router();

helloRouter.use(express.json());

helloRouter.get("/", helloController.allUser);

export default helloRouter;
