import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { StoreCommand } from "../commands/store-command";

@Entity()
export class Store extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    active: boolean;

    @Column()
    email: string;

    @Column()
    registredAt: Date;

    public new(command : StoreCommand){
        Object.assign(this, command);
        this.registredAt = new Date();
    } 

    public update(command : StoreCommand){
        Object.assign(this, command);
    } 
}
