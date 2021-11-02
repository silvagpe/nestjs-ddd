import { Store } from "src/domain/entities/store";
import { IStoreRepository } from "src/domain/contracts/istore-repository"
import { Injectable } from "@nestjs/common";

@Injectable()
export class StoreRepository implements IStoreRepository  {
    getById(id: string): Store {
        throw new Error("Method not implemented.");
    }

    public getByEmail(email:string): Store{
        const store = new Store();
        store.email = "teste@email.com"
        return store;        
    }
    getAll(): Store[] {
        console.log("getAll");
        return []
    }

    query(search: string): Store[] {
        console.log("query");
        return []
    }

    add(store: Store): Store {
        //throw new Error("Method not implemented.");
        console.log("add", store);
        return store;
    }

    update(store: Store): Store {
        //throw new Error("Method not implemented.");
        console.log("update",store);
        return store;
    }

    delete(store: Store): boolean {
        console.log("delete",store);
        return true;
    }
    
    
}