import { IStoreRepository } from "src/domain/contracts/repositories/istore-repository";
import { IUserRepository } from "src/domain/contracts/repositories/iuser-repository";
import { IAuthService } from "src/domain/contracts/services/iauth.service";
import { StoreWorkflow } from "src/domain/workflows/store-workflow";
import { UserWorkflow } from "src/domain/workflows/user-workflow";
import { StoreRepository } from "src/infrastructure/repositories/store-repository";
import { UserRepository } from "src/infrastructure/repositories/user-repository";
import { AuthService } from "src/infrastructure/services/auth.service";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";
import { LocalStrategy } from "./auth/strategies/local.strategy";


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

    public static registerServices() {
        return [
            { provide: IAuthService, useClass: AuthService },
        ]
    }

    public static registerAuthStrategies() {
        return [LocalStrategy, JwtStrategy]
    }
}