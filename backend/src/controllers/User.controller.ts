import { Request, Response } from "express";
import * as UserService from "../services/User.service";
import { ObjectId } from "mongodb";
import sharp from "sharp";
import User from "../models/User";
import { unlink } from "fs/promises";
import { collections } from "../services/database.service";

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

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req?.params?.id;

  try {
    const updateUser: User = req.body as User;

    const result = await collections.gotham?.updateMany(
      { _id: new ObjectId(id) },
      { $set: updateUser }
    );

    result
      ? res
          .status(200)
          .json({ message: `Sucesso ao atualizar o user com id ${id}` })
      : res.status(304).json({ message: `User com id ${id} não atualizado` });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await UserService.deleteUser(query);

    if (result && result.deletedCount) {
      res
        .status(202)
        .json({ message: `Sucesso ao remover o user do id ${id}` });
    } else if (!result) {
      res
        .status(400)
        .json({ message: `Falha ao tentar remover o user com id ${id}` });
    } else if (!result.deletedCount) {
      res.status(404).json({ message: `User com id ${id} não existe` });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
