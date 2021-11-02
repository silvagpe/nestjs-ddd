import { ApiProperty } from "@nestjs/swagger";

export class LoginResult {
        
    @ApiProperty()
    public token: string;
    
    constructor(token:string) {                
        this.token = token;
    }
}
