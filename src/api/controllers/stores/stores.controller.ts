import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { StoreCommand } from 'src/domain/commands/store-command';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { Store } from 'src/domain/entities/store';
import { StoreWorkflow } from 'src/domain/workflows/store-workflow';

@Controller('api/v1/stores')
export class StoresController {

    constructor(
        private readonly storeRepository: IStoreRepository,
        private readonly storeWorkflow: StoreWorkflow
    ) { }

    @Get()
    get(@Query('search') search: string): Promise<Store[]> {

        return this.storeRepository.query(search);
    }

    @Get(":id")
    async getById(@Param('id') id: string): Promise<Store> {
        return this.storeRepository.getById(id);
    }

    @Post()
    async add(@Body() command: StoreCommand): Promise<any> {
        return this.storeWorkflow
            .add(command)
            .then(() => { return true })
            .catch(() => {
                throw new BadRequestException(this.storeWorkflow.Errors);
            })
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() command: StoreCommand): Promise<any> {

        return this.storeWorkflow
            .update(command)
            .then(() => { return true })
            .catch(() => {
                throw new BadRequestException(this.storeWorkflow.Errors);
            })
    }

    @Delete(":id")
    async delete(@Param('id') id: string): Promise<any> {

        return this.storeWorkflow
            .delete(id)
            .then(() => { return true })
            .catch(() => {
                throw new BadRequestException(this.storeWorkflow.Errors);
            })
    }
}
