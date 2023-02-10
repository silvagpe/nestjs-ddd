import { Module } from '@nestjs/common';
import { Bootstrap } from './boostrap';
import { ApplicationController } from './controllers/application/application.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { StoresController } from './controllers/stores/stores.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    Bootstrap.importJWTModule(),
    Bootstrap.importTypeOrm()
  ],
  controllers: [ApplicationController, AuthController, StoresController],
  providers: [
    ...Bootstrap.registerRepositories(),
    ...Bootstrap.registerWorkflows(),
    ...Bootstrap.registerServices(),
    ...Bootstrap.registerAuthStrategies()
  ]
})
export class ApiModule { }
