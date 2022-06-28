import { model, Schema } from "mongoose";
import { ProfileInterface } from "../interfaces/profile.interface";
import "dotenv/config";

interface ProfileModel extends ProfileInterface {}

const ProfileSchema = new Schema({
  icon: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  github: {
    type: String,
  },
  discord: {
    type: String,
  },
  message: {
    type: String,
  },
});

export default model<ProfileModel>("Profile", ProfileSchema);
