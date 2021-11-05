import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { StoreCommand } from "../commands/store-command";
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Store extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    @ApiProperty()
    id: string;    

    @ApiProperty()
    @Column()
    active: boolean;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    registredAt: Date;

    public new(command : StoreCommand){
        Object.assign(this, command);
        this.id = !command.id ? uuidv4() : command.id
        this.registredAt = new Date();
    } 

    public update(command : StoreCommand){
        Object.assign(this, command);
    } 
}
