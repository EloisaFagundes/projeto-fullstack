import { AlbumBusiness } from "../business/AlbumBusiness";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { GenreDatabase } from "../data/GenreDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { Request, Response } from "express";

export class AlbumController {
  private static AlbumBusiness = new AlbumBusiness(
    new AlbumDatabase(),
    new UserDatabase(),
    new GenreDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async createAlbum(req: Request, res: Response) {
    const { name, genresInfo } = req.body;
    const token =
      req.headers.authorization || (req.headers.Authorization as string);

    try {
      await AlbumController.AlbumBusiness.createAlbum(token, name, genresInfo);
      res.status(200).send({ message: "Álbum cadastrado com sucesso!" });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getAlbunsByBandId(req: Request, res: Response) {
    const token =
      req.headers.authorization || (req.headers.Authorization as string);
    try {
      const result = await AlbumController.AlbumBusiness.getAlbunsByBandId(
        token
      );
      res.status(200).send({ result });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
