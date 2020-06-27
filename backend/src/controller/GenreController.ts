import { GenreBusiness } from "../business/GenreBusiness";
import { GenreDatabase } from "../data/GenreDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { Request, Response } from "express";

export class GenreController {
  private static GenreBusiness = new GenreBusiness(
    new UserDatabase(),
    new GenreDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async addMusicalGenre(req: Request, res: Response) {
    const { name } = req.body;
    const token = req.headers.authorization as string;

    try {
      await GenreController.GenreBusiness.addMusicalGenre(name, token);
      res.status(200).send({ message: "Gênero cadastrado com sucesso!" });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getAllMusicalGenres(req: Request, res: Response) {
    const token = req.headers.authorization as string;

    try {
      const result = await GenreController.GenreBusiness.getAllMusicalGenres(
        token
      );

      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }


  
}
