import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StoreCommand } from 'src/domain/commands/store-command';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { StoreWorkflow } from 'src/domain/workflows/store-workflow';

@Controller('api/v1/stores')
export class StoresController {

    constructor(
        private readonly storeRepository: IStoreRepository,
        private readonly storeWorkflow: StoreWorkflow
    ) {}

    @Get()
    getPing(): any {
        return {
            email : this.storeRepository.getByEmail(""),
            teste: this.storeWorkflow.add(),
            isValid: this.storeWorkflow.isValid,
            error: this.storeWorkflow.Errors
        };
    }

    @Post()
    save(@Body() command: StoreCommand): any {
        return command;
    }

    @Put(":id")
    update(@Param('id') id: string, @Body() command: StoreCommand): any {
        return {
            id: id,
            command: command
        };
    }
}
