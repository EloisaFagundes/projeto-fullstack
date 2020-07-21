import { IdGenerator } from "../services/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserRole } from "../model/User";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { NotFoundError } from "../errors/NotFoundError";
import { GenericError } from "../errors/GenericError";
import { Genre } from "../model/Genre";
import { GenreDatabase } from "../data/GenreDatabase";

export class GenreBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private genreDatabase: GenreDatabase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async addMusicalGenre(name: string, token: string) {
    const userLoggedData = this.tokenGenerator.verify(token);

    const userLogged = await this.userDatabase.getUserById(userLoggedData.id);

    const id = this.idGenerator.generate();

    if (userLogged?.getRole() !== UserRole.ADMIN) {
      throw new NotFoundError(
        "Seu usuário não tem permissão para cadastrar um novo novo gênero."
      );
    }

    if (!name || !token) {
      throw new InvalidParameterError(
        "Preencha os dados exigidos para cadastrar um novo gênero."
      );
    }

    const musicalGenre = await this.genreDatabase.getGenreByName(name);

    if (musicalGenre) {
      throw new GenericError("Gênero já cadastrado!");
    }

    const newMusicalGenre = await new Genre(id, name);
    await this.genreDatabase.addMusicalGenre(newMusicalGenre);
  }

  public async getAllMusicalGenres(token: string) {
    const userInfo = this.tokenGenerator.verify(token);
    const user = await this.userDatabase.getUserById(userInfo.id);

    if (!user) {
      throw new NotFoundError(
        "Não foi possível encontrar esse usuário. É necessário realizar login."
      );
    }

    const musicalGenres = await this.genreDatabase.getAllMusicalGenres();

    return musicalGenres.map(
      (genres: { getId: () => any; getName: () => any }) => ({
        id: genres.getId(),
        name: genres.getName(),
      })
    );
  }
}
