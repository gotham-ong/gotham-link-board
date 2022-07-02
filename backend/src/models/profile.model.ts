import { model, Schema } from "mongoose";
import { ProfileInterface } from "../interfaces/profile.interface";
import "dotenv/config";

interface ProfileModel extends ProfileInterface { }

const ProfileSchema = new Schema({
  remetente: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  discord: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
});

export default model<ProfileModel>("Profile", ProfileSchema);
