import { IdGenerator } from "../services/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserRole } from "../model/User";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { NotFoundError } from "../errors/NotFoundError";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { GenreDatabase } from "../data/GenreDatabase";
import { Album } from "../model/Album";

export class AlbumBusiness {
  constructor(
    private albumDatabase: AlbumDatabase,
    private userDatabase: UserDatabase,
    private genreDatabase: GenreDatabase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async createAlbum(token: string, name: string, genresInfo: string[]) {
    const userLoggedData = this.tokenGenerator.verify(token);
    const userLogged = await this.userDatabase.getUserById(userLoggedData.id);

    if (userLogged?.getRole() !== UserRole.BAND) {
      throw new NotFoundError(
        "Seu usuário não tem permissão para criar um álbum."
      );
    }

    if (!name || !token || !genresInfo) {
      throw new InvalidParameterError(
        "Preencha os dados exigidos para cadastrar um novo álbum."
      );
    }

    const id = this.idGenerator.generate();
    const bandId = userLogged.getId();
    const newAlbum = new Album(id, bandId, name);

    const findByName = await this.albumDatabase.getAlbumByName(name, bandId);
    if (findByName) {
      throw new InvalidParameterError("Você já possui um álbum com esse nome.");
    }

    const genres = await this.genreDatabase.getAllMusicalGenres();
    for (const genre of genresInfo) {
      let find = genres.find((find) => find.getId() === genre);
      if (!find) {
        throw new NotFoundError("Não foi possível encontrar o gênero.");
      }
    }

    await this.albumDatabase.createAlbum(newAlbum);
    await this.albumDatabase.createRelatesAlbumAndGenre(
      newAlbum.getId(),
      genresInfo
    );
  }

  public async getAlbunsByBandId(token: string, albumId: string) {
    const userLoggedData = this.tokenGenerator.verify(token);
    const userLogged = await this.userDatabase.getUserById(userLoggedData.id);

    if (userLogged?.getRole() !== UserRole.BAND) {
      throw new NotFoundError(
        "Seu usuário não tem permissão para criar um álbum."
      );
    }

    if (!userLogged) {
      throw new NotFoundError("Usuário não localizado, efetue login.");
    }

    const albunsList = await this.albumDatabase.getAlbunsByBandId(
      userLogged.getId()
    );
    return albunsList;
  }
}
