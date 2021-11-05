import { Store } from "src/domain/entities/store";
import { Injectable } from "@nestjs/common";
import { IStoreRepository } from "src/domain/contracts/repositories/istore-repository";

@Injectable()
export class StoreRepository implements IStoreRepository {
    
    async getById(id: string): Promise<Store> {
        return Store.findOne(id)
    }

    public getByEmail(email: string): Promise<Store> {
        return Store
            .getRepository()
            .createQueryBuilder()
            .where("email = :email", { email })
            .getOne()
    }
    getAll(): Store[] {        
        return []
    }

    async query(search: string): Promise<Store[]> {
        search = !search ? '' : search;
        search = `%${search}%`;
        return Store
            .getRepository()
            .createQueryBuilder()
            .where("email ilike(:search)", { search })
            .getMany()
    }

    async save(store: Store): Promise<Store> {
        return store.save();
    }

    async delete(store: Store): Promise<Store> {        
        return store.remove()        
    }


}