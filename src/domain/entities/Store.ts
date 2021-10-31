import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { StoreCommand } from "../command/store-command";


// https://github.com/kelvin-mai/nest-space-exlporer
// https://www.youtube.com/watch?v=Jx-3uMnMuPU
@Entity()
export class Store {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    active: boolean;

    @Column()
    email: string;

    @Column()
    registredAt: Date;

    // constructor(init?: Partial<Store>) {

    //     if (init) {
    //         Object.assign(this, init);
    //     } else {
    //         this.registredAt = new Date();
    //     }
    // }

    /**
     *
     */

    public New(command : StoreCommand){
        Object.assign(this, command);
        this.registredAt = new Date();
    } 

    public Update(command : StoreCommand){
        Object.assign(this, command);
    } 
}
