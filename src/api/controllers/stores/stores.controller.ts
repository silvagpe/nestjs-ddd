import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { StoreCommand } from 'src/domain/commands/store-command';

@Controller('api/v1/stores')
export class StoresController {

    @Post()
    save(@Body() command: StoreCommand): any {
        return command;
    }

    @Put(":id")
    update(@Param('id') id: string, @Body() command: StoreCommand): any {
        return {
            id: id,
            command:command
        };
    }
}
