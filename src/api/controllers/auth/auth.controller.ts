import { BadRequestException, Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/api/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/api/auth/guards/local-auth.guard';
import { RegisterUserCommand } from 'src/domain/commands/register-user-command';
import { IAuthService } from 'src/domain/contracts/services/iauth.service';
import { UserResult } from 'src/domain/results/user-result';
import { UserWorkflow } from 'src/domain/workflows/user-workflow';

@Controller('api/v1/auth')
export class AuthController {

    constructor(
        private readonly authService: IAuthService,
        private readonly userWorkflow: UserWorkflow
    ) { }

    @Post("register")
    async register(@Body() command: RegisterUserCommand): Promise<UserResult> {
        return this.userWorkflow
            .add(command)
            .then((result) => { return result })
            .catch(() => {
                throw new BadRequestException(this.userWorkflow.Errors);
            })
    }

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Request() req) {
        return this.authService.login(req.user)
        // const token = await this.authService.login(req.user)
        // return {
        //     user: req.user,
        //     token 
        // }             
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        console.log("profile", req.user)
        return req.user;
    }
    // async login(@Body() command: LoginCommand): Promise<boolean> {
    //     return true;
    //     // return this.userWorkflow
    //     //     .login(command)
    //     //     .then((result) => { return result })
    //     //     .catch(() => {
    //     //         throw new BadRequestException(this.userWorkflow.Errors);
    //     //     })
    // }


}
