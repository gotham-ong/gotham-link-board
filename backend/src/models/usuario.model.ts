import { model, Schema } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import bcrypt from "bcrypt";

interface UsuarioModel extends UsuarioInterface {
  compararSenhas(senha: string): Promise<boolean>;
}

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

UsuarioSchema.methods.compararSenhas = function (
  senha: string
): Promise<boolean> {
  return bcrypt.compare(senha, this.senha);
};

export default model<UsuarioModel>("Usuario", UsuarioSchema);
