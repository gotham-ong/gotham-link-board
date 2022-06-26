import { model, Schema } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import bcrypt from "bcrypt";

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

UsuarioSchema.pre<UsuarioModel>("save", async function criptografarSenha() {
  this.senha = await bcrypt.hash(this.senha as string, 8);
});

export default model<UsuarioModel>("Usuario", UsuarioSchema);
