import { BaseDataBase } from "./BaseDatabase";
import { Album } from "../model/Album";

export class AlbumDatabase extends BaseDataBase {
  protected tableName: string = "AlbumSpotenu";
  protected tableRelation: string = "RelatesAlbumAndGenreSpotenu";

  private toModel(dbModel?: any): Album | undefined {
    return dbModel && new Album(dbModel.id, dbModel.band_id, dbModel.name);
  }

  public async getAlbumById(albumId: string): Promise<Album | undefined> {
    const result = await super
      .setConnection()
      .select("*")
      .from(this.tableName)
      .where({ album_id: albumId });

    return this.toModel(result[0]);
  }

  public async getAlbumByName(
    name: string,
    bandId: string
  ): Promise<Album | undefined> {
    const result = await super
      .setConnection()
      .select("*")
      .from(this.tableName)
      .where({ name })
      .andWhere({ band_id: bandId });

    return this.toModel(result[0]);
  }

  public async getAlbunsByBandId(bandId: string): Promise<Album | undefined> {
    const result = await super
      .setConnection()
      .select("*")
      .from(this.tableName)
      .where({ band_id: bandId });

    return this.toModel(result[0]);
  }

  public async createAlbum(album: Album): Promise<void> {
    const result = await super
      .setConnection()
      .insert({
        id: album.getId(),
        band_id: album.getBandId(),
        name: album.getName(),
      })
      .into(this.tableName);
  }

  public async createRelatesAlbumAndGenre(
    albumId: string,
    genresInfo: string[]
  ): Promise<void> {
    for (const genre of genresInfo) {
      await super
        .setConnection()
        .insert({
          album_id: albumId,
          genre_id: genre,
        })
        .into(this.tableRelation);
    }
  }
}
