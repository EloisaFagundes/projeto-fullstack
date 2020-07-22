import { BaseDataBase } from "./BaseDatabase";
import { Music } from "../model/Music";

export class MusicDatabase extends BaseDataBase {
  protected tableName: string = "MusicSpotenu";

  private toModel(dbModel?: any): Music | undefined {
    return dbModel && new Music(dbModel.id, dbModel.album_id, dbModel.name);
  }

  public async getMusicsByAlbumId(albumId: string): Promise<Music[]> {
    const result = await super.setConnection().raw(`
        SELECT *
        FROM ${this.tableName}
        WHERE album_id = "${albumId}"
        `);

    return result[0].map((name: any) => this.toModel(name));
  }

  public async createMusic(music: Music): Promise<void> {
    await super
      .setConnection()
      .insert({
        id: music.getId(),
        album_id: music.getAlbumId(),
        name: music.getName(),
      })
      .into(this.tableName);
  }
}
