import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/application')
export class ApplicationController {


    @Get()
    getPing(): any {
        return "pong";
    }

    @Get('health')
    getInfo(): any {
        return {
            "status": "ok",
            "version": "0.0.0"
        };
    }
}
