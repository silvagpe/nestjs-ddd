import { User } from "../entities/user";

export abstract class IUserRepository {
    abstract getById(id:string):Promise<User>
    abstract getByEmail(email:string): Promise<User>    
    abstract login(email:string, password:string): Promise<User>    

    abstract query(search:string):Promise<User[]>
    
    abstract save(user:User):Promise<User>
    abstract delete(user:User):Promise<User>
    
}