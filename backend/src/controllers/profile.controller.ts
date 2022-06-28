import { Request, Response } from "express";
import profileModel from "../models/profile.model";
import { ProfileInterface } from "../interfaces/profile.interface";
import sharp from "sharp";
import { unlink } from "fs/promises";

class ProfileController {
  public async cadastrarProfile(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const infos = req.body as ProfileInterface;

      if (req.file) {
        const filename = `${req.file.filename}`;
        await sharp(req.file.path)
          .resize(500)
          .toFormat("jpeg")
          .toFile(`./public/midia/${filename}`);

        await unlink(req.file.path);
        infos.icon = filename;
      } else {
        res.status(400).json({ error: "enviei um icon" });
        return;
      }
      const profile = await profileModel.create(infos);
      const resposta = {
        resposta: "Profile cadastrado com sucesso",
        icon: profile.icon,
        instagram: profile.instagram,
        facebook: profile.instagram,
        github: profile.github,
        discord: profile.discord,
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
