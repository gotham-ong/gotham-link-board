import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import UsuarioModel from "../models/usuario.model";
import { UsuarioInterface } from "../interfaces/usuario.interface";

class authMiddleware {
  public async autorizarUsuarioByToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const token = req.query.token || req.headers["x-access-token"];

    if (!token) {
      return res.status(401).send({ message: "Acesso Restrito! " });
    }

    try {
      const usuarioToken = jwt.verify(
        String(token),
        process.env.SECRECT_KEY as string
      ) as UsuarioInterface;

      const usuario = await UsuarioModel.findById(usuarioToken._id);

      if (!usuario) {
        return res.status(400).send({ message: "Usuario não existe" });
      }

      req.usuario = usuario;

      return next();
    } catch (err) {
      return res.status(401).send({ message: "Token Invalido!" });
    }
  }
}

export default authMiddleware;
