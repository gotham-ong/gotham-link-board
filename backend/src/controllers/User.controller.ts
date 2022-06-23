import { Request, Response } from "express";
import * as UserService from "../services/User.service";
import { ObjectId } from "mongodb";

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
