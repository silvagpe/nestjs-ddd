import { Module } from '@nestjs/common';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { StoreWorkflow } from 'src/domain/workflows/store-workflow';
import { StoreRepository } from 'src/infrastructure/repositories/store-repository';
import { Bootstrap } from './boostrap';
import { ApplicationController } from './controllers/application/application.controller';
import { AuthController } from './controllers/auth/auth/auth.controller';
import { StoresController } from './controllers/stores/stores.controller';


@Module({
  controllers: [ApplicationController, StoresController, AuthController],
  providers:[    
    ...Bootstrap.registerRepositories(),
    ...Bootstrap.registerWorkflows()    
]
})
export class ApiModule {}
