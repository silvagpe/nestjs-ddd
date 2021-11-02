import { Store } from "../entities/store";

export abstract class IStoreRepository {
    abstract getById(id:string):Promise<Store>
    abstract getByEmail(email:string): Promise<Store>
    abstract getAll():Store[]

    abstract query(search:string):Promise<Store[]>
    
    abstract save(store:Store):Promise<Store>
    abstract delete(store:Store):Promise<Store>
    
}