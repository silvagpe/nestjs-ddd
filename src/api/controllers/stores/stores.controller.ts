import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { StoreCommand } from 'src/domain/commands/store-command';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { Store } from 'src/domain/entities/store';
import { StoreWorkflow } from 'src/domain/workflows/store-workflow';
//import { Response } from 'express';

@Controller('api/v1/stores')
export class StoresController {

    constructor(
        private readonly storeRepository: IStoreRepository,
        private readonly storeWorkflow: StoreWorkflow
    ) { }

    @Get()
    get(@Query('search') search: string): Store[] {

        return this.storeRepository.query(search);
    }

    @Get(":id")
    getById(@Param('id') id: string): Store {
        return this.storeRepository.getById(id);
    }
    
    @Post()
    add(@Body() command: StoreCommand): any {
        this.storeWorkflow.add(command);
        if (this.storeWorkflow.isValid) {
            return true;
        }                
        throw new BadRequestException(this.storeWorkflow.Errors);
    }

    @Put(":id")
    update(@Param('id') id: string, @Body() command: StoreCommand): any {
        this.storeWorkflow.update(command); 
        if (this.storeWorkflow.isValid) {
            return true;
        }
        throw new BadRequestException(this.storeWorkflow.Errors);
    }

    @Delete(":id")
    delete(@Param('id') id: string): any {
        this.storeWorkflow.delete(id);
        if (this.storeWorkflow.isValid) {
            return true;
        }
        throw new BadRequestException(this.storeWorkflow.Errors);
    }
}
