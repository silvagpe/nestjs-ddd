import { IStoreRepository } from "src/domain/contracts/istore-repository";
import { StoreWorkflow } from "src/domain/workflows/store-workflow";
import { StoreRepository } from "src/infrastructure/repositories/store-repository";


export class Bootstrap {

    public static registerRepositories(): any {
        return [
            { provide: IStoreRepository, useClass: StoreRepository },
        ]
    }
    public static registerWorkflows() {
        return [StoreWorkflow]
    }
}