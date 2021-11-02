import { Controller, Get } from '@nestjs/common';
import { IStoreRepository } from 'src/domain/contracts/istore-repository';
import { Store } from 'src/domain/entities/store';

@Controller('api/v1/application')
export class ApplicationController {


    constructor(private readonly storeRepository: IStoreRepository) {

    }

    @Get()
    getPing(): Store {
        return this.storeRepository.getByEmail("a");
    }

    @Get('/health')
    getInfo(): any {
        return {
            "status": "ok",
            "version": "1.0.0"
        };
    }
}
