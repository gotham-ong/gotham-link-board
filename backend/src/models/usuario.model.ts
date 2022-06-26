import { model, Schema } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";

interface UsuarioModel extends UsuarioInterface {}

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
});

export default model<UsuarioModel>("Usuario", UsuarioSchema);
