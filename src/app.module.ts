import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ApiModule,
    DomainModule,
    InfrastructureModule,    
    ],  
})
export class AppModule {}
