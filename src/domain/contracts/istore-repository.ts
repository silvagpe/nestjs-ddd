import { Store } from "../entities/store";

export abstract class IStoreRepository {
    abstract getByEmail(email:string): Store;
}