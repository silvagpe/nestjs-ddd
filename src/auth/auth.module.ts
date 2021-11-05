import { Module } from '@nestjs/common';
import { Bootstrap } from 'src/api/boostrap';

@Module({
    providers:[
        ...Bootstrap.registerRepositories(),
    ]
})
export class AuthModule {}
