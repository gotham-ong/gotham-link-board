import express, { Request, Response } from "express";
import * as UserController from "../controllers/User.controller";

export const UserRouter = express.Router();

UserRouter.use(express.json());

UserRouter.get("/", UserController.allUser);
