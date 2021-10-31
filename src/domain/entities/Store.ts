import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


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

}
