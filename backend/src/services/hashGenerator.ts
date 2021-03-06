import bcrypt from "bcryptjs"; 

export class HashManager{
    public generateHash = async (s: string): Promise<any> => {
        const rounds: number = Number(process.env.ROUNDS)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(s, salt)
        return result
    }

    public compareHash = async (s: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(s, hash)
    }
}