import { Store } from "src/domain/entities/store";
import { IStoreRepository } from "src/domain/contracts/istore-repository"
import { Injectable } from "@nestjs/common";

@Injectable()
export class StoreRepository implements IStoreRepository  {
    
    public getByEmail(email:string): Store{
        const store = new Store();
        store.email = "teste@email.com"
        return store;        
    }
}