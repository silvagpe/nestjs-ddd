import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserCommand {

    @ApiProperty()
    public id: string;
    @ApiProperty()
    public active: boolean;
    @ApiProperty()
    public email: string;
    @ApiProperty()
    public password: string;
}
