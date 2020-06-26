import { BaseDataBase } from "./BaseDatabase";
import { Genre } from "../model/Genre";

export class GenreDatabase extends BaseDataBase {
  protected tableName: string = "GenreSpotenu";

  private toModel(dbModel?: any): Genre | undefined {
    return dbModel && new Genre(dbModel.id, dbModel.name);
  }

  public async getGenreByName(name: string): Promise<Genre | undefined> {
    const result = await super
      .setConnection()
      .select("*")
      .from(this.tableName)
      .where({ name });

    return this.toModel(result[0]);
  }

  public async getGenreById(id: string): Promise<Genre | undefined> {
    const result = await super
      .setConnection()
      .select("*")
      .from(this.tableName)
      .where({ id });

    return this.toModel(result[0]);
  }

  public async addMusicalGenre(genre: Genre): Promise<void> {
    await super
      .setConnection()
      .insert({
        id: genre.getId(),
        name: genre.getName(),
      })
      .into(this.tableName);
  }

  public async getAllMusicalGenres(): Promise<any> {
    const result = await super.setConnection()
     .select("*")
     .from(this.tableName);

    return result.map((name) => this.toModel(name));
  }
}
