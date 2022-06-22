import { Request, Response } from "express";
import { findAllUser } from "../services/User.service";

export const allUser = async (req: Request, res: Response): Promise<void> => {
  const users = await findAllUser();
  if (users === false) {
    res.status(404).json({ error: "Not Found" });
  }
  res.status(200).json(users);
};
