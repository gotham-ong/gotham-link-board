import { Request, Response } from "express";
import * as UserService from "../services/User.service";
import { ObjectId } from "mongodb";
import sharp from "sharp";
import User from "../models/User";
import { unlink } from "fs/promises";

export const allUser = async (req: Request, res: Response): Promise<void> => {
  const users = await UserService.findAllUser();
  if (users === false) {
    res.status(404).json({ error: "Not Found" });
    return;
  }
  res.status(200).json(users);
};

export const onlyOneUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  const user = await UserService.findOneUser(id);

  if (!user) {
    res.status(404).json({ error: "Not Found" });
    return;
  }
  res.status(200).json(user);
};

export const createNewUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const infos = req.body as User;

    if (req.file) {
      const filename = `${req.file.filename}`;
      await sharp(req.file.path)
        .resize(500)
        .toFormat("jpeg")
        .toFile(`./public/midia/${filename}`);

      await unlink(req.file.path);
      infos.icon = filename;
    } else {
      res.status(400).json({ error: "send a icon" });
      return;
    }

    const result = await UserService.InsertOneUserInDatabase(infos);

    result
      ? res.status(201).json({
          message: `Sucesso ao criar user de id: ${result.insertedId}`,
        })
      : res.status(500).json({ error: "Falha ao Criar um novo user" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};
