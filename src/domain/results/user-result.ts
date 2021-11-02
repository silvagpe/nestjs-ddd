import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entities/user";

export class UserResult {

    @ApiProperty()
    public id: string;
    @ApiProperty()
    public active: boolean;
    @ApiProperty()
    public email: string;
    
    constructor(user: User) {
        this.id = user.id
        this.active = user.active
        this.email = user.email
    }
}
