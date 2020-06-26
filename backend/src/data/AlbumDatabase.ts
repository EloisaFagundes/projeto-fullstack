import { BaseDataBase } from "./BaseDatabase";
import { Album } from "../model/Album";


// export class AlbumDatabase extends BaseDataBase {
//     protected tableName: string = "AlbunsSpotenu"

//     private toModel(dbModel?:any): Promise<Album | undefined> {
//         return dbModel && new Album(dbModel.id, dbModel.name, dbModel.band_id)
//     }

//     public async getAlbumById(): Promise<Album | undefined>{
        
//     }
// }