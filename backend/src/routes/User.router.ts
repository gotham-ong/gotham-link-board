import express, { Request, Response } from "express";
import * as UserController from "../controllers/User.controller";
import multer from "multer";

export const UserRouter = express.Router();

UserRouter.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./tmp");
  },
  filename: (req, file, cb) => {
    const randomName = Math.floor(Math.random() * 9999999);
    cb(null, `${randomName + Date.now()}.jpg`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed: string[] = ["image/jpg", "image/png", "image/jpeg"];
    cb(null, allowed.includes(file.mimetype));
  },
  limits: { fieldSize: 2000000 },
});

UserRouter.get("/", UserController.allUser);

UserRouter.get("/:id", UserController.onlyOneUser);

UserRouter.post(
  "/newUser",
  upload.single("icon"),
  UserController.createNewUser
);

UserRouter.put("/:id", UserController.updateUser);

UserRouter.delete("/:id", UserController.deleteUser);
