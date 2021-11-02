import { ApiProperty } from "@nestjs/swagger";

export class LoginCommand {
    
    @ApiProperty()
    public email: string;
    @ApiProperty()
    public password: string;
}
