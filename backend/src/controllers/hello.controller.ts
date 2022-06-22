import { Request, Response } from "express";
import User from "../models/User";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const allUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await collections.hello?.find({}).toArray();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
