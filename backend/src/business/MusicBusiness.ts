import { IdGenerator } from "../services/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { TokenGenerator } from "../services/tokenGenerator";
import { UserRole } from "../model/User";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { NotFoundError } from "../errors/NotFoundError";
import { MusicDatabase } from "../data/MusicDatabase";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { Music } from "../model/Music";
import { GenericError } from "../errors/GenericError";

export class MusicBusiness {
  constructor(
    private musicDatabase: MusicDatabase,
    private albumDatabase: AlbumDatabase,
    private userDatabase: UserDatabase,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async createMusic(token: string, albumId: string, name: string) {
    const userLoggedData = this.tokenGenerator.verify(token);
    const userLogged = await this.userDatabase.getUserById(userLoggedData.id);

    if (!name || !token || !albumId) {
      throw new InvalidParameterError(
        "Preencha os dados exigidos para cadastrar uma nova música."
      );
    }

    if (userLogged?.getRole() !== UserRole.BAND) {
      throw new NotFoundError(
        "Seu usuário não tem permissão para criar uma música."
      );
    }

    if (!userLogged) {
      throw new NotFoundError("Usuário não localizado, efetue login.");
    }

    const id = this.idGenerator.generate();

    const findAlbum = await this.albumDatabase.getAlbumById(albumId);
    if (!findAlbum) {
      throw new NotFoundError(
        "Álbum não encontrado. Selecione um álbum existente ou cadastre um novo álbum."
      );
    }

    const musicAlbum = await this.musicDatabase.getMusicsByAlbumId(albumId);
    const findNameMusic = musicAlbum.find((music) => music.getName() === name);
    if (findNameMusic) {
      throw new GenericError(
        "Música já cadastrada com esse nome. Escolha outro nome para essa música."
      );
    }

    const music = new Music(id, albumId, name);
    await this.musicDatabase.createMusic(music);
  }
}
