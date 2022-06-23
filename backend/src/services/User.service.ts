import * as mongoDB from "mongodb";
import "dotenv/config";
import { collections } from "./database.service";
import User from "../models/User";
import { ObjectId } from "mongodb";

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

export const findOneUser = async (
  id: string
): Promise<false | mongoDB.WithId<mongoDB.Document> | undefined> => {
  try {
    const query = { _id: new ObjectId(id) };
    const user = await collections.gotham?.findOne(query);
    if (user) {
      return user;
    }
  } catch (error) {
    return false;
  }
};

export const InsertOneUserInDatabase = async (
  infos: User
): Promise<false | mongoDB.InsertOneResult<mongoDB.Document> | undefined> => {
  try {
    const result = await collections.gotham?.insertOne(infos);
    if (result) {
      return result;
    }
  } catch (error) {
    return false;
  }
};
