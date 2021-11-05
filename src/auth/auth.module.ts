import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Bootstrap } from 'src/api/boostrap';
import { IUserRepository } from 'src/domain/contracts/iuser-repository';
import { UserRepository } from 'src/infrastructure/repositories/user-repository';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports:[
        PassportModule
    ],
    providers:[
        ...Bootstrap.registerRepositories(),
        LocalStrategy
    ]
})
export class AuthModule {}
