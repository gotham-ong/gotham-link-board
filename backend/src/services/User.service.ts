import * as mongoDB from "mongodb";
import "dotenv/config";
import { collections } from "./database.service";
import User from "../models/User";

export const findAllUser = async (): Promise<
  mongoDB.WithId<mongoDB.Document>[] | boolean | undefined
> => {
  try {
    const users: mongoDB.WithId<mongoDB.Document>[] | undefined =
      await collections.gotham?.find({}).toArray();
    return users;
  } catch (error) {
    return false;
  }
};
