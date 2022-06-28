import { Request, Response } from "express";
import profileModel from "../models/profile.model";

class ProfileController {
  public async cadastrarProfile(req: Request, res: Response) {
    try {
      const profile = await profileModel.create(req.body);
      const resposta = {
        resposta: "Profile cadastrado com sucesso",
        icon: profile.icon,
        instagram: profile.instagram,
        facebook: profile.instagram,
        github: profile.github,
        discord: profile.github,
        message: profile.message,
      };
      return res.json(resposta);
    } catch (err) {
      return res.status(400).send({
        error: "Você deixou algum parametro obrigatorio sem preencher",
      });
    }
  }
}

export default new ProfileController();
