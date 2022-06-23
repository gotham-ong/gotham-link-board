import { ObjectId } from "mongodb";

export default class User {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public password: string,
    public icon: string,
    public id?: ObjectId
  ) {}
}
