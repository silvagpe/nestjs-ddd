import { Module } from '@nestjs/common';
import { Bootstrap } from './boostrap';
import { ApplicationController } from './controllers/application/application.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { StoresController } from './controllers/stores/stores.controller';


@Module({
  controllers: [ApplicationController, AuthController, StoresController],
  providers:[    
    ...Bootstrap.registerRepositories(),
    ...Bootstrap.registerWorkflows(),    
]
})
export class ApiModule {}
