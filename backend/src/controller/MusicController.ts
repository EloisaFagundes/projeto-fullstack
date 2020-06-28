import { MusicBusiness } from "../business/MusicBusiness";
import { MusicDatabase } from "../data/MusicDatabase";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { Request, Response } from "express";

export class MusicController {
  private static MusicBusiness = new MusicBusiness(
    new MusicDatabase(),
    new AlbumDatabase(),
    new UserDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async createMusic(req: Request, res: Response) {
    const token =
      req.headers.authorization || (req.headers.Authorization as string);
    const { albumId, name } = req.body;
    try {
      await MusicController.MusicBusiness.createMusic(token, albumId, name);
      res.status(200).send({ message: "Música criada com sucesso." });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
