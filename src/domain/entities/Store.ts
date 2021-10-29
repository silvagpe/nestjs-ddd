import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


// https://github.com/kelvin-mai/nest-space-exlporer
// https://www.youtube.com/watch?v=Jx-3uMnMuPU
@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
