import { BaseDataBase } from './BaseDatabase'
import { User } from "../model/User"

export class UserDatabase extends BaseDataBase {
    protected tableName: string = "UserSpotenu"


    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.nickname,
                dbModel.password,
                dbModel.role,
                dbModel.approved,
                dbModel.description
               
            )
        )
    }


    public async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await super.setConnection()
        .select("*")
        .from(this.tableName)
        .where({email})

        return this.toModel(result[0])
    }

    public async getUserByNickname(nickname: string): Promise<User | undefined> {
        const result = await super.setConnection()
        .select("*")
        .from(this.tableName)
        .where({nickname})

        return this.toModel(result[0])  
    }


    public async getUserById(id: string): Promise<User | undefined> {
        const result = await super.setConnection()
        .select("*")
        .from(this.tableName)
        .where({id})

        return this.toModel(result[0])
    }

    public async createBandUser(user: User): Promise<void> {
        await super.setConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                nickname: user.getNickname(),
                password: user.getPassword(),
                role: user.getRole(),
                description: user.getDescription(),
                approved: user.getApproved()
            })
            .into(this.tableName)
    }

    public async createUserOrAdmin(user: User): Promise<void> {
        await super.setConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                nickname: user.getNickname(),
                password: user.getPassword(),
                role: user.getRole(),
                approved: user.getApproved()
            })
            .into(this.tableName)
    }

    public async getAllBandsToBeApproved(): Promise<any> {
        const result = await super.setConnection()
        .select("*")
        .from(this.tableName)
        .where({role: "BAND"})

        return result.map((user) => this.toModel(user))
    }

    public async approveBand(id: string): Promise<void> {
         await super.setConnection().raw(`
         UPDATE ${this.tableName}
         SET approved = 1
         WHERE id= "${id}"
         `)
    }
}