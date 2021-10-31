import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [InfrastructureModule, ApiModule, DomainModule],  
})
export class AppModule {}
