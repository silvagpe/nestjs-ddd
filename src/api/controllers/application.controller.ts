import { Controller, Get } from '@nestjs/common';


@Controller("/api/v1/application")
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return "ok";
  }

  @Get('/health')
  getInfo(): any {
    return {
        "status":"ok",
        "version": "1.0.0"
    };
  }
}
