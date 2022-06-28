import { model, Schema } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface UsuarioModel extends UsuarioInterface {
  compararSenhas(senha: string): Promise<boolean>;
  gerarToken(): string;
}

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true,
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

UsuarioSchema.methods.gerarToken = function (): string {
  const decodeToken = {
    _id: String(this._id),
    nome: this.nome,
  };

  return jwt.sign(decodeToken, process.env.SECRECT_KEY as string, {
    expiresIn: "1d",
  });
};

export default model<UsuarioModel>("Usuario", UsuarioSchema);
