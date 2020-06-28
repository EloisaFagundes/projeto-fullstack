export class Music {
  constructor(
    private id: string,
    private albumId: string,
    private name: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getAlbumId(): string {
    return this.albumId;
  }

  public getName(): string {
    return this.name;
  }
}
