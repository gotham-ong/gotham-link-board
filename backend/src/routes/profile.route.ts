import { Router } from "express";
import profileController from "../controllers/profile.controller";
import multer from "multer";

const profileRoute = Router();

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

profileRoute.post(
  "/cadastarProfile",
  upload.single("icon"),
  profileController.cadastrarProfile
);

export default profileRoute;
