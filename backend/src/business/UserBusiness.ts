import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/hashGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { stringToUserRole, User, UserRole } from "../model/User";
import { NotFoundError } from "../errors/NotFoundError";
import { GenericError } from "../errors/GenericError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashManager,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async login(nicknameOrEmail: string, password: string) {
    if (!nicknameOrEmail || !password) {
      throw new InvalidParameterError("Parâmetros inválidos");
    }

    let user;
    if (nicknameOrEmail.indexOf("@") !== -1) {
      user = await this.userDatabase.getUserByEmail(nicknameOrEmail);
    } else {
      user = await this.userDatabase.getUserByNickname(nicknameOrEmail);
    }

    if (!user) {
      throw new NotFoundError("Usuário e/ou senha inválidos");
    }

    if (user.getApproved() === false) {
      throw new GenericError(
        "O usuário precisa de autorização de um administrador para logar."
      );
    }

    const verifyCorrectPassword = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!verifyCorrectPassword) {
      throw new InvalidParameterError("Usuário e/ou senha inválidos");
    }

    const acessToken = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });
    return { acessToken, user };
  }

  public async signupBand(
    name: string,
    email: string,
    nickname: string,
    password: string,
    description: string
  ) {
    if (!name || !email || !password || !nickname || !description) {
      throw new InvalidParameterError("Parâmetros inválidos");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("E-mail inválido");
    }

    if (password.length < 6) {
      throw new InvalidParameterError(
        "Senha inválida, a senha deve possuir mais de 6 caracteres."
      );
    }

    const id = this.idGenerator.generate();
    const role = UserRole.BAND;

    const hashPassword = await this.hashGenerator.generateHash(password);

    const user = new User(
      id,
      name,
      email,
      nickname,
      hashPassword,
      stringToUserRole(role),
      false,
      description
    );

    await this.userDatabase.createBandUser(user);

    return { user };
  }

  public async signupAdmin(
    name: string,
    email: string,
    nickname: string,
    password: string,
    token: string
  ) {
    const userLoggedData = this.tokenGenerator.verify(token);

    const userLogged = await this.userDatabase.getUserById(userLoggedData.id);

    if (userLogged?.getRole() !== UserRole.ADMIN) {
      throw new NotFoundError(
        "Seu usuário não tem permissão para acessar essa página."
      );
    }

    if (!name || !email || !password || !nickname) {
      throw new InvalidParameterError("Parâmetros inválidos");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("E-mail inválido");
    }

    if (password.length <= 10) {
      throw new InvalidParameterError(
        "Senha inválida, a senha deve possuir mais de 10 caracteres."
      );
    }

    const id = this.idGenerator.generate();
    const role = UserRole.ADMIN;

    const hashPassword = await this.hashGenerator.generateHash(password);

    await this.userDatabase.createBandUser(
      new User(
        id,
        name,
        email,
        nickname,
        hashPassword,
        stringToUserRole(role),
        true
      )
    );

    const acessToken = this.tokenGenerator.generate({ id, role });
    return { acessToken };
  }

  public async signupUser(
    name: string,
    email: string,
    nickname: string,
    password: string,
    role: string
  ) {
    if (!name || !email || !password || !nickname) {
      throw new InvalidParameterError("Parâmetros inválidos");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("E-mail inválido");
    }

    if (password.length < 6) {
      throw new InvalidParameterError(
        "Senha inválida, verifique se ea possui mais de 6 caracteres."
      );
    }

    const id = this.idGenerator.generate();

    const hashPassword = await this.hashGenerator.generateHash(password);
    const user = new User(
      id,
      name,
      email,
      nickname,
      hashPassword,
      stringToUserRole(role),
      true
    );

    await this.userDatabase.createBandUser(user);

    const acessToken = this.tokenGenerator.generate({ id, role });
    return { acessToken, user };
  }

  public async getAllBandsToBeApproved(token: string) {
    const userInfo = this.tokenGenerator.verify(token);
    const user = await this.userDatabase.getUserById(userInfo.id);

    if (!user) {
      throw new NotFoundError(
        "Não foi possível encontrar esse usuário. É necessário realizar login."
      );
    }

    if (user.getRole() !== UserRole.ADMIN) {
      throw new GenericError(
        "Seu usuário não ter permissão para vizualizar essa página."
      );
    }

    const artists = await this.userDatabase.getAllBandsToBeApproved();

    return artists.map(
      (band: {
        getId: () => any;
        getName: () => any;
        getEmail: () => any;
        getNickname: () => any;
        getApproved: () => boolean;
      }) => ({
        id: band.getId(),
        name: band.getName(),
        email: band.getEmail(),
        nickname: band.getNickname(),
        approved: band.getApproved(),
      })
    );
  }

  public async approveBand(token: string, id: string) {
    const userLoggedData = this.tokenGenerator.verify(token);

    const userLogged = await this.userDatabase.getUserById(userLoggedData.id);

    if (userLogged?.getRole() !== UserRole.ADMIN) {
      throw new NotFoundError(
        "Seu usuário não tem permissão para acessar essa página."
      );
    }

    const band = await this.userDatabase.getUserById(id);

    if (!band) {
      throw new NotFoundError("Artista não encontrado.");
    }

    if (band.getApproved() == true) {
      throw new GenericError("Esse artista já foi aprovado.");
    }

    await this.userDatabase.approveBand(id);
  }
}
