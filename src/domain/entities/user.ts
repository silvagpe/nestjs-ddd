import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { RegisterUserCommand } from "../commands/register-user-command";
import { Md5 } from 'ts-md5/dist/md5';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    active: boolean;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    registredAt: Date;

    public register(command: RegisterUserCommand) {
        Object.assign(this, command);
        this.id = uuidv4()

        this.password = Md5.hashStr(`${command.email}:${command.password}`);
        
        //TODO: Revisar como ativar o cliente 
        this.active = true;
        
        this.registredAt = new Date();
    }

    public updatePassword(password: string) {
        this.password = password;
        //TODO: implementar
    }
}
