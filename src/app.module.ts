import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [    
    ApiModule,
    DomainModule,
    InfrastructureModule,
    AuthModule,    
    ],  
})
export class AppModule {}
