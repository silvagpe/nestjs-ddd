import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entities/user";

export class UserResult {

    @ApiProperty()
    public id: string;
    @ApiProperty()
    public active: boolean;
    @ApiProperty()
    public email: string;
    
    constructor(init?: Partial<User>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
