import { Module } from '@nestjs/common';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { StoreRepository } from 'src/infrastructure/repositories/store-repository';
import { ApplicationController } from './controllers/application/application.controller';
import { AuthController } from './controllers/auth/auth/auth.controller';
import { StoresController } from './controllers/stores/stores.controller';


@Module({
  controllers: [ApplicationController, StoresController, AuthController],
  providers:[
    { provide: IStoreRepository, useClass: StoreRepository}
]
})
export class ApiModule {}
