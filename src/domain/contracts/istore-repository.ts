import { Store } from "../entities/store";

export abstract class IStoreRepository {
    abstract getById(id:string):Store;
    abstract getByEmail(email:string): Store;
    abstract getAll():Store[];

    abstract query(search:string):Store[];    
    
    abstract add(store:Store):Store;
    abstract update(store:Store):Store;
    abstract delete(store:Store):boolean;
    
}