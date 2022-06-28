import { Router } from "express";
import profileController from "../controllers/profile.controller";

const profileRoute = Router();


profileRoute.post('/cadastarProfile', profileController.cadastrarProfile)

export default profileRoute;
