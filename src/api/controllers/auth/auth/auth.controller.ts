import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { LoginCommand } from 'src/domain/commands/login-command';
import { RegisterUserCommand } from 'src/domain/commands/register-user-command';
import { IUserRepository } from 'src/domain/contracts/iuser-repository';
import { UserResult } from 'src/domain/results/user-result';
import { UserWorkflow } from 'src/domain/workflows/user-workflow';

@Controller('api/v1/auth')
export class AuthController {
    
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly userWorkflow: UserWorkflow
    ) {}

    @Post("/register")
    async register(@Body() command: RegisterUserCommand): Promise<UserResult> {
        return this.userWorkflow
            .add(command)
            .then((result) => { return result })
            .catch(() => {
                throw new BadRequestException(this.userWorkflow.Errors);
            })
    }

    @Post("/login")
    async login(@Body() command: LoginCommand): Promise<UserResult> {
        return this.userWorkflow
            .login(command)
            .then((result) => { return result })
            .catch(() => {
                throw new BadRequestException(this.userWorkflow.Errors);
            })
    }


}
