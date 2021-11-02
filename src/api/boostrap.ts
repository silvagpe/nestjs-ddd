import { IStoreRepository } from "src/domain/contracts/istore-repository";
import { IUserRepository } from "src/domain/contracts/iuser-repository";
import { StoreWorkflow } from "src/domain/workflows/store-workflow";
import { UserWorkflow } from "src/domain/workflows/user-workflow";
import { StoreRepository } from "src/infrastructure/repositories/store-repository";
import { UserRepository } from "src/infrastructure/repositories/user-repository";


export class Bootstrap {

    public static registerRepositories(): any {
        return [
            { provide: IStoreRepository, useClass: StoreRepository },
            { provide: IUserRepository, useClass: UserRepository },
        ]
    }
    public static registerWorkflows() {
        return [StoreWorkflow, UserWorkflow]
    }
}