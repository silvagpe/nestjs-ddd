import { Module } from '@nestjs/common';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { StoreRepository } from 'src/infrastructure/repositories/store-repository';
import { ApplicationController } from './controller/application/application.controller';

@Module({
  controllers: [ApplicationController],
  providers:[
    { provide: IStoreRepository, useClass: StoreRepository}
]
})
export class ApiModule {}