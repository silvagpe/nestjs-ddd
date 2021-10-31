import { Module } from '@nestjs/common';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { StoreRepository } from './repositories/store-repository';

@Module({})
export class InfrastructureModule {}
