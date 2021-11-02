import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
@Module({
  imports: [    
    ApiModule,
    DomainModule,
    InfrastructureModule,    
    ],  
})
export class AppModule {}
