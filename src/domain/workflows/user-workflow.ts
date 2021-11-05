import { Injectable, Scope } from "@nestjs/common";
import { LoginCommand } from "../commands/login-command";
import { RegisterUserCommand } from "../commands/register-user-command";
import { IUserRepository } from "../contracts/repositories/iuser-repository";
import { User } from "../entities/user";
import { UserResult } from "../results/user-result";
import { WorkflowBase } from "./workflow-base";

@Injectable({ scope: Scope.REQUEST })
export class UserWorkflow extends WorkflowBase {

    constructor(private readonly userRepository: IUserRepository) {
        super();
    }

    public async add(command: RegisterUserCommand) {

        await this.validateUser(command);
        
        if (!this.isValid) {
            return Promise.reject();
        }

        try {
            const user = new User();
            user.register(command);

            
            const userSaved = await this.userRepository.save(user);
            return new UserResult(userSaved);
            
        } catch (error) {
            this.addError("Add", "Não foi possível inserir a loja");
        }
    }

    public async login(command: LoginCommand) {

        const user = await this.userRepository.login(command.email, command.password);
        
        if (!user) {
            this.addError("User", "Usuário ou senha inválidos", command.email);
        }

        if (!this.isValid) {
            return Promise.reject();
        }

        return new UserResult(user);
    }


    private async validateUser(command: RegisterUserCommand) {
        if (!command.email) {
            this.addError("email", "E-mail não informado", command.email);
        }
        if (!command.password || command.password.length < 4) {
            this.addError("email", "Senha inferior a 4 caracteres", command.email);
        }

        const userExist = await this.userRepository.getByEmail(command.email);
        if (userExist){
            this.addError("email", "E-mail já registrado no sistema", command.email);
        }
    }

    public async delete(id: string): Promise<User> {

        const user = await this.userRepository.getById(id);
        if (!user) {
            this.addError("User", "Loja não localizada", id);
        }

        if (!this.isValid) {
            return Promise.reject();
        }

        try {
            return this.userRepository.delete(user);
        } catch (error) {
            this.addError("Delete", "Não foi possível excluir a loja");
        }
    }
}