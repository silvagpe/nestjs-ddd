import { ApiProperty } from "@nestjs/swagger";

export class StoreCommand {

    @ApiProperty()
    public id: string;
    @ApiProperty()
    public active: boolean;
    @ApiProperty()
    public email: string;
}
