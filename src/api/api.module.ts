import { Module } from '@nestjs/common';
import { Bootstrap } from './boostrap';
import { ApplicationController } from './controllers/application/application.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { StoresController } from './controllers/stores/stores.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
require('dotenv').config()

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
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
