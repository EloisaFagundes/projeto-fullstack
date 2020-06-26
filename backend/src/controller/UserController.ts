import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { Request, Response } from "express";

export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashManager(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async login(req: Request, res: Response) {
    const { nicknameOrEmail, password } = req.body;
    try {
      const result = await UserController.UserBusiness.login(
        nicknameOrEmail,
        password
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async signupBand(req: Request, res: Response) {
    const { name, email, nickname, password, description } = req.body;
    try {
      const result = await UserController.UserBusiness.signupBand(
        name,
        email,
        nickname,
        password,
        description
      );

      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async signupAdmin(req: Request, res: Response) {
    const { name, email, nickname, password } = req.body;
    const token = req.headers.authorization as string;
    try {
      const result = await UserController.UserBusiness.signupAdmin(
        name,
        email,
        nickname,
        password,
        token
      );

      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async signupUser(req: Request, res: Response) {
    const { name, email, nickname, password, role } = req.body;

    try {
      const result = await UserController.UserBusiness.signupUser(
        name,
        email,
        nickname,
        password,
        role
      );

      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getAllBandsToBeApproved(req: Request, res: Response) {
    const token = req.headers.authorization as string;

    try {
      const result = await UserController.UserBusiness.getAllBandsToBeApproved(
        token
      );

      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }


  public async approveBand(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const id = req.params.id

    try {
      await UserController.UserBusiness.approveBand(token, id)
      res.status(200).send({
          message: "Artista aprovado com sucesso!"
      });

    } catch (err) {
      console.log(err);
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }









}
